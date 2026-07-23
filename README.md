# DigiStore

A complete, static digital-products storefront built with **HTML5, CSS3, and vanilla JavaScript only** — no React, no Next.js, no Bootstrap, no build step. Open `index.html` directly in a browser, or deploy to GitHub + Netlify in minutes.

---

## 1. Project structure

```
digistore/
├── index.html          Homepage (hero, categories, featured products, testimonials, stats, FAQ preview, newsletter)
├── products.html        Full catalog (search, category filter, sort)
├── about.html            About the store
├── contact.html           Contact form + channels
├── faq.html                Full FAQ accordion
├── privacy.html            Privacy Policy
├── refund.html              Refund Policy
├── terms.html                Terms & Conditions
├── css/
│   └── style.css        All styles (design tokens, components, dark mode, responsive rules)
├── js/
│   └── script.js         Product data + all interactive behaviour
├── images/
│   └── favicon.svg      Placeholder logo/favicon — replace with your own
└── README.md            This file
```

---

## 2. How to add a new product

Open **`js/script.js`** and find the `PRODUCTS` array near the top of the file. Duplicate any object inside the array and edit its fields:

```js
{
  id: 21,                        // must be unique — increase by 1 from the last product
  category: "ebooks",            // one of: ebooks | courses | templates | notes | bundles
  tag: "EBOOK",                   // small label shown on the card
  title: "Your Product Title",
  desc: "One or two sentence description of the product.",
  price: 499,                     // current selling price (in ₹)
  oldPrice: 999,                  // original price — set to 0 to hide the strikethrough price
  rating: 4.7,                    // 0–5, shown as stars
  reviews: 120,                   // number shown next to the rating
  badge: "new",                   // "best" | "new" | "" (leave empty for no badge)
  color: "#2D5BFF,#5C8DFF",       // two hex colors used for the placeholder image gradient
  link: "YOUR_INSTAMOJO_LINK_21", // paste your real Instamojo payment link here
}
```

Save the file — the product will automatically appear on `products.html`, and on `index.html` if it's among the first 8 products or tagged `badge: "best"`.

There is **no need to touch any HTML file** to add, remove, or reorder products — everything renders from this one array.

---

## 3. How to change a price

In `js/script.js`, find the product by its `title`, and edit the `price` (and `oldPrice` if you want to show a discount) fields. The discount badge and percentage are calculated automatically.

---

## 4. How to change a product image

Products currently use a colored gradient placeholder with initials (no image files needed, which keeps the site fast). To use a real photo instead:

1. Add your image to the `/images/` folder, e.g. `images/copywriting-ebook.jpg`.
2. In `js/script.js`, inside `productCardHTML()`, replace the `<span class="initials">` line for that product with:
   ```html
   <img src="images/copywriting-ebook.jpg" alt="Your product name" loading="lazy">
   ```
   (Or wrap this in a per-product `image` field in the `PRODUCTS` array and reference it conditionally — the card function is plain JavaScript, so you can extend it freely.)

---

## 5. How to add your Instamojo payment link

For every product, replace the placeholder in the `link` field:

```js
link: "YOUR_INSTAMOJO_LINK_1"
```

with your real Instamojo product checkout URL, e.g.:

```js
link: "https://www.instamojo.com/@digistore/abcd1234/"
```

Every **Buy Now** button on the site is generated from this field, so there's nothing else to update.

---

## 6. How to edit categories

Categories are defined in two places:

1. **`js/script.js`** — the `CATEGORY_LABELS` object maps each category key to its display name:
   ```js
   const CATEGORY_LABELS = { ebooks:"eBooks", courses:"Video Courses", templates:"Templates", notes:"Notes", bundles:"Bundles" };
   ```
2. **`index.html`** (`#categories` section) and **`products.html`** (filter chips) — the category cards/chips are written directly in HTML. If you add a brand-new category key, duplicate a `.cat-card` block in `index.html` and a `.chip` button in `products.html`, using the same category key as in `script.js`.

---

## 7. Extra features included

- Sticky glass navbar with mobile hamburger menu
- Dark mode toggle (saved across visits via `localStorage`)
- Live search + category filter + sort on the product catalog
- Wishlist heart icon on every card (saved via `localStorage`)
- Animated statistics counters (triggered on scroll)
- Scroll progress bar, back-to-top button, floating WhatsApp button
- Sticky "Shop Now" bar on mobile
- Dismissible offer banner with a live countdown timer
- Copyable coupon code banner
- Best Seller / New / Discount badges on product cards
- Newsletter and contact forms (front-end only — see below)
- Full SEO: meta title/description/keywords, canonical tags, Open Graph, Twitter Card, favicon, and Schema.org markup for Organization and FAQPage
- Semantic HTML, ARIA labels, visible keyboard focus, and `prefers-reduced-motion` support

### About the newsletter and contact forms

Both forms currently show a success message on submit but do **not** send data anywhere — this is a static site with no backend. To make them functional, connect the `<form>` elements to a form service such as Formspree, Getform, or a Netlify Forms attribute (`data-netlify="true"`), or point them at your own backend endpoint.

---

## 8. How to deploy to GitHub

1. Create a new repository on GitHub.
2. In this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — DigiStore"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

## 9. How to deploy to Netlify

**Option A — drag and drop**
1. Go to [app.netlify.com](https://app.netlify.com) and log in.
2. Drag the whole `digistore` folder onto the "Sites" dashboard.
3. Netlify deploys it instantly and gives you a live URL.

**Option B — connect to GitHub (recommended for updates)**
1. Push the project to GitHub (see above).
2. In Netlify, click **Add new site → Import an existing project**.
3. Select your repository.
4. Build command: leave blank. Publish directory: `/` (project root).
5. Click **Deploy site**.

Every time you push a change to GitHub, Netlify redeploys automatically.

---

## 10. Before going live — checklist

- [ ] Replace every `YOUR_INSTAMOJO_LINK_#` in `js/script.js` with real Instamojo links
- [ ] Replace `images/favicon.svg` with your real logo
- [ ] Replace placeholder WhatsApp number (`910000000000`), Instagram, and Facebook links in every page footer/contact page
- [ ] Update `hello@digistore.in` to your real support email throughout
- [ ] Update the `canonical`, Open Graph, and Twitter Card URLs once you have a real domain
- [ ] Connect the newsletter and contact forms to a real form backend
- [ ] Swap product image placeholders for real product covers if desired
