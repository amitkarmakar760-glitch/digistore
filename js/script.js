/* ==========================================================================
   DigiStore — script.js
   All site behaviour: product data + rendering, search/filter, dark mode,
   counters, accordion helpers, floating widgets, forms.

   >>> TO ADD / EDIT A PRODUCT: scroll to the PRODUCTS array below and
       duplicate one object. See /README.md for the full guide. <<<
   ========================================================================== */

/* ---------------------------------------------------------------------
   1. PRODUCT DATA
   Duplicate any object below to add a new product. Fields:
   id, category (ebooks|courses|templates|notes|bundles), tag (label shown
   on the card), title, desc, price, oldPrice (0 if none), rating (0-5),
   reviews (count), badge ("best" | "new" | ""), color (card gradient),
   link (paste your Instamojo payment link here).
--------------------------------------------------------------------------- */
const PRODUCTS = [
  { id:1, category:"ebooks", tag:"EBOOK", title:"The 10-Day Copywriting Sprint", desc:"A practical playbook to write sales copy that converts, with 20 fill-in-the-blank templates.", price:499, oldPrice:999, rating:4.8, reviews:212, badge:"best", color:"#2D5BFF,#5C8DFF", link:"YOUR_INSTAMOJO_LINK_1" },
  { id:2, category:"courses", tag:"COURSE", title:"Freelance Design Foundations", desc:"A 6-module video course covering client pitching, pricing, and portfolio building.", price:1499, oldPrice:2499, rating:4.9, reviews:341, badge:"best", color:"#0A0A0A,#3A3A3F", link:"YOUR_INSTAMOJO_LINK_2" },
  { id:3, category:"templates", tag:"TEMPLATE", title:"Notion for Solo Founders", desc:"A ready-to-clone Notion system for tasks, content, and finances as a one-person business.", price:299, oldPrice:599, rating:4.7, reviews:158, badge:"", color:"#7A4DFF,#A88BFF", link:"YOUR_INSTAMOJO_LINK_3" },
  { id:4, category:"notes", tag:"NOTES", title:"Data Structures Exam Notes", desc:"Concise, diagram-rich notes covering arrays to graphs for semester exams.", price:149, oldPrice:299, rating:4.6, reviews:97, badge:"new", color:"#1C9A5B,#4FC98A", link:"YOUR_INSTAMOJO_LINK_4" },
  { id:5, category:"bundles", tag:"BUNDLE", title:"Freelancer Starter Bundle", desc:"5 eBooks + 2 templates to launch a freelance career, bundled at one price.", price:999, oldPrice:2199, rating:4.9, reviews:266, badge:"best", color:"#C97A1A,#E7A855", link:"YOUR_INSTAMOJO_LINK_5" },
  { id:6, category:"ebooks", tag:"EBOOK", title:"Instagram Growth Playbook", desc:"A step-by-step guide to grow an audience organically in 90 days.", price:399, oldPrice:799, rating:4.5, reviews:184, badge:"", color:"#FF4D6D,#FF8CA0", link:"YOUR_INSTAMOJO_LINK_6" },
  { id:7, category:"courses", tag:"COURSE", title:"Excel for Data Analysis", desc:"An 8-hour course on formulas, pivot tables, and dashboards for real jobs.", price:1299, oldPrice:1999, rating:4.8, reviews:302, badge:"", color:"#1C9A5B,#4FC98A", link:"YOUR_INSTAMOJO_LINK_7" },
  { id:8, category:"templates", tag:"TEMPLATE", title:"Resume & Cover Letter Kit", desc:"12 ATS-friendly resume templates with matching cover letters in Canva.", price:249, oldPrice:499, rating:4.6, reviews:221, badge:"new", color:"#2D5BFF,#5C8DFF", link:"YOUR_INSTAMOJO_LINK_8" },
  { id:9, category:"notes", tag:"NOTES", title:"Organic Chemistry Quick Notes", desc:"Reaction mechanisms and named reactions simplified for quick revision.", price:199, oldPrice:349, rating:4.4, reviews:76, badge:"", color:"#7A4DFF,#A88BFF", link:"YOUR_INSTAMOJO_LINK_9" },
  { id:10, category:"bundles", tag:"BUNDLE", title:"Student Productivity Bundle", desc:"Planner templates, note systems, and a focus-timer guide in one pack.", price:349, oldPrice:699, rating:4.7, reviews:133, badge:"", color:"#C97A1A,#E7A855", link:"YOUR_INSTAMOJO_LINK_10" },
  { id:11, category:"ebooks", tag:"EBOOK", title:"Personal Finance for Beginners", desc:"Budgeting, saving, and investing basics explained in plain language.", price:349, oldPrice:699, rating:4.8, reviews:288, badge:"best", color:"#0A0A0A,#3A3A3F", link:"YOUR_INSTAMOJO_LINK_11" },
  { id:12, category:"courses", tag:"COURSE", title:"UI Design Crash Course", desc:"Learn Figma fundamentals and ship your first three interface projects.", price:1799, oldPrice:2999, rating:4.9, reviews:198, badge:"new", color:"#FF4D6D,#FF8CA0", link:"YOUR_INSTAMOJO_LINK_12" },
  { id:13, category:"templates", tag:"TEMPLATE", title:"Instagram Carousel Pack", desc:"50 editable carousel templates for coaches and creators.", price:299, oldPrice:599, rating:4.5, reviews:142, badge:"", color:"#2D5BFF,#5C8DFF", link:"YOUR_INSTAMOJO_LINK_13" },
  { id:14, category:"notes", tag:"NOTES", title:"Digital Marketing Handbook", desc:"SEO, ads, and email marketing fundamentals condensed into one guide.", price:249, oldPrice:499, rating:4.6, reviews:109, badge:"", color:"#1C9A5B,#4FC98A", link:"YOUR_INSTAMOJO_LINK_14" },
  { id:15, category:"bundles", tag:"BUNDLE", title:"Creator Toolkit Bundle", desc:"Thumbnail templates, caption packs, and a content calendar in one bundle.", price:799, oldPrice:1599, rating:4.8, reviews:176, badge:"best", color:"#7A4DFF,#A88BFF", link:"YOUR_INSTAMOJO_LINK_15" },
  { id:16, category:"ebooks", tag:"EBOOK", title:"The Minimalist Productivity Guide", desc:"A short read on cutting distractions and building a focused daily routine.", price:249, oldPrice:499, rating:4.5, reviews:88, badge:"new", color:"#C97A1A,#E7A855", link:"YOUR_INSTAMOJO_LINK_16" },
  { id:17, category:"courses", tag:"COURSE", title:"Python for Absolute Beginners", desc:"A 10-hour beginner course building 5 mini projects from scratch.", price:1599, oldPrice:2499, rating:4.9, reviews:412, badge:"best", color:"#0A0A0A,#3A3A3F", link:"YOUR_INSTAMOJO_LINK_17" },
  { id:18, category:"templates", tag:"TEMPLATE", title:"Notion Habit Tracker", desc:"A clean, gamified habit and goal tracker template for daily use.", price:199, oldPrice:399, rating:4.6, reviews:121, badge:"", color:"#FF4D6D,#FF8CA0", link:"YOUR_INSTAMOJO_LINK_18" },
  { id:19, category:"notes", tag:"NOTES", title:"Machine Learning Interview Notes", desc:"Core ML concepts and common interview questions, explained briefly.", price:299, oldPrice:599, rating:4.7, reviews:94, badge:"new", color:"#2D5BFF,#5C8DFF", link:"YOUR_INSTAMOJO_LINK_19" },

{ id:20, category:"bundles", tag:"BUNDLE", title:"Complete Career Starter Bundle", desc:"Resume kit, interview notes, and two eBooks bundled at one price.", price:899, oldPrice:1799, rating:4.8, reviews:203, badge:"best", color:"#1C9A5B,#4FC98A", link:"YOUR_INSTAMOJO_LINK_20" },

{
  id:21,
  category:"ebooks",
  tag:"EBOOK",
  title:"Artificial Intelligence in Digital Marketing",
  desc:"A complete practical guide to using Artificial Intelligence for modern digital marketing, content creation, automation and business growth.",
  price:99,
  oldPrice:299,
  rating:5.0,
  reviews:0,
  badge:"new",
  color:"#2D5BFF,#5C8DFF",
  link:"#"
}
];

