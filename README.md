# 🛍️ ShopSphere - Modern E-Commerce Web Application

**ShopSphere** is a fast, responsive, and modern multi-page E-Commerce web application built using standard front-end technologies: HTML5, CSS3, and JavaScript (ES6+). It provides a full online shopping workflow including product catalog browsing, real-time filtering, item details, wishlist management, cart calculation with discount coupons, seamless checkout, and light/dark theme toggling.

---

## ✨ Features

- 🌓 **Dark & Light Mode**: Toggle themes seamlessly across all pages with state persistent in `localStorage`.
- 🔍 **Real-Time Product Search & Filters**: Search products by name, filter by category, adjust price range sliders, and sort by price or customer ratings.
- 🛒 **Shopping Cart System**: Add items, adjust quantities, calculate subtotal, apply promo codes (e.g., `SAVE10`), and view shipping fees.
- ❤️ **Wishlist**: Save favorite items to a personal wishlist and easily transfer them into the shopping cart.
- 💳 **Checkout & Order Confirmation**: Form for shipping details and payment selection (UPI, Credit/Debit Card, COD) leading to a dynamic order confirmation page.
- 📱 **Fully Responsive Layout**: Built with flexible CSS Grid and Flexbox for optimal experience on desktop, tablet, and mobile browsers.
- 🔔 **Interactive Toast Notifications**: Instant visual feedback for adding/removing items from cart or wishlist.
- 💾 **Persistent Storage**: All cart items, wishlist state, and active theme are saved in browser `localStorage`.

---

## 🛠️ Tech Stack

- **Markup**: [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) (Semantic elements)
- **Styling**: Vanilla [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (CSS Custom Variables, Flexbox, CSS Grid, Glassmorphism, Animations)
- **Scripting**: Modern [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Persistence**: Web Storage API (`localStorage`)

---

## 📁 Project Structure

```
E-Commerce-Website/
├── index.html            # Landing page featuring hero banner, trust badges, categories & featured products
├── products.html         # Product catalog with search, category filters, sorting, & price range
├── product-details.html # Dynamic detailed view for individual products
├── wishlist.html         # User's saved favorite products
├── cart.html             # Shopping cart with coupon code application & price summary
├── checkout.html         # Customer delivery information & payment method selection
├── order-success.html    # Order confirmation screen with summary and details
├── app.js                # Centralized product database, cart/wishlist state management, & utility functions
└── style.css             # Comprehensive design system, theme variables, component styles, & media queries
```

---

## 🚀 How to Run

Since ShopSphere is a lightweight static web application, no server installation or npm build steps are required.

### Method 1: Directly Open in Browser
1. Clone or download this repository to your local machine.
2. Double-click `index.html` or right-click `index.html` and select **Open with Browser** (Chrome, Edge, Firefox, Safari).

### Method 2: Using VS Code Live Server (Recommended)
1. Open the project folder in [Visual Studio Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension.
3. Click **Go Live** in the status bar or right-click `index.html` and select **Open with Live Server**.

### Method 3: Local HTTP Server (Python)
If you prefer running a quick local server via terminal:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

---

## 📄 Pages Overview

| Page | Description |
| :--- | :--- |
| **`index.html`** | Main entry point with promotional hero section, trust indicators, product categories, clearance banner, and featured product grid. |
| **`products.html`** | Complete catalog with instant text search, price filtering, sorting, and category selection. |
| **`product-details.html`** | Shows detailed product description, price, rating, thumbnail image, quantity selector, and purchase triggers. |
| **`wishlist.html`** | Displays user's saved items with options to transfer directly to cart or remove. |
| **`cart.html`** | Interactive cart allowing item quantity updates, promo code application (e.g. `SAVE10`), subtotal calculation, and checkout navigation. |
| **`checkout.html`** | Collects shipping details and payment selection to finalize purchase. |
| **`order-success.html`** | Generates purchase summary confirmation with order reference number. |

---

## 💡 Local Storage Keys

The application uses the following `localStorage` keys:
- `shopsphere_theme`: Stores `'light'` or `'dark'` mode preference.
- `shopsphere_cart`: Stores an array of cart items with quantities.
- `shopsphere_wishlist`: Stores an array of wishlisted product items.

---

## 🌐 Live Demo & Deployment

The application is deployed on **GitHub Pages**:

- 🔗 **Live Website**: [https://shrutigadhe.github.io/E-commerce-website/index.html](https://shrutigadhe.github.io/E-commerce-website/index.html)

### How to Deploy Updates via GitHub Pages:
1. Commit and push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update project files"
   git push origin main
   ```
2. In your GitHub Repository settings ([shrutigadhe/E-commerce-website](https://github.com/shrutigadhe/E-commerce-website)):
   - Go to **Settings** > **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose `main` branch and `/ (root)` directory, then click **Save**.
