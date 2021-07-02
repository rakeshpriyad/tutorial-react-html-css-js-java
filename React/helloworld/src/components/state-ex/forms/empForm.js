import React from 'react';
import styles from './form.module.css'; 


class MyForm extends React.Component {
   constructor(props){
    super(props);

    this.state ={empId:"" , empName: "", age: ""}
   }

   idChangeHandler =(event) =>{
    this.setState({
        empId: event.target.value
       })
   }

   nameChangeHandler =(event) =>{
    this.setState({
        empName: event.target.value
       })
   }

   ageChangeHandler =(event) =>{
    this.setState({
        age: event.target.value
       })
   }

   changeHandler =(event, prop) =>{
       console.log(prop)
    this.setState({
        [event.target.name]: event.target.value
       })
   }


   display = (event) => {
       this.setState({

        empId: event.target.value, empName: "", age: ""
       })
   }


    render() {

        let myStyle= {
            backgroundColor: 'green',
            color: 'yellow',
            border: '5px solid blue'
        }
        return (
            <div style={{textAlign: 'center'}}>
            <div className="brder">
                <form method="post">
                    <table border="0" width="50%">
                        <tr>
                            <td><label > EmpId</label></td>
                            <td>&nbsp;&nbsp;&nbsp;</td>
                            <td><input type="text" id="empId" name="empId" onChange={(e) => this.changeHandler(e, "empId")} /></td>
                        </tr>
                        <tr>
                            <td><label className={styles.labelStyle}> Emp Name</label></td>
                            <td>&nbsp;&nbsp;&nbsp;</td>
                            <td><input type="text" id="empName" name="empName" onChange={this.changeHandler}/></td>
                        </tr>
                        <tr>
                            <td> <label > Age</label></td>
                            <td>&nbsp;&nbsp;</td>
                            <td><input type="text" id="age" name="age" onChange={this.changeHandler}/></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>&nbsp;&nbsp;</td>
                            <td><button > Register</button></td>
                        </tr>
                    </table>

                </form>

               
            </div>
            <div>
            Id:   {this.state.empId} <br/>
            Name: {this.state.empName} <br/>
            Age: {this.state.age} <br/>
           </div>
            </div>

        );
    }
}

export default MyForm;