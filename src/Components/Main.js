import React, {Component} from 'react';
import Title from './title';
import DisplayIcons from './DisplayIcons';
import DisplayUserInputArea from './DisplayUserInputArea';


class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            budget:0,
            expenses:0,
            balance:0
        }
    }
    
    render (){
        return (
            <div>
                <Title />
                <DisplayIcons 
                    budget={this.state.budget} 
                    expenses={this.state.expenses}  
                    balance={this.state.balance}  
                />
                <DisplayUserInputArea />
            </div>
        )
    }
}

export default Main;

