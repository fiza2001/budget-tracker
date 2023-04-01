import React from "react";
import "./ExpenseFilter.css"

export default function ExpenseFilter(props) {

    function dropdownChangeHandler(event){
        props.onChangeExpense(event.target.value)
    }
    return (
        <div>
            <div>
                <label >Filter by Year</label>
                <select onChange={dropdownChangeHandler}>
                    <option value="2022">2023</option>
                    <option value="2022">2022</option>
                    <option value="2022">2021</option>
                    <option value="2022">2020</option>
                </select>
            </div>
        </div>
    )
    
};
