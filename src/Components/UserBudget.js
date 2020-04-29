import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';


function UserBudget (){
    return (
        <Form className="mt-3">
            <FormGroup>
                <Label for="userBudget"><h4>Enter Budget</h4></Label>
                <Input 
                    type="text"
                    name="userBudget"
                    id="userBudget"
                    placeholder="4000"
                >    
                    </Input>
                <Button className='mt-3'>Add Budget</Button>
            </FormGroup>
        </Form>
    )
}

export default UserBudget;

