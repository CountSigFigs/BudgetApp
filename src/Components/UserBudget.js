import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


class UserBudget extends Component {
    constructor (props){
        super(props)
        this.state={
            budget: undefined,
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({budget: event.target.value});
      }

    resetForm(){
        this.setState({budget:''})
        console.log(this.state.budget)
    }

    render() {
        return (
            <Form className="mt-3" style={{color:'#228B22'}}>
                <FormGroup>
                    <Label for="userBudget"><h4>Enter Budget</h4></Label>
                    <Input
                        type="text"
                        name="userBudget"
                        id="userBudget"
                        placeholder='4000'
                        value={this.state.budget}
                        onChange={this.handleChange}
                    >
                    </Input>
                    <Button 
                        className="hoverOverGreen mt-3"
                        style={{backgroundColor:'#228B22'}}
                        onClick={()=>{
                            this.props.onClick(this.state.budget);
                            this.resetForm()
                            }}
                    > 
                    Add Budget</Button>
                </FormGroup>
            </Form>
        )
    }
}
export default UserBudget;

