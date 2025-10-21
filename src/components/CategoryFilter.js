import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const buttons = categories.map((cat) => (
    <button
      key={cat}
      className={cat === selectedCategory ? "selected" : ""}
      onClick={() => onSelectCategory(cat)}
    >
      {cat}
    </button>
  ));

  return <div className="categories">{buttons}</div>;
}

export default CategoryFilter;