const CATEGORY_LABELS = { ebooks:"eBooks", courses:"Video Courses", templates:"Templates", notes:"Notes", bundles:"Bundles" };

/* ---------------------------------------------------------------------
   2. CARD RENDERING
--------------------------------------------------------------------------- */
function starString(rating){
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function discountPct(price, oldPrice){
  if(!oldPrice || oldPrice <= price) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function getWishlist(){
  try{ return JSON.parse(localStorage.getItem("digistore_wishlist") || "[]"); }catch(e){ return []; }
}
function toggleWishlist(id, btn){
  let list = getWishlist();
  if(list.includes(id)){ list = list.filter(x => x !== id); btn.classList.remove("active"); }
  else{ list.push(id); btn.classList.add("active"); }
  localStorage.setItem("digistore_wishlist", JSON.stringify(list));
}

function productCardHTML(p, index){
  const wishlisted = getWishlist().includes(p.id);
  const disc = discountPct(p.price, p.oldPrice);
  const [c1, c2] = p.color.split(",");
  const badges = [];
  if(p.badge === "best") badges.push('<span class="badge badge-best">Best Seller</span>');
  if(p.badge === "new") badges.push('<span class="badge badge-new">New</span>');
  if(disc > 0) badges.push(`<span class="badge badge-discount">-${disc}%</span>`);

  return `
  <article class="card reveal" style="animation-delay:${(index % 6) * 0.06}s" data-category="${p.category}" data-title="${p.title.toLowerCase()}" data-price="${p.price}">
    <div class="card-media" style="background:${p.image ? `url('${p.image}') center/cover no-repeat` : `linear-gradient(135deg, ${c1}, ${c2})`}">
      <div class="badge-row">${badges.join("")}</div>
      <button class="wishlist-btn${wishlisted ? " active" : ""}" aria-label="Add to wishlist" onclick="toggleWishlist(${p.id}, this)">
        <svg viewBox="0 0 24 24" fill="${wishlisted ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.35-9.5-8.5C.8 9 2 5.5 5.3 4.6 7.6 4 9.9 5 12 7.3 14.1 5 16.4 4 18.7 4.6 22 5.5 23.2 9 21.5 12.5 19 16.65 12 21 12 21z"/></svg>
      </button>
      <span class="initials">${p.title.split(" ").slice(0,2).map(w=>w[0]).join("")}</span>
    </div>
    <div class="card-top">
      <span class="card-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p class="desc">${p.desc}</p>
    </div>
    <div class="rating">
      <span class="stars">${starString(p.rating)}</span>
      <span>${p.rating.toFixed(1)} (${p.reviews})</span>
    </div>
    <div class="card-meta"><span>DIGITAL DOWNLOAD</span><span>${CATEGORY_LABELS[p.category]}</span></div>
    <div class="card-buy">
      <div class="price-block">
        <span class="price">₹${p.price.toLocaleString("en-IN")}</span>
        ${p.oldPrice ? `<span class="old-price">₹${p.oldPrice.toLocaleString("en-IN")}</span>` : ""}
      </div>
      <a href="${p.link}" target="_blank" rel="noopener" class="buy-btn">Buy Now →</a>
    </div>
  </article>`;
}

function renderProducts(containerId, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = list.map((p, i) => productCardHTML(p, i)).join("");
  observeReveals();
}

/* ---------------------------------------------------------------------
   3. PAGE-SPECIFIC INIT
--------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {

  // ---- Featured (home) : first 8 products
  if(document.getElementById("featured-grid")){
    renderProducts("featured-grid", PRODUCTS.slice(0, 8));
  }
  // ---- Best sellers (home) : badge === best
  if(document.getElementById("bestseller-grid")){
    renderProducts("bestseller-grid", PRODUCTS.filter(p => p.badge === "best").slice(0, 4));
  }
  // ---- Full catalog (products.html)
  if(document.getElementById("product-grid")){
    renderProducts("product-grid", PRODUCTS);
    initCatalogControls();
  }

  initLoader();
  initScrollProgress();
  initHeaderNav();
  initDarkMode();
  initBackToTop();
  initOfferBanner();
  initCountdown();
  initCounters();
  initNewsletter();
  initContactForm();
  initCopyCoupon();
  observeReveals();
});

/* ---------------------------------------------------------------------
   4. CATALOG SEARCH + FILTER (products.html)
--------------------------------------------------------------------------- */
function initCatalogControls(){
  const searchInput = document.getElementById("search-input");
  const chips = document.querySelectorAll(".chip");
  const sortSelect = document.getElementById("sort-select");
  let activeCategory = "all";

  function apply(){
    const term = (searchInput?.value || "").toLowerCase().trim();
    let list = PRODUCTS.filter(p =>
      (activeCategory === "all" || p.category === activeCategory) &&
      (p.title.toLowerCase().includes(term) || p.tag.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term))
    );
    const sort = sortSelect?.value;
    if(sort === "price-asc") list.sort((a,b) => a.price - b.price);
    if(sort === "price-desc") list.sort((a,b) => b.price - a.price);
    if(sort === "rating") list.sort((a,b) => b.rating - a.rating);

    renderProducts("product-grid", list);
    const noResults = document.getElementById("no-results");
    if(noResults) noResults.classList.toggle("show", list.length === 0);
  }

  searchInput?.addEventListener("input", apply);
  sortSelect?.addEventListener("change", apply);
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.category;
      apply();
    });
  });
}

