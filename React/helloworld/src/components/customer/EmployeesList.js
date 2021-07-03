import React from 'react'
import styles from './cust.list.module.css';

class CustomerList extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    if (!this.props.customers) {
      return <div>Loading Employees...</div>
    }
    let customers = this.props.customers;

    
    let elements = customers.map((c) => (
      <tr>
        <td className={styles.col}>{c.id}</td>
        <td className={styles.col}>{c.firstName}</td>
        <td className={styles.col}>{c.lastName}</td>
        <td className={styles.col}>{c.address}</td>
      </tr>
    )
    )

    return (<div>
      <table className={styles.empTable}>
      <thead>
        <tr>
          <th className={styles.header}>ID</th>
          <th className={styles.header}>First Name</th>
          <th className={styles.header}>Last Name</th>
          <th className={styles.header}>Address</th>
          
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

export default CustomerList;