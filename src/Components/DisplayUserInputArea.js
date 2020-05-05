import React from 'react';
import UserBudget from './UserBudget';
import UserExpenses from './UserExpenses';


function DisplayUserInputArea (props){
    return (
        <div className="container">
            <div className="row mt-4">
                 <div className="col-10 mb-2 userInput ml-3 mx-auto iconBox" >
                    <UserBudget 
                        onClick={props.onClick}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-10 mt-2 userInput ml-3 mx-auto iconBox">
                     <UserExpenses
                        updateExpenses={props.updateExpenses} 
                    />
                </div>
            </div>
        </div>
        
    )
}

export default DisplayUserInputArea;

