import { useState } from "react";
import "./index.css";
import Card from "../card";
const Form = (props) => {
   
    // const [title, setTitle] = useState("");
    // const [date, setDate] = useState("");
    // const [amount, setAmount] = useState(0);
    const [formVisible, setFormVisible] = useState(false);

    const [formValue, setFormValue] = useState({
        title: "",
        date: "",
        amount: 0,
    })
    console.log(formValue);
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(formValue);
        resetForm();
    };

    const resetForm = () => {
        setFormValue({
            title: "",
            date: "",
            amount: 0,
        });
        setFormVisible(false) 
    };
   const handleFormValueChange = (event) => {
        setFormValue({
            ... formValue,
            [event.target.name]: event.target.value,
        })

   };
   const showForm = () => {
       setFormVisible(true);
   }
   if (!formVisible) {
       return (
       <Card className="form__container" >
           <button onClick= {showForm}> New expense </button>
       </Card>)
   };

    return (
        <Card className="form__container">
            <form onSubmit={handleFormSubmit} 
            onReset ={resetForm} className="form">
            <div className="form-input__container">
                <div className="form-input__item">
                    <label>Title</label>
                    <input 
                    type="text" 
                    name="title"
                    value={formValue.title} 
                    onChange= {handleFormValueChange} />
                </div>
                <div className="form-input__item">
                    <label>Date</label>
                    <input 
                    type="date" 
                    name="date"
                    value={formValue.date} 
                    onChange= {handleFormValueChange} />
                </div>
                <div className="form-input__item">
                    <label>Amount</label>
                    <input 
                    type="number" 
                    name="amount"
                    value={formValue.amount}
                    onChange= {handleFormValueChange} />
                </div>
            </div>
            <div className="form-actions">
                <button type="submit">Add Expense</button>
                <button type="reset">Cancel</button>
            </div>
            </form>
        </Card>
    );
};

export default Form;