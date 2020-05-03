import React from 'react';


function ExpenseIcon (props){
    return (
        <div className="col-7 col-md-4 text-center mx-auto">
            <i class="fas fa-money-check fa-2x d-inline"></i>
            <h3 className='d-inline mr-2'>Expenses</h3>
            <span className='d-block text-center icon'>{props.expenses}</span>
        </div>
    )
}

export default ExpenseIcon;

