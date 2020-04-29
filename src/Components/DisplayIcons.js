import React from 'react';
import BudgetIcon from './BudgetIcon';
import ExpenseIcon from './ExpenseIcon';
import BalanceIcon from './BalanceIcon';


function DisplayIcons (props){
    return (
        <div className="container">
            <div className="row mt-3 d-flex flex-row-reverse">
                <BalanceIcon balance={props.balance}/>
                <ExpenseIcon expenses={props.expenses}/>
                <BudgetIcon budget={props.budget} balance={props.balance} expenses={props.expenses}/>
            </div>
        </div>
    )
}

export default DisplayIcons;