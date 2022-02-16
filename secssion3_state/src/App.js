import Expenses from './components/expenses';
import Form from "./components/form";
import "./App.css"
import { useState } from 'react';
function App() {
  const [expenseItems, setExpenseItems] = useState([
    {date: new Date("2022-02-11"), 
    title: "New Phone", 
    amount:800},
    {date: new Date("2022-05-11"), 
    title: "House Improvement", 
    amount:1000},
    {date: new Date("2022-09-11"), 
    title: "Electricity Bill", 
    amount:50},
  ]);
  const handleAddExpense = (formValue) =>{
    console.log(formValue);
    setExpenseItems(prev => {
      return [
        {
          date: new Date(formValue.date),
          title: formValue.title,
          amount: Number(formValue.amount),
        },
        ...prev,
      ]
    })
  };

  return (
    <div>
      <Form onSubmit={handleAddExpense} />
     <Expenses expenseItems={expenseItems} />
    </div>
  );
};

export default App;
