import React from 'react'
import styles from './emp.list.module.css';

const API = process.env.REACT_APP_API || 'http://localhost:8080/rest';


class EmployeeList1 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    //let employees = {}
    // let elements = {}
    if (!this.props.employees) {
      return <div>Loading Employees...</div>
    }
    let employees = this.props.employees;

   
    let elements = employees.map((e) => (
      <tr>
        <td className={styles.col}>{e.id}</td>
        <td className={styles.col}>{e.firstName}</td>
        <td className={styles.col}>{e.lastName}</td>
      </tr>
    )
    )

    return (<div>
      <table id="employee" className={styles.empTable}>
      <thead>
        <tr>
          <th className={styles.header}>ID</th>
          <th className={styles.header}>First Name</th>
          <th className={styles.header}>Last Name</th>
        </tr>
        </thead>
        <tbody>
        {elements}  
        </tbody>
      
      </table>
    </div>
    );

  }
}

export default EmployeeList1;