/* ---------------------------------------------------------------------
   5. PAGE LOADER
--------------------------------------------------------------------------- */
function initLoader(){
  const loader = document.getElementById("page-loader");
  if(!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 250);
  });
}

/* ---------------------------------------------------------------------
   6. SCROLL PROGRESS BAR
--------------------------------------------------------------------------- */
function initScrollProgress(){
  const bar = document.getElementById("scroll-progress");
  if(!bar) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + "%";
  });
}

/* ---------------------------------------------------------------------
   7. HEADER MOBILE NAV
--------------------------------------------------------------------------- */
function initHeaderNav(){
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  toggle?.addEventListener("click", () => links.classList.toggle("open"));
  links?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
}

/* ---------------------------------------------------------------------
   8. DARK MODE
--------------------------------------------------------------------------- */
function initDarkMode(){
  const toggleBtns = document.querySelectorAll(".dark-toggle");
  const saved = localStorage.getItem("digistore_theme");
  if(saved === "dark") document.documentElement.setAttribute("data-theme", "dark");

  toggleBtns.forEach(btn => btn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if(isDark){
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("digistore_theme", "light");
    }else{
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("digistore_theme", "dark");
    }
  }));
}

/* ---------------------------------------------------------------------
   9. BACK TO TOP
--------------------------------------------------------------------------- */
function initBackToTop(){
  const btn = document.getElementById("back-to-top");
  if(!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 500);
  });
  btn.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
}

