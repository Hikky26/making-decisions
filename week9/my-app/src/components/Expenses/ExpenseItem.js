import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

//A component in react is just a javascript function
//must have one root element per funtion
function ExpenseItem(props) {
    
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated');
        alert(title)
    }

      return( 
    <Card className= 'expense-item'>
        <ExpenseDate date= {props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
    )
}

export default ExpenseItem;