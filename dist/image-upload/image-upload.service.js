"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploadService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const fs = require("fs-extra");
let ImageUploadService = class ImageUploadService {
    async uploadFile(file) {
        const uniqueFilename = (0, uuid_1.v4)() + file.originalname;
        if (!fs.existsSync('images')) {
            fs.mkdirSync('images');
        }
        await fs.writeFile(`images/${uniqueFilename}`, file.buffer);
        return { url: `${process.env.BASE_URL}/images/${uniqueFilename}` };
    }
    create(createImageUploadDto) {
        return 'This action adds a new imageUpload';
    }
    findAll() {
        return `This action returns all imageUpload`;
    }
    findOne(id) {
        return `This action returns a #${id} imageUpload`;
    }
    update(id, updateImageUploadDto) {
        return `This action updates a #${id} imageUpload`;
    }
    remove(id) {
        return `This action removes a #${id} imageUpload`;
    }
};
ImageUploadService = __decorate([
    (0, common_1.Injectable)()
], ImageUploadService);
exports.ImageUploadService = ImageUploadService;
//# sourceMappingURL=image-upload.service.js.map