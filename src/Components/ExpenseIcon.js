import React from 'react';


function ExpenseIcon (props){
    return (
        <div className="col-7 col-md-3 mx-auto text-center mx-auto iconBox p-2 mb-2" style={{color: '#DC143C'}}>
            <h3 className='mr-2'>Expenses</h3>
            <i class="fas fa-money-check fa-2x"></i>

            <span className='d-block text-center icon'>{props.expenses}</span>
        </div>
    )
}

export default ExpenseIcon;

