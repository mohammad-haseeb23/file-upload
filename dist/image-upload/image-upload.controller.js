"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploadController = void 0;
const common_1 = require("@nestjs/common");
const image_upload_service_1 = require("./image-upload.service");
const create_image_upload_dto_1 = require("./dto/create-image-upload.dto");
const update_image_upload_dto_1 = require("./dto/update-image-upload.dto");
const platform_express_1 = require("@nestjs/platform-express");
let ImageUploadController = class ImageUploadController {
    constructor(imageUploadService) {
        this.imageUploadService = imageUploadService;
    }
    uploadFile(file) {
        return this.imageUploadService.uploadFile(file);
    }
    create(createImageUploadDto) {
        return this.imageUploadService.create(createImageUploadDto);
    }
    findAll() {
        return this.imageUploadService.findAll();
    }
    findOne(id) {
        return this.imageUploadService.findOne(+id);
    }
    update(id, updateImageUploadDto) {
        return this.imageUploadService.update(+id, updateImageUploadDto);
    }
    remove(id) {
        return this.imageUploadService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ImageUploadController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_image_upload_dto_1.CreateImageUploadDto]),
    __metadata("design:returntype", void 0)
], ImageUploadController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageUploadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageUploadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_image_upload_dto_1.UpdateImageUploadDto]),
    __metadata("design:returntype", void 0)
], ImageUploadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageUploadController.prototype, "remove", null);
ImageUploadController = __decorate([
    (0, common_1.Controller)('image-upload'),
    __metadata("design:paramtypes", [image_upload_service_1.ImageUploadService])
], ImageUploadController);
exports.ImageUploadController = ImageUploadController;
//# sourceMappingURL=image-upload.controller.js.map