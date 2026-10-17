# World Tour Expo Digital Flyer Landing Page

A responsive, mobile-first digital flyer gallery for Reliable International Travel Services. Built with HTML, CSS, and vanilla JavaScript.

## Quick start
1. Extract the ZIP file.
2. Open `index.html` in a browser, or serve the folder with any static web server.
3. Replace the sample flyer and logo images in `images/` with your real brand assets.
4. Update the `flyers` array near the top of `js/script.js`.

For best results with downloads and local image paths, deploy the folder to a static host such as GitHub Pages, Netlify, or your own web hosting.

## Replace the logo
- Replace `images/logo-placeholder.svg` with your actual logo file, or edit the logo path in `index.html`.
- If you use a different filename, update the `<img>` paths and favicon in `index.html`.

## Add or edit a flyer
Edit the `flyers` array in `js/script.js`. Each object can contain:
- `id`: unique identifier
- `title`: flyer title shown in the gallery and modal
- `destination`: `Asia`, `Europe`, or `Other` (used by the filter chips)
- `image`: original/high-resolution image path used for preview and download
- `thumbnail`: optional smaller image path; if omitted, the original is used
- `filename`: suggested download filename
- `description`: short text shown in the gallery and modal

Example:
```js
{
  id: 5,
  title: "South Korea Autumn Tour",
  destination: "Asia",
  image: "images/korea-autumn-original.webp",
  thumbnail: "images/korea-autumn-thumb.webp",
  filename: "south-korea-autumn-tour.webp",
  description: "Discover South Korea in autumn."
}
```
Place the corresponding image files inside `images/`. Use unique IDs and valid relative paths. You can reorder objects in the array to change the gallery order.

## Downloads
The download button points to the original `image` path, not the thumbnail. Browsers usually honor the `download` attribute for same-origin files. Some hosts or cross-origin URLs may open the image instead; visitors can then use their browser's Save option.

## Included temporary assets
`images/logo-placeholder.svg` and `images/sample-flyer.svg` are clearly labeled temporary assets because no actual company logo or travel flyer images were included with the project prompt. Replace them before publishing.

## Notes
- The splash screen lasts approximately four seconds and respects reduced-motion preferences.
- Flyer thumbnails use lazy loading.
- The preview modal supports Escape, outside click, focus restoration, and background scroll locking.
- The CSS imports Google Fonts; if offline operation is required, remove the `@import` line and use the fallback fonts.
