import Card from '../card';
import "./index.css";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item__container">
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div className="expense-item__title">{props.title}</div>
            <div className="expense-item__amount">${props.amount}</div>
        </Card>
    );
};

const ExpenseDate = (props) => {
    const date = props.date;
    const month = date.toLocaleString("en-US", {month: "short"});
    const day = date.toLocaleString("en-US", {day: "2-digit"});
    const year = date.getFullYear();
    return (
        <div className="expense-item__date">
            <div className="month">{month}</div>
            <div className="date">{day}</div>
            <div className="year">{year}</div>
        </div>
    );
};

export default ExpenseItem;