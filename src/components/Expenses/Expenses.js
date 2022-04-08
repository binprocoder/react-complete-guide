import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card'
function Expenses(props) {
  const expends = props.items;
  return (
    <Card className = "expenses">
      {expends.map((prop, index) => (
        (
          <ExpenseItem
            key={index}
            title={prop.title}
            amount={prop.amount}
            date={prop.date}
          ></ExpenseItem>
        )
      ))}
    </Card>
  );
}
export default Expenses;
