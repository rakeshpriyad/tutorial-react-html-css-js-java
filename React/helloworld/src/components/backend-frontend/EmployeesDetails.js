import React from 'react'

import styles from './emp.details.module.css';

const API = process.env.REACT_APP_API || 'http://localhost:8080/rest';


class EmployeeDetails extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            emps: [],
            error: null,
        };
        
    }
    componentDidMount() {
        this.getEmployees();
        
    }

      async getEmployees() {
        this.setState({ loading: false, emps: (await this.fetch('get', '/employees')) || [] });
      }

      
  saveEmp = async (emp) => {
    if (emp.id) {
      await this.fetch('put', `/employees/${emp.id}`, emp);
    } else {
      await this.fetch('post', '/employees', emp);
    }


    this.getEmployees();
  }


    
  async fetch(method, endpoint, body) {
    try {
      const response = await fetch(`${API}${endpoint}`, {
        method,
        body: body && JSON.stringify(body),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
          // authorization: `Bearer ${await this.props.authService.getAccessToken()}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error(error);

      this.setState({ error });
    }
  }




    render(){
            let employees = {}
            let elements = {}
            if(this.state.emps){
                employees = this.state.emps;
                
                    elements = employees.map((e) => (
                        <div className={styles.row} key={e.id}>
                        <div className={styles.col} key={e.id}>{e.id}</div>
                          <div className={styles.col} key={e.firstName}>{e.firstName}</div>
                          <div className={styles.col} key={e.lastName}>{e.lastName}</div>
                        </div>
                
                      ))
                   
            
                
            }

           

            return (
                <div>
                    <form action="http://localhost:8080/rest/employees" method="post">
                        <label> First Name</label> <br/>
                        <input type="text"  name ="firstName" id ="firstName" /> <br/>
                        
                        <label> Last Name</label> <br/>
                        <input type="text"  name ="lastName" id ="lastName" /> <br/>
                        
                        
                        <input type="button" value="Register" onClick={this.saveEmp} /> <br/>
                    </form>
        
              </div>

            )
    }
} 

export default EmployeeDetails;