import { Directory, Encoding, Filesystem } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";
import { registerPlugin } from "@capacitor/core";

interface DocumentsBackupPlugin {
  save(options: { fileName: string; data: string }): Promise<{ uri: string }>;
}

const DocumentsBackup = registerPlugin<DocumentsBackupPlugin>("DocumentsBackup");

function shareCanceled(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return /cancel/i.test(message);
}

async function shareFile(url: string): Promise<void> {
  try {
    await Share.share({ title: "Backup Rumo à EFOMM", url });
  } catch (error) {
    if (!shareCanceled(error)) throw error;
  }
}

/** Grava o JSON em Documentos e abre o menu de compartilhar do Android. */
export async function saveNativeBackup(json: string, fileName: string): Promise<void> {
  const permission = await Filesystem.requestPermissions();
  if (permission.publicStorage === "denied") {
    throw new Error("permissão");
  }

  let shareUrl = "";
  try {
    await Filesystem.writeFile({
      path: fileName,
      data: json,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
      recursive: true,
    });
    shareUrl = (
      await Filesystem.getUri({
        path: fileName,
        directory: Directory.Documents,
      })
    ).uri;
  } catch {
    await DocumentsBackup.save({ fileName, data: json });
    await Filesystem.writeFile({
      path: fileName,
      data: json,
      directory: Directory.Cache,
      encoding: Encoding.UTF8,
    });
    shareUrl = (
      await Filesystem.getUri({
        path: fileName,
        directory: Directory.Cache,
      })
    ).uri;
  }

  try {
    await shareFile(shareUrl);
  } catch {
    try {
      await Filesystem.writeFile({
        path: fileName,
        data: json,
        directory: Directory.Cache,
        encoding: Encoding.UTF8,
      });
      const cached = await Filesystem.getUri({
        path: fileName,
        directory: Directory.Cache,
      });
      await shareFile(cached.uri);
    } catch {
      // O JSON já está na pasta Documentos. O menu de compartilhar é extra.
    }
  }
}
