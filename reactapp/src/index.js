import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Employee extends React.Component{
  state = {counter : 0};
  addEmployee =()=>{
    this.setState({counter : this.state.counter + 1});
    this.counter = this.counter + 1;
    //alert("Adding New Employee");
    //alert("Add employee button is clicked " + this.counter + "times");
  }
  render(){
    return<div>
      <h1>Class Component with state</h1>
      <p>
        <button onClick={this.addEmployee}>Add Employee</button>
      </p>
      <p>
        <label>Add Employee button is clicked <b>{this.state.counter}</b> times</label>
      </p>
    </div>
  }
}

class CountCharacters extends React.Component
{
  // constructor(props){
  //   super(props);
    state = {message : "",
              counter : 10};
  // }

    OnMessageChange(text){
      this.setState({
          message : "Message has " + text.length + " number of characters"
      });
    }
  
    render(){
      return<div>
        <h1>Count the character lenght from the text box</h1>
        <p>
          <label>Enter text : <input type="text" onChange={e=> this.OnMessageChange(e.target.value)}></input></label>
        </p>
        <p>
          <label>{this.state.message}</label>
        </p>
        <p>
          <label>{this.state.counter}</label>
        </p>
      </div>
    }
}

//const element = <Employee></Employee>
const element = <CountCharacters></CountCharacters>
ReactDOM.render(element,document.getElementById("root"));

//****************************************************************************/

// ****************** Class Components **********************************/
/*

class Employee extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
    this.props.Name = "New Name";
  }
  render(){
    return<div>
      <h1>Employee Details</h1>
      <p>
        <label>Employee ID : <b>{this.props.Id}</b></label>
      </p>
      <p>
        <label>Employee Name : <b>{this.props.Name}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{this.props.Salary}</b></label>
      </p>
      <p>
        <label>Employee Location : <b>{this.props.Location}</b></label>
      </p>
      <Department DeptName={this.props.DeptName} DeptHead={this.props.DeptHead}></Department>
    </div>
  }
}

class Department extends React.Component{
  render(){
    return<div>
      <h2>Department Details</h2>
      <p>
        Dept Name is : <b>{this.props.DeptName}</b>
      </p>
      <p>
        Dept Head is : <b>{this.props.DeptHead}</b>
      </p>
    </div>
  }
}
const element = <Employee Id="101" Name="Loganathan" Salary="1234" Location="Chennai" DeptName="IT" DeptHead="Sales"></Employee>

ReactDOM.render(element,document.getElementById("root"));
*/
//****************************************************************************/

// ****************** Function Components **********************************/
/*
// function DisplayEmployeeInfo(employee){
  var DisplayEmployeeInfo=(employee)=>{
  return <div>
    <h1>Employee Details</h1>
    <p>
      <label>Employee ID : <b>{employee.Id}</b></label>
    </p>
    <p>
      <label>Employee Name : <b>{employee.Name}</b></label>
    </p>
    <p>
      <label>Employee Location : <b>{employee.Location}</b></label>
    </p>
    <p>
      <label>Employee Salary : <b>{employee.Salary}</b></label>
    </p>
    <Department deptName={employee.deptName} headName={employee.headName}></Department>
  </div>;
}

var Department=(deptInfo)=>{
  return <div>
    <p>
      Dept Name is : <b>{deptInfo.deptName}</b>
    </p>
    <p>
      Dept Head is : <b>{deptInfo.headName}</b>
    </p>
  </div>;
}

const element = <DisplayEmployeeInfo Id="101" Name="Loganathan" Location="Chennai" Salary="12345"
        deptName="IT" headName="Sales"></DisplayEmployeeInfo>

ReactDOM.render(element,document.getElementById('root'));
*/

//****************************************************************************/

// ****************** create elements using JSX (DOM Element) ****************/

// const element = <h1 className='testClass'>Hello, world</h1>;
// ReactDOM.render(element,document.getElementById('root'));

// const newElement = <h1 className='testClass'>React Programming</h1>
// ReactDOM.render(newElement,document.getElementById('app'));

// const element = (
//   <div className='testClass'>
//     <h1>Hellow world!</h1>
//     <h2>React Programming</h2>
//   </div>
// );

// ReactDOM.render(element,document.getElementById('root'));

//****************************************************************************/

// ****************** create elements using React Element ********************/
// const element = React.createElement("h1",null,"Hellow World!")
// ReactDOM.render(element,document.getElementById('root'));

// const element = React.createElement("div",null,
// React.createElement("h1",{className:"testClass"},"Hello World!"),
// React.createElement("h1",{className:"testClass"},"React Programming..."));

// ReactDOM.render(element,document.getElementById('root'));
//****************************************************************************/
/*
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/