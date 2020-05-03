import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class UserExpenses extends Component {
    constructor(props){
        super(props)
        this.state={
            expenses:'',
            expenseItem:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleExpenseItem= this.handleExpenseItem.bind(this);
    }

    handleChange(event) {
        this.setState(
            {expenses: event.target.value});
      }

    handleExpenseItem(event){
        this.setState({
            expenseItem: event.target.value
        })
    }
    resetForm(){
        this.setState({
            expenses:'',
            expenseItem:''
        })
        console.log(this.state)
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
                        onChange={this.handleExpenseItem}
                        value={this.state.expenseItem}
                    >
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="userExpenseAmount"><h4>Enter Expense Amount</h4></Label>
                    <Input
                        type="text"
                        name="userExpenseAmount"
                        id="userExpenseAmount"
                        placeholder="200"
                        onChange={this.handleChange}
                        value={this.state.expenses}
                    >
                    </Input>
                    <Button 
                        className='mt-3' 
                        onClick={()=>{
                            this.props.updateExpenses(this.state.expenseItem,this.state.expenses)
                            this.resetForm()
                                }
                            }
                        >Add Expense</Button>
                </FormGroup>
            </Form>
        )
    }
}
export default UserExpenses;

