# Time sheet and explanation of work

## **5/10/2022 11:16pm - 5/11/2022 12:29am - 1 hour 15 min**

- Explored each page of [flashautoabq.com](https://flashautoabq.com) and observed the current website's functionality.
- Created a plan to improve UI/UX by clarifying page names and simplifying the overall website structure
- Wrote `reset.css` to change default browser behavior so that the website appears the same on all browsers (Firefox, Chrome, Safari)
- Created an organized file structure for website content (assets, components, CSS, & pages folders).
- Copied website logo to `logo.png` in `/assets/` folder and `favicon.ico` to root folder
- Started writing the foundational CSS Grid framework of the home page.
- Initialized git repository and set up code uploading to GitHub
- Created Netlify web server instance to host the website.
- Set up subdomain of my website [graycot.com](https://graycot.com/) at [flashautoabq.graycot.com](https://flashautoabq.graycot.com/) for demonstration & showcase purposes.

## **5/11/2022 1:21pm - 5/11/2022 2:16pm: 0 hour 55 min**

- Wrote `component-loader.js` in `/JS/`
- Wrote HTML for `nav.html` component
- Added alt text on `logo.png` for accessability and SEO
- Began work-shopping background / text colors that are easier to read than pure black/white
- Set up google poppins font as default
- Populated pages (about, contact, faq, fleet-services, reviews, specials) with HTML
- Began styling `nav.html` in `/CSS/global-styles.css`

## **5/11/2022 8:02pm - 5/11/2022 9:31pm: 1 hour 29 min**

- Styled navigation bar. Began exploring solutions for a responsive mobile navigation sidebar.
- Came up with a plan to replace the hiring form with [FormSubmit](https://formsubmit.co/) as an alternative to the "Formidable" WP Plugin currently in use.

## **5/12/2022 2:40am - 5/12/2022 4:31am: 1 hour 51 min**

- Searched and found the slideshow images from the home page of the current website. Downloaded an stored images in `/assets/slideshow/`

- Built and styled slideshow. Specifically, filled in ```<div id="main"></div>```html of homepage. CSS in `index-styles.css` under /*Slideshow*/ section, and the `slideshow.js` Javascript file. ``
- set maximum width of `#main` to 1150px.
- set a maximum width of `.container` to 150vh. The purpose of this is to shrink the image slideshow on smaller monitors/tablets/phone screens in order to not drawf the rest of the content on the page.
- Added :focus to hover triggers to allow for tabbing through interactive elements and to assist accessability via screen-reader

## **5/12/2022 1:45pm - 5/12/2022 3:04am: 1 hour 19 min**

- Added `whitespace: nowrap` to list elements to prevent multi-line text wrapping in nav bar
- Ran a [WebsiteCarbon.com](https://www.websitecarbon.com/website/flashautoabq-com/) test to determine how inefficiently the current website uses resources compared to the [new website](https://www.websitecarbon.com/website/flashautoabq-graycot-com/)
- Ran a GTmetrix scan on the [current Flashautoabq website](https://gtmetrix.com/reports/flashautoabq.com/0oBYjnfo/) VS the currently in development [new website](https://gtmetrix.com/reports/flashautoabq.graycot.com/yx3otuof/):
- Ran a ShortPixel [image compression optimization](https://shortpixel.com/image-compression-test/#cruncher) of the current website. It determined that 17 images could be compressed to nearly half the current size which will improve page load speed and SEO ranking.
- Implemented a clickable phone number link and an embedded google maps iframe.

## **5/18/2022 10:33pm - 5/19/2022 x:xxam: x hour xx min**
