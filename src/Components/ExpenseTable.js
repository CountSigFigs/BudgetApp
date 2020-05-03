import React from 'react'
import {Table, Button} from 'reactstrap'

function ExpenseTable ({expenses}){

    
    const expenseList= expenses.map(item =>{
        return (
            <tr>
                    <td></td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td><Button className="btn">Remove</Button></td>
            </tr>
        )
    })

    return(
        <div className='container'>
            <div className='row'>
                <div className='col mt-3 text-center'>
                    <h3>Your Expenses</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Expense Name</th>
                                <th>Expense Amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenseList}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ExpenseTable;
