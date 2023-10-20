const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../upload'));
    },
    filename: (req, file, callback) => {
        callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({ storage });

module.exports = upload;