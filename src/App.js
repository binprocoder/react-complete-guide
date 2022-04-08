import logo from "./logo.svg";
import "./App.css";
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'
function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <ExpenseItem></ExpenseItem>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const expends = [
    {
      id: 1,
      title: "title 1",
      amount: 224.1,
      date: new Date(Date.now()),
    },
    {
      id: 2,
      title: "title 2",
      amount: 174.1,
      date: new Date(Date.now()),
    },
    {
      id: 3,
      title: "title 3",
      amount: 168.1,
      date: new Date(Date.now()),
    },
    {
      id: 4,
      title: "title 4",
      amount: 144.1,
      date: new Date(Date.now()),
    },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses items = {expends} />
    </div>
  );
}

export default App;
