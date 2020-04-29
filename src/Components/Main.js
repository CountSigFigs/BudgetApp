import React, {Component} from 'react';
import DisplayIcons from './DisplayIcons';
import DisplayUserInputArea from './DisplayUserInputArea';


class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            budget: 0,
            expenses: 0,
            expenseArray:[],
            balance: 0
        }

        this.updateBudget=this.updateBudget.bind(this)
        this.updateExpenses=this.updateExpenses.bind(this)

    }

   updateBudget(amount){
        let balance= parseInt(amount) - parseInt(this.state.expenses)
        this.setState({
            budget: amount,
            balance: balance
        })
   }

   updateExpenses(array,amount){

    let total= parseInt(this.state.expenses) + parseInt(amount);
    let balance= parseInt(this.state.budget) - total

    this.setState({
        expenses: total,
        balance: balance,
        expenseArray: array
    })
    console.log(this.state.expenseArray)
    }

    render (){
        return (
            <div>
                <DisplayIcons 
                    budget={this.state.budget} 
                    expenses={this.state.expenses}  
                    balance={this.state.balance}  
                />
                <DisplayUserInputArea
                    onClick={this.updateBudget}
                    updateExpenses={this.updateExpenses}
                 />
            </div>
        )
    }
}

export default Main;

