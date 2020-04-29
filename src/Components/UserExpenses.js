import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

function UserExpenses (){
    return (
        <Form className="mt-3">
           <FormGroup>
            <Label for="userExpenseTitle"><h4>Enter Expense Name</h4></Label>
            <Input 
                type="text"
                name="userExpenseTitle"
                id="userExpenseTitle"
                placeholder="Student loan"
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
            >    
            </Input>
            <Button className='mt-3'>Add Expense</Button>
        </FormGroup>
    </Form>
    )
}

export default UserExpenses;

