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
        this.handleDelete=this.handleDelete.bind(this)

    }

   updateBudget(amount){

    if (isNaN(amount) || (!amount)){
        alert('Input only numbers!')
        return;
    } else {
        let balance= parseInt(amount) - parseInt(this.state.expenses)
        this.setState({
            budget: amount,
            balance: balance
        })
        }
   }

   updateExpenses(item,amount){
    if (!item || isNaN(amount) || !amount){
        alert('Input a valid name and expense amount. Example: Student loan 250')
    } else {
    let total= parseInt(this.state.expenses) + parseInt(amount);
    let balance= parseInt(this.state.budget) - total
    
    //creates newobject to be added to expense array
    let obj={
        name:item,
        amount: amount
    }

    this.setState({
        expenses: total,
        balance: balance,
        expenseArray: [...this.state.expenseArray,obj]
    })
    
    }
}
    handleDelete(item){
        //deletes from expenseArray
        let newExpenseList= this.state.expenseArray;
        let index = newExpenseList.indexOf(item);
        newExpenseList.splice(index,1);

        //updates expense and balance amounts
        let newBalance= this.state.balance;
        let newExpenses=this.state.expenses;
        newBalance= parseInt(newBalance) + parseInt(item.amount);
        newExpenses= newExpenses-item.amount;

        this.setState({
            expenseArray: newExpenseList,
            balance: newBalance,
            expenses: newExpenses
        })
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
                        <ExpenseTable expenses={this.state.expenseArray} onClick={this.handleDelete}/>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Main;

