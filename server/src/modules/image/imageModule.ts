import { Module } from "@nestjs/common";
import { ImageService } from "./imageService";


@Module({
    providers: [ImageService],
    exports: [ImageService]
})
export class ImageModule {}