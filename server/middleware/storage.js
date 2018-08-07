import { multer } from 'multer';

const imageStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '/media/uploads/images');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});

module.exports.imageStorage = imageStorage;
