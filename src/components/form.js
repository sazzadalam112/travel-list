import { useState } from "react";

export default function Form({onAddItems}){
    const [description, setDescription] = useState("");
    const [quantity,setQuantity] = useState(1);
    
 
 
     function handleSubmit(e){
      e.preventDefault();
     
      if(!description) return;
 
      const newItem = {description , quantity , packed: false, id: Date.now()};
      
 
      onAddItems(newItem);
 
      setDescription("");
      setQuantity(1);
     }
     return(
         <form className="add-form" onSubmit={handleSubmit}>
             <h3>What do you need for your 😍 trip?</h3>
             <select value={quantity} onChange={(e)=> setQuantity (Number(e.target.value))}>
                {/* <option value={1}>1</option> 
                <option value={2}>2</option>
                <option value={3}>3</option> */}
                {Array.from({length: 20}, (_, i) => i + 1) 
                .map((num) => (
                 <option value={num} key={num}>{num}</option>
                ))}
             </select>
             <input type="text" placeholder="Item..." 
              value={description}
              onChange={(e) => {
                 console.log(e.target.value);
                 setDescription(e.target.value)
             }}
              />
 
             <button>ADD</button>
         </form>
     )
 }