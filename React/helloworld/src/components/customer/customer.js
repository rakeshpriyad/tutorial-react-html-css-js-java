import React from 'react'

import styles from './cust.form.module.css';
import CustomerList from './EmployeesList';


const API = process.env.REACT_APP_API || 'http://localhost:8080/rest';


class CustomerForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      customer: {},
      customers: [],
      error: null,
    };
  }

  componentDidMount() {
    this.getCustomers();
  }

  async getCustomers() {
    this.setState({ loading: false, customers: (await this.fetch('get', '/customers')) || [] });
  }


  saveCustomer = async () => {

    let customer = this.state.customer;
    if (customer.id) {
      console.log(customer.id)
      await this.fetch('put', `/customers/${customer.id}`, customer);
    } else {
      await this.fetch('post', '/customers', customer);
    }

    this.getCustomers();
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

  handleChange = (event) => {
    let e = { [event.target.name]: event.target.value };
    console.log(e);

    this.setState(prevState => ({
      customer: {                   // object that we want to update
        ...prevState.customer,    // keep all other key-value pairs
        [event.target.name]: event.target.value       // update the value of specific key
      }
    }))
    console.log(this.state.customer)
  }


  render() {
    let customer = {};

    customer = this.state.customer

    return (
      <div>

        <form action="http://localhost:8080/rest/customers" method="post">
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.column}>
                <label> ID</label>
              </div>
              <div className={styles.column}>
                <input type="text" name="id" id="id" onChange={this.handleChange} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <label>First Name</label>
              </div>
              <div className={styles.column}>
                <input type="text" name="firstName" id="firstName" onChange={this.handleChange} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <label>Last Name</label>
              </div>
              <div className={styles.column}>
                <input type="text" name="lastName" id="lastName" onChange={this.handleChange} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <label>Address</label>
              </div>
              <div className={styles.column}>
                <input type="text" name="address" id="address" onChange={this.handleChange} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <input type="button" value="Save" onClick={this.saveCustomer} />
              </div>
              <div className={styles.column}>
                <input type="button" value="Update" onClick={this.saveCustomer} />
              </div>
            </div>
          </div>
        </form>
        <div>
           <CustomerList customers={this.state.customers} /> 
        </div>
      </div>
    )
  }
}

export default CustomerForm;