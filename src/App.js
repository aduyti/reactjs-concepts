import './App.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const people = [
    { id: 1, name: 'John', phone: '123' },
    { id: 2, name: 'Wite', phone: '245' },
    { id: 3, name: 'Quant', phone: '355' }
  ];
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <div style={{ border: '1px solid black', borderRadius: '5px', marginTop: '10px' }}>
        {
          people.map(person => <Person id={person.id} name={person.name} phone={person.phone}></Person>)
        }
      </div>

    </div>
  );
}
function Person(props) {
  const person = {
    color: "blue",
    border: "2px solid red",
    borderRadius: "15px",
    margin: "10px 100px",
    padding: "10px"
  };
  return (
    <div id={props.id} style={person} className="person">
      <h3>{props.name}</h3>
      <p className="phone">Phone: {props.phone}</p>
    </div>
  );
}


export default App;
