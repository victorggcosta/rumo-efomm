package com.rumoefomm.app;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

/**
 * Grava o backup na pasta pública Documentos quando o acesso direto por arquivo
 * é recusado pelo armazenamento do Android 10 ou mais novo.
 */
@CapacitorPlugin(name = "DocumentsBackup")
public class DocumentsBackupPlugin extends Plugin {
    @PluginMethod
    public void save(PluginCall call) {
        String fileName = call.getString("fileName");
        String data = call.getString("data");
        if (fileName == null || fileName.isBlank() || fileName.contains("/") || fileName.contains("\\") || data == null) {
            call.reject("Arquivo de backup inválido.");
            return;
        }
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.Q) {
            call.reject("A pasta Documentos deste Android aceita a gravação direta.");
            return;
        }

        new Thread(() -> {
            try {
                Uri uri = writePublicDocuments(fileName, data);
                JSObject result = new JSObject();
                result.put("uri", uri.toString());
                call.resolve(result);
            } catch (Exception error) {
                call.reject("Não foi possível gravar o backup em Documentos.", error);
            }
        }).start();
    }

    private Uri writePublicDocuments(String fileName, String data) throws Exception {
        ContentResolver resolver = getContext().getContentResolver();
        Uri collection = MediaStore.Files.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY);
        String relativePath = Environment.DIRECTORY_DOCUMENTS + "/";
        resolver.delete(
            collection,
            MediaStore.MediaColumns.DISPLAY_NAME + "=? AND " + MediaStore.MediaColumns.RELATIVE_PATH + "=?",
            new String[] { fileName, relativePath }
        );

        ContentValues values = new ContentValues();
        values.put(MediaStore.MediaColumns.DISPLAY_NAME, fileName);
        values.put(MediaStore.MediaColumns.MIME_TYPE, "application/json");
        values.put(MediaStore.MediaColumns.RELATIVE_PATH, relativePath);
        values.put(MediaStore.MediaColumns.IS_PENDING, 1);

        Uri item = resolver.insert(collection, values);
        if (item == null) {
            throw new IllegalStateException("MediaStore não criou o arquivo.");
        }
        try (OutputStream output = resolver.openOutputStream(item)) {
            if (output == null) {
                throw new IllegalStateException("MediaStore não abriu o arquivo.");
            }
            output.write(data.getBytes(StandardCharsets.UTF_8));
        }
        ContentValues published = new ContentValues();
        published.put(MediaStore.MediaColumns.IS_PENDING, 0);
        resolver.update(item, published, null, null);
        return item;
    }
}
