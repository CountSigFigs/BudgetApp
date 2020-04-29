import React from 'react';
import BudgetIcon from './BudgetIcon';
import ExpenseIcon from './ExpenseIcon';
import BalanceIcon from './BalanceIcon';
import Title from './title'

function DisplayIcons (props){
    return (
        <div className="container-fluid">
            <div className="row mt-3 d-flex flex-row">
                <Title />
                <BudgetIcon budget={props.budget} balance={props.balance} expenses={props.expenses}/>
                <ExpenseIcon expenses={props.expenses}/>
                <BalanceIcon balance={props.balance}/>
            </div>
        </div>
    )
}

export default DisplayIcons;