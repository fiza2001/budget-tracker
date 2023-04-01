import React from "react";
import "./ExpensesFilter.css"

export default function ExpenseFilter() {
    return (
        <div>
            <div>
                <label >Filter ny Year</label>
                <select>
                    <option value="2022">2023</option>
                    <option value="2022">2022</option>
                    <option value="2022">2021</option>
                    <option value="2022">2020</option>
                </select>
            </div>
        </div>
    )
    
};
