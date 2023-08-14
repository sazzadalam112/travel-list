const initialiItems = [
  { id: 1,description: "Passports",quantity: 2, packed: false},{ id: 1,description: "Socks",quantity: 12, packed: true},
  { id: 1,description: "Charger",quantity: 2, packed: false},
];

export default function App(){
  return( <div className="app">
  <Logo />
  <Form />
  <PackingList />
  <Stats />
 </div> )
}

function Logo(){
  return <h1>🌴Far Away👜</h1>
}
function Form(){
  return( <form className="add-form">
    <h3>What do you need for your 😍  trip</h3>
    <select>
      {/* <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option> */}
      {Array.from({ length: 20},(_,i) => i + 1).map
      ((num) => (
        <option value={num}key={num}>{num}</option>
      ))}
      </select>
      <input type="text" placeholder="Item..."/>
      <button>ADD</button>
    
  </form>
  )
}


function PackingList(){
  return(
    <div className="list">
       <ul>
        {initialiItems.map((item) =>(
         <Item item = {item} />
        ))} 
      </ul>
</div>
  )
}
 function Item({item}) {
  return(
    <li>
      <span style={item.packed ? {textDecoration:"line-through"} : {}}>
        {item.quantity}{item.description}
        </span>

      <button>❌</button>
    </li>
  )

}
  
function Stats(){
  return <footer className="stats">
    <em>👜you have x items of your list, and yu already packed x (x%) </em>
  </footer>
}

