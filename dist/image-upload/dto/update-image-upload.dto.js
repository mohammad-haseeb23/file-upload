"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImageUploadDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_image_upload_dto_1 = require("./create-image-upload.dto");
class UpdateImageUploadDto extends (0, mapped_types_1.PartialType)(create_image_upload_dto_1.CreateImageUploadDto) {
}
exports.UpdateImageUploadDto = UpdateImageUploadDto;
//# sourceMappingURL=update-image-upload.dto.js.map