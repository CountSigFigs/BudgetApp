import React from 'react';


function ExpenseIcon (props){
    return (
        <div className="col-4 col-lg-2">
            <i class="fas fa-money-check fa-2x d-inline"></i>
            <h3 className='d-inline mr-2'>Expenses</h3>
            <span className='d-block text-center icon'>{props.expenses}</span>
        </div>
    )
}

export default ExpenseIcon;

