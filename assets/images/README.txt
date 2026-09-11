This project currently loads all images directly from Unsplash's CDN
(see the "images.unsplash.com" URLs inside index.html) so the site
works out of the box with no local images required.

To use your own photos instead:
1. Add your image files to this "assets/images" folder
   (e.g. assets/images/ooty.jpg, assets/images/hero-bg.jpg)
2. In index.html and css/style.css, replace the matching
   "https://images.unsplash.com/..." URL with a relative path,
   e.g. "assets/images/ooty.jpg"
