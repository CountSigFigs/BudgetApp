import React from 'react'
import {Table} from 'reactstrap'

function ExpenseTable (props){

    
    const expenseList= props.expenses.map(item =>{
        return (
            <tr>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td><span onClick={()=>props.onClick(item)}><i class="fas fa-trash-alt clickMe"></i></span></td>
            </tr>
        )
    })

   
    return(
        <div className='container'>
            <div className='row'>
                <div className='col mt-3 text-center iconBox p-3' style={{color:'#4169E1'}}>
                    <h3>Your Expenses</h3>
                    <Table style={{color:'#4169E1'}}>
                        <thead>
                            <tr>
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
