/// <reference types="multer" />
import { CreateImageUploadDto } from './dto/create-image-upload.dto';
import { UpdateImageUploadDto } from './dto/update-image-upload.dto';
export declare class ImageUploadService {
    uploadFile(file: Express.Multer.File): Promise<{
        url: string;
    }>;
    create(createImageUploadDto: CreateImageUploadDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateImageUploadDto: UpdateImageUploadDto): string;
    remove(id: number): string;
}
