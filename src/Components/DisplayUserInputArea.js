import React from 'react';
import UserBudget from './UserBudget';
import UserExpenses from './UserExpenses';



function DisplayUserInputArea (props){
    return (
        <div className="container">
            <div className="row">
                 <div className="col-4 mb-2 userInput" >
                    <UserBudget />
                </div>
            </div>
            <div className="row">
                <div className="col-4 mt-2 userInput">
                     <UserExpenses />
                </div>
            </div>
        </div>
        
    )
}

export default DisplayUserInputArea;

