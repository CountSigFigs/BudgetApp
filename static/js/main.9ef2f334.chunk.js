(this["webpackJsonpbudget-app"]=this["webpackJsonpbudget-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(15),r=a.n(s),c=(a(22),a(16)),o=a(8),m=a(9),u=a(6),i=a(12),d=a(11);var p=function(e){return l.a.createElement("div",{className:"col-7 col-md-3 mx-auto text-center mx-auto iconBox p-2 mb-2",style:{color:"#228B22"}},l.a.createElement("h3",null,"Budget"),l.a.createElement("i",{className:"fas fa-money-bill-alt fa-2x mr-1"}),l.a.createElement("span",{className:"d-block icon text-center"},e.budget))};var E=function(e){return l.a.createElement("div",{className:"col-7 col-md-3 mx-auto text-center mx-auto iconBox p-2 mb-2",style:{color:"#DC143C"}},l.a.createElement("h3",{className:"mr-2"},"Expenses"),l.a.createElement("i",{class:"fas fa-money-check fa-2x"}),l.a.createElement("span",{className:"d-block text-center icon"},e.expenses))};var h=function(e){return l.a.createElement("div",{className:"col-7 col-md-3 mx-auto text-center mx-auto iconBox p-2 mb-2",style:{color:"#4169E1"}},l.a.createElement("h3",null,"Balance"),l.a.createElement("i",{className:"fas fa-dollar-sign fa-2x mr-1"}),l.a.createElement("span",{className:"d-block icon text-center"},e.balance))};var x=function(e){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row mt-3 d-flex flex-row"},l.a.createElement(p,{budget:e.budget,balance:e.balance,expenses:e.expenses}),l.a.createElement(E,{expenses:e.expenses}),l.a.createElement(h,{balance:e.balance})))},v=a(29),b=a(30),f=a(31),g=a(32),y=a(33),N=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={budget:void 0},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({budget:e.target.value})}},{key:"resetForm",value:function(){this.setState({budget:""}),console.log(this.state.budget)}},{key:"render",value:function(){var e=this;return l.a.createElement(v.a,{className:"mt-3",style:{color:"#228B22"}},l.a.createElement(b.a,null,l.a.createElement(f.a,{for:"userBudget"},l.a.createElement("h4",null,"Enter Budget")),l.a.createElement(g.a,{type:"text",name:"userBudget",id:"userBudget",placeholder:"4000",value:this.state.budget,onChange:this.handleChange}),l.a.createElement(y.a,{className:"hoverOverGreen mt-3",style:{backgroundColor:"#228B22"},onClick:function(){e.props.onClick(e.state.budget),e.resetForm()}},"Add Budget")))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={expenses:"",expenseItem:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleExpenseItem=n.handleExpenseItem.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({expenses:e.target.value})}},{key:"handleExpenseItem",value:function(e){this.setState({expenseItem:e.target.value})}},{key:"resetForm",value:function(){this.setState({expenses:"",expenseItem:""}),console.log(this.state)}},{key:"render",value:function(){var e=this;return l.a.createElement(v.a,{className:"mt-3",style:{color:"#DC143C"}},l.a.createElement(b.a,null,l.a.createElement(f.a,{for:"userExpenseTitle"},l.a.createElement("h4",null,"Enter Expense Name")),l.a.createElement(g.a,{type:"text",name:"userExpenseTitle",id:"userExpenseTitle",placeholder:"Student loan",onChange:this.handleExpenseItem,value:this.state.expenseItem})),l.a.createElement(b.a,null,l.a.createElement(f.a,{for:"userExpenseAmount"},l.a.createElement("h4",null,"Enter Expense Amount")),l.a.createElement(g.a,{type:"text",name:"userExpenseAmount",id:"userExpenseAmount",placeholder:"200",onChange:this.handleChange,value:this.state.expenses}),l.a.createElement(y.a,{style:{backgroundColor:"#DC143C"},className:"hoverOverRed mt-3",onClick:function(){e.props.updateExpenses(e.state.expenseItem,e.state.expenses),e.resetForm()}},"Add Expense")))}}]),a}(n.Component);var C=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-4"},l.a.createElement("div",{className:"col-10 mb-2 userInput ml-3 mx-auto iconBox"},l.a.createElement(N,{onClick:e.onClick}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mt-2 userInput ml-3 mx-auto iconBox"},l.a.createElement(k,{updateExpenses:e.updateExpenses}))))};var B=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-center iconBox p-3",style:{color:"#4169E1"}},l.a.createElement("h1",null,"Get Your Budget in Order"))))},O=a(34);var I=function(e){var t=e.expenses.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.amount),l.a.createElement("td",null,l.a.createElement("span",{onClick:function(){return e.onClick(t)}},l.a.createElement("i",{class:"fas fa-trash-alt clickMe"}))))}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col mt-3 text-center iconBox p-3",style:{color:"#4169E1"}},l.a.createElement("h3",null,"Your Expenses"),l.a.createElement(O.a,{style:{color:"#4169E1"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Expense Name"),l.a.createElement("th",null,"Expense Amount"),l.a.createElement("th",null))),l.a.createElement("tbody",null,t)))))},j=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={budget:0,expenses:0,expenseArray:[],balance:0},n.updateBudget=n.updateBudget.bind(Object(u.a)(n)),n.updateExpenses=n.updateExpenses.bind(Object(u.a)(n)),n.handleDelete=n.handleDelete.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"updateBudget",value:function(e){if(!isNaN(e)&&e){var t=parseInt(e)-parseInt(this.state.expenses);this.setState({budget:e,balance:t})}else alert("Input only numbers!")}},{key:"updateExpenses",value:function(e,t){if(e&&!isNaN(t)&&t){var a=parseInt(this.state.expenses)+parseInt(t),n=parseInt(this.state.budget)-a,l={name:e,amount:t};this.setState({expenses:a,balance:n,expenseArray:[].concat(Object(c.a)(this.state.expenseArray),[l])})}else alert("Input a valid name and expense amount. Example: Student loan 250")}},{key:"handleDelete",value:function(e){var t=this.state.expenseArray,a=t.indexOf(e);t.splice(a,1);var n=this.state.balance,l=this.state.expenses;n=parseInt(n)+parseInt(e.amount),l-=e.amount,this.setState({expenseArray:t,balance:n,expenses:l})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-5 mx-auto mt-5"},l.a.createElement(B,null),l.a.createElement(C,{onClick:this.updateBudget,updateExpenses:this.updateExpenses})),l.a.createElement("div",{className:"col mt-3"},l.a.createElement(x,{budget:this.state.budget,expenses:this.state.expenses,balance:this.state.balance}),l.a.createElement(I,{expenses:this.state.expenseArray,onClick:this.handleDelete}))))}}]),a}(n.Component);a(25);var w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(26),a(27);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,{style:{backgroundColor:"#e9ebee"}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9ef2f334.chunk.js.map