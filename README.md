# Funkit - Media Archive

## About
Funkit is an archive of various media files (mostly photos), arranged in categories for easy browsing and use.

## File Structure
Refer to the structure provided above.

## Adding Images to Categories
1. Add your image files to the `public/uploads/` folder.
2. Update the `images` array in `app.js` with the file name and category, like so:
   ```javascript
   const images = [
       { fileName: "nature1.jpg", category: "Nature" },
       { fileName: "urban1.jpg", category: "Urban" },
   ];
   ```
3. Restart the server: `node app.js`.

## Running the Server
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node app.js
   ```
3. Visit `http://localhost:3000` in your browser.

## License
MIT License
