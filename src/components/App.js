import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import Packinglist  from "./Packinglist";
import  Stats  from "./Stats";

// const initialiItems = [
//     { id: 1,description: "Passports",quantity: 2, packed: false},
//     { id: 2,description: "Socks",quantity: 12, packed: true},
//     { id: 3,description: "Charger",quantity: 1, packed: false},
//   ];

export default function App() {
    const [items, setItems] = useState([]);
    

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }
    function handleDeleteItem(id){
        setItems(items=> items.filter(item=>item.id !== id)); 
    }

    function handleToggleItem(id) {
        setItems((items) => 
        items.map((item) => 
        item.id === id? {...item,packed: !item.packed}
        : item
        )
        )
    }
    function handleClearList() {
        const confirmed = window.confirm("Are you sure you want to delete all items?");
        setItems([]);
    }

    return<div className="app">
        <Logo/>
        <Form onAddItems={handleAddItems}/>
        <Packinglist  
        items={items} 
        onDeleteItem={handleDeleteItem} 
        onToggleItems={handleToggleItem}
        onClearList = {handleClearList}  />
        <Stats items = {items}/>
    </div>
}


