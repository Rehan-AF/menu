import "./App.css";
import { useState } from "react";
import Button from "./Header";
import Lunch from "./map/map";
import menu from "./data";

function App() {
  // const [item, setItem] = useState(menu);
  const [selectedCategory, setSelectedCategory] = useState("all");
  console.log(selectedCategory);
  return (
    <>
      <Button
        // item={item}
        // setItem={setItem}
        setSelectedCategory={setSelectedCategory}
      />
      <hr />
      <div className="shower">
        <Lunch selectedCategory={selectedCategory} />
      </div>
    </>
  );
}

export default App;
