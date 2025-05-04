const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads'); // Save to uploads directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage });

// Upload route
app.post('/upload', upload.single('image'), (req, res) => {
    const imageFile = req.file;
    const category = req.body.category;

    if (!imageFile || !category) {
        return res.status(400).send("All fields are required!");
    }

    // Save image details to database (or in-memory storage for now)
    // Example:
    // db.save({ fileName: imageFile.filename, category });

    console.log(`Uploaded: ${imageFile.filename} to category: ${category}`);
    res.send("Image uploaded successfully!");
});
