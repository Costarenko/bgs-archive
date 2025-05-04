const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Static folder to serve CSS, JS, and images
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Data to simulate images in categories
const images = [
    { fileName: "nature1.jpg", category: "Nature" },
    { fileName: "urban1.jpg", category: "Urban" },
    { fileName: "abstract1.jpg", category: "Abstract" },
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: "Funkit - Media Archive" });
});

app.get('/categories', (req, res) => {
    const categories = [...new Set(images.map(img => img.category))]; // Unique categories
    res.render('categories', { title: "Categories", categories });
});

app.get('/categories/:category', (req, res) => {
    const category = req.params.category;
    const filteredImages = images.filter(img => img.category === category);
    res.render('category', { title: category, images: filteredImages });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
