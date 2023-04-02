
import React,  { useState }  from "react";
import './../styles/App.css';
import ItemList from "./ItemList";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Male");
  const [categories, setCategories] = useState({
    Male: ["Shirts", "Facial-grooming kits", "Hair styling", "Jeans", "Shoes"],
    Female: ["Tops", "Skirts", "Makeup items", "Jewellery", "Sandals"]
  });

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {Object.keys(categories).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ItemList items={categories[selectedCategory]} />
    </div>
  );
};

export default App;
