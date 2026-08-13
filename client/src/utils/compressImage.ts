const MAX_IMAGE_SIZE = 10 * 1024 * 1024
const TARGET_IMAGE_SIZE = 9 * 1024 * 1024
const MAX_IMAGE_DIMENSION = 2400

function canvasToBlob(canvas: HTMLCanvasElement, quality: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (blob) {
                resolve(blob)
            } else {
                reject(new Error("Could not compress the selected image"))
            }
        }, "image/jpeg", quality)
    })
}

export async function compressImage(file: File): Promise<File> {
    if (file.size <= MAX_IMAGE_SIZE) {
        return file
    }

    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, MAX_IMAGE_DIMENSION / Math.max(bitmap.width, bitmap.height))
    const canvas = document.createElement("canvas")
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)

    const context = canvas.getContext("2d")
    if (!context) {
        bitmap.close()
        throw new Error("Image compression is not supported by this browser")
    }

    context.fillStyle = "#ffffff"
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    bitmap.close()

    let quality = 0.9
    let blob = await canvasToBlob(canvas, quality)

    while (blob.size > TARGET_IMAGE_SIZE && quality > 0.4) {
        quality -= 0.1
        blob = await canvasToBlob(canvas, quality)
    }

    if (blob.size > MAX_IMAGE_SIZE) {
        throw new Error("The image is still larger than 10 MB after compression")
    }

    const fileName = file.name.replace(/\.[^/.]+$/, "")
    return new File([blob], `${fileName}.jpg`, {
        type: "image/jpeg",
        lastModified: Date.now(),
    })
}
