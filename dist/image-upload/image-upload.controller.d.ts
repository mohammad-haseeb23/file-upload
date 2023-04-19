/// <reference types="multer" />
import { ImageUploadService } from './image-upload.service';
import { CreateImageUploadDto } from './dto/create-image-upload.dto';
import { UpdateImageUploadDto } from './dto/update-image-upload.dto';
export declare class ImageUploadController {
    private readonly imageUploadService;
    constructor(imageUploadService: ImageUploadService);
    uploadFile(file: Express.Multer.File): Promise<{
        url: string;
    }>;
    create(createImageUploadDto: CreateImageUploadDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateImageUploadDto: UpdateImageUploadDto): string;
    remove(id: string): string;
}
