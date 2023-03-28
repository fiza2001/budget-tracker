import React from "react";
import "./ExpenseForm.css"

export default function ExpenseForm() {

    return (
        <form className="expense-form" action="#">
            <div className="form-title">
                <label htmlFor="#">Title</label><br />
                <input type="text" />
            </div>
            <div className="form-amount">
                <label htmlFor="#">Amount</label><br />
                <input type="number" />
            </div>
            <div className="form-date">
                <label htmlFor="#">Date</label><br />
                <input type="date" />
            </div>
            <div>
                <button className="form-add-btn">
                    Add..
                </button>
            </div>
        </form>
    )
    
};
