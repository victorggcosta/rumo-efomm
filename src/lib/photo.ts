export function compressPhoto(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) return Promise.reject(new Error("tipo"));
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      const first = draw(image, 256, 0.72);
      resolve(first.length > 120_000 ? draw(image, 160, 0.5) : first);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("imagem"));
    };
    image.src = url;
  });
}

function draw(image: HTMLImageElement, max: number, quality: number): string {
  const scale = Math.min(1, max / Math.max(image.width, image.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const context = canvas.getContext("2d");
  if (!context) return "";
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", quality);
}
