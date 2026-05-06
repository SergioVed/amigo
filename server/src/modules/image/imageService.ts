import { Injectable } from "@nestjs/common";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

@Injectable()
export class ImageService {

    constructor() {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        })
    }

    async saveImage(file: Express.Multer.File) {
        const result = await new Promise<UploadApiResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream({
                folder: "amigo/feedback",
                resource_type: "image"
            }, (error, result) => {
                if (error) return reject(error)
                if (!result) return reject(new Error("Cloudinary upload failed"))    

                resolve(result)
            })
            
            uploadStream.end(file.buffer)
        })

        return result.secure_url
    }
}