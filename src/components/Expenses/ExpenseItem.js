import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import {useState} from 'react'
function ExpenseItem(props) {
  let {date,amount} = props;
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    if(title === 'Updated')
      setTitle('title')
    else setTitle('Updated')
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date = {date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick = {clickHandler}> Change Title
      </button>
    </Card>
  );
}
export default ExpenseItem;
