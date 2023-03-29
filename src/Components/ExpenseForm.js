import React , { useState } from "react";
import "./ExpenseForm.css"

export default function ExpenseForm() {

    const [userTitle, setUserTitle] = useState("")
    const [userAmount, setUserAmount] = useState("")
    const [useDate, setUserDate] = useState("")

    function updateUserTitle(event){
        setUserTitle(event.target.value)
    }

    function updateUserAmount(event){
        setUserAmount(event.target.value)
    }

    function updateUserDate(event){
        setUserDate(event.target.value)
    }

    return (
        <form className="expense-form" action="#">
            <div className="form-title">
                <label htmlFor="#">Title</label><br />
                <input type="text" onChange={updateUserTitle}/>
            </div>
            <div className="form-amount">
                <label htmlFor="#">Amount</label><br />
                <input type="number" onChange={updateUserAmount}/>
            </div>
            <div className="form-date">
                <label htmlFor="#">Date</label><br />
                <input type="date" onChange={updateUserDate}/>
            </div>
            <div>
                <button className="form-add-btn">
                    Add..
                </button>
            </div>
        </form>
    )
    
};
