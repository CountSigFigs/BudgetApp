import React from 'react';
import BudgetIcon from './BudgetIcon';
import ExpenseIcon from './ExpenseIcon';
import BalanceIcon from './BalanceIcon';

function DisplayIcons (props){
    return (
        <div className="container-fluid">
            <div className="row mt-3 d-flex flex-row">
                <BudgetIcon budget={props.budget} balance={props.balance} expenses={props.expenses}/>
                <ExpenseIcon expenses={props.expenses}/>
                <BalanceIcon balance={props.balance}/>
            </div>
        </div>
    )
}

export default DisplayIcons;