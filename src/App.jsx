import React, { useState } from "react";

const PRODUCTS = [
  { name: "Notebook", price: 120, category: "Stationery" },
  { name: "Pen", price: 20, category: "Stationery" },
  { name: "Laptop", price: 55000, category: "Electronics" },
  { name: "Headphones", price: 2000, category: "Electronics" },
  { name: "Backpack", price: 900, category: "Bags" },
  { name: "Sling Bag", price: 750, category: "Bags" },
];

const categories = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = selectedCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="container">
      <header>
        <h1>🛍 Product List with Category Filter</h1>
        <p>Select a category to filter products</p>
      </header>

      <div className="controls">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === selectedCategory ? "btn active" : "btn"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="product-list">
        {filtered.length === 0 ? (
          <li className="empty">No products found</li>
        ) : (
          filtered.map((p, i) => (
            <li key={i} className="product">
              <div className="product-name">{p.name}</div>
              <div className="product-meta">₹{p.price} • {p.category}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}