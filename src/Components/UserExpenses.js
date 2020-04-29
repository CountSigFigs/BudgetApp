import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class UserExpenses extends Component {
    constructor(props){
        super(props)
        this.state={
            expenses:undefined,
            expenseArray:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleExpenseArray= this.handleExpenseArray.bind(this);
    }

    handleChange(event) {
        this.setState(
            {expenses: event.target.value});
      }

    handleExpenseArray(event){
        this.setState({
            expenseArray: event.target.value
        })
    }

    render() {
        return (
            <Form className="mt-3">
                <FormGroup>
                    <Label for="userExpenseTitle"><h4>Enter Expense Name</h4></Label>
                    <Input
                        type="text"
                        name="userExpenseTitle"
                        id="userExpenseTitle"
                        placeholder="Student loan"
                        onChange={this.handleExpenseArray}
                        value={this.state.expensesArray}
                    >
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="userExpenseAmount"><h4>Enter Expense Amount</h4></Label>
                    <Input
                        type="text"
                        name="userExpenseAmount"
                        id="userExpenseAmount"
                        placeholder="4000"
                        onChange={this.handleChange}
                        value={this.state.expenses}
                    >
                    </Input>
                    <Button className='mt-3' onClick={()=>this.props.updateExpenses(this.state.expenseArray,this.state.expenses)}>Add Expense</Button>
                </FormGroup>
            </Form>
        )
    }
}
export default UserExpenses;

