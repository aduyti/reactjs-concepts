import './App.css';
const person = {
  color: "blue",
  border: "2px solid red",
  borderRadius: "15px",
  margin: "10px 100px",
  padding: "10px"
};

function App() {
  const people = [
    { id: 1, name: 'John', phone: '123' },
    { id: 2, name: 'Wite', phone: '245' },
    { id: 3, name: 'Quant', phone: '355' },
    { id: 4, name: 'Bolt', phone: '765' }
  ]
  return (
    <div>
      {
        people.map(person => <Person id={person.id} name={person.name} phone={person.phone}></Person>)
      }
    </div>
  );
}
function Person(props) {
  return (
    <div id={props.id} style={person} className="person">
      <h3 style={{ backgroundColor: "pink", margin: "auto" }}>{props.name}</h3>
      <p className="phone">Phone: {props.phone}</p>
    </div>
  );
}


export default App;
