import React from 'react';
import BudgetIcon from './BudgetIcon';
import ExpenseIcon from './ExpenseIcon';
import BalanceIcon from './BalanceIcon';


function DisplayIcons (){
    return (
        <div className="container">
            <div className="row mt-3 d-flex flex-row-reverse">
                <BudgetIcon />
                <ExpenseIcon />
                <BalanceIcon />
            </div>
        </div>
    )
}

export default DisplayIcons;