import React, { Component, Fragment } from 'react';
import styles from './fetch.module.css';

const API = process.env.REACT_APP_API || 'http://localhost:8080/rest';


class EmpFetch extends Component {
  state = {
    loading: true,
    emps: [],
    error: null,
  };

  componentDidMount() {
    let employees = this.getEmployees();
    console.log(this.state.emps);
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

  async deleteEmp(emp) {
    if (window.confirm(`Are you sure you want to delete "${emp.name}"`)) {
      await this.fetch('delete', `/employees/${emp.id}`);
      this.getEmployees();
    }
  }

  /*   renderEmpEditor = ({ match: { params: { id } } }) => {
      if (this.state.loading) return null;
      const emp = find(this.state.emps, { id: Number(id) });
  
      if (!emp && id !== 'new') return <Redirect to="/posts" />;
  
      return <PostEditor post={post} onSave={this.savePost} />;
    };
   */

  render() {
    const { classes } = this.props;
    console.log(this.state.emps)
    let elements = <div></div>;
    let employees = {};
    if (this.state.emps) {
      employees = this.state.emps;
      employees.forEach(e => {
        console.log(e)
      });


      /* <table border="1">
      <tbody>
       elements = employees.map((e) => (
        <tr>
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
        </tr>
 </tbody>

        </table>
      )) */

      elements = employees.map((e) => (
        <div className={styles.row} key={e.id}>
          <div className={styles.col} key={e.firstName}>{e.firstName}</div>
          <div className={styles.col} key={e.lastName}>{e.lastName}</div>
        </div>

      ))
      console.log(elements)
    }
    return (
      <div id="emp" className={styles.table}>
        <div className={styles.row} key="id">
          <div className={styles.col} key="firstName">First Name</div>
          <div className={styles.col} key="lastName">Last Name</div>
        </div>
        {elements}


      </div>
    );
  }
}

export default EmpFetch;