/* ---------------------------------------------------------------------
   10. OFFER BANNER (dismissible, session-based)
--------------------------------------------------------------------------- */
function initOfferBanner(){
  const banner = document.getElementById("offer-banner");
  if(!banner) return;
  if(sessionStorage.getItem("digistore_banner_closed") === "1"){
    banner.style.display = "none";
    return;
  }
  document.getElementById("close-banner")?.addEventListener("click", () => {
    banner.style.display = "none";
    sessionStorage.setItem("digistore_banner_closed", "1");
  });
}

/* ---------------------------------------------------------------------
   11. COUNTDOWN TIMER (rolling 48-hour offer)
--------------------------------------------------------------------------- */
function initCountdown(){
  const el = document.getElementById("countdown");
  if(!el) return;
  const key = "digistore_offer_deadline";
  let deadline = localStorage.getItem(key);
  if(!deadline || new Date(deadline) < new Date()){
    deadline = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();
    localStorage.setItem(key, deadline);
  }
  function tick(){
    const diff = new Date(deadline) - new Date();
    if(diff <= 0){ el.innerHTML = "<span>Offer ended</span>"; return; }
    const h = Math.floor(diff / 3.6e6).toString().padStart(2,"0");
    const m = Math.floor((diff % 3.6e6) / 6e4).toString().padStart(2,"0");
    const s = Math.floor((diff % 6e4) / 1000).toString().padStart(2,"0");
    el.innerHTML = `<span>${h}h</span><span>${m}m</span><span>${s}s</span>`;
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------------------------------------------------------------------
   12. ANIMATED STAT COUNTERS
--------------------------------------------------------------------------- */
function initCounters(){
  const nums = document.querySelectorAll(".stat-num[data-target]");
  if(!nums.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold:0.4 });
  nums.forEach(n => observer.observe(n));
}
function animateCount(el){
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();
  function step(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString("en-IN");
    if(suffix) el.innerHTML = Math.floor(eased * target).toLocaleString("en-IN") + `<span class="suffix">${suffix}</span>`;
    if(progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------------------------------------------------------------------
   13. NEWSLETTER FORM (front-end only demo)
--------------------------------------------------------------------------- */
function initNewsletter(){
  const form = document.getElementById("newsletter-form");
  if(!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("newsletter-msg");
    msg.textContent = "Thanks — check your inbox to confirm your subscription.";
    msg.classList.add("show");
    form.reset();
  });
}

/* ---------------------------------------------------------------------
   14. CONTACT FORM (front-end only demo)
--------------------------------------------------------------------------- */
function initContactForm(){
  const form = document.getElementById("contact-form");
  if(!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("contact-msg");
    msg.textContent = "Message received — we'll reply within 24 hours.";
    msg.classList.add("show");
    form.reset();
  });
}

/* ---------------------------------------------------------------------
   15. COUPON COPY
--------------------------------------------------------------------------- */
function initCopyCoupon(){
  const btn = document.getElementById("copy-coupon");
  if(!btn) return;
  btn.addEventListener("click", () => {
    const code = document.getElementById("coupon-code").textContent.trim();
    navigator.clipboard?.writeText(code).then(() => {
      btn.textContent = "Copied!";
      setTimeout(() => btn.textContent = "Copy code", 1500);
    });
  });
}

/* ---------------------------------------------------------------------
   16. SCROLL REVEAL
--------------------------------------------------------------------------- */
function observeReveals(){
  const items = document.querySelectorAll(".reveal:not(.in-view)");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold:0.12 });
  items.forEach(i => observer.observe(i));
}
