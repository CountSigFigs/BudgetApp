import React, {Component} from 'react';
import DisplayIcons from './DisplayIcons';
import DisplayUserInputArea from './DisplayUserInputArea';
import Title from './title';
import ExpenseTable from './ExpenseTable';

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

   updateExpenses(item,amount){

    let total= parseInt(this.state.expenses) + parseInt(amount);
    let balance= parseInt(this.state.budget) - total
    
    let obj={
        name:item,
        amount: amount
    }

    this.setState({
        expenses: total,
        balance: balance,
        expenseArray: [...this.state.expenseArray,obj]
    })
    
    console.log(this.state.expenseArray)
    }

    render (){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-5 mx-auto mt-5'>
                        <Title />
                        <DisplayUserInputArea
                        onClick={this.updateBudget}
                        updateExpenses={this.updateExpenses}
                        />
                    </div>
                    <div className='col mt-3'>
                        <DisplayIcons 
                            budget={this.state.budget} 
                            expenses={this.state.expenses}  
                            balance={this.state.balance}  
                        />
                        <ExpenseTable expenses={this.state.expenseArray}/>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Main;

