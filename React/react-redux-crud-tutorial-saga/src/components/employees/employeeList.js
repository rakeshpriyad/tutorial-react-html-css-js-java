import React from "react";
import {
  retrieveEmployees,
  findByFirstName,
  deleteAllEmps,
} from "../../actions/empAction";

import { connect } from 'react-redux';

import styles from './emp.list.module.css'

class EmpsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchText: "",
      emp: {},
      emps: [],
      currentIndex: -1,
      currentEmp: {
        id: null,
        firstName: "",
        lastName: "",
      }
    }
  }

  componentDidMount() {

    this.props.getEmployees();
  }

  onChangeSearchText = e => {
    const searchText = e.target.value;
    this.setState({searchText});
  };

  refreshData = () => {
    //setCurrentEmp(null);
    this.setState({ emp: null, currentIdex: -1 })
  };

  setActiveEmp = (emp, index) => {
    //setCurrentEmp(emp);
    this.setState({ emp: emp, currentIdex: index });
    //setCurrentIndex(index);
  };

  removeAllEmps = () => {
    this.refreshData();

  };

  findByName = () => {
    this.refreshData();
    this.props.findByFirstName(this.state.searchText);
  };

  render() {
    console.log("emps list--" + this.props.emps)
    return (
      <div className="list row" >
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by firstName"
              value={this.state.searchText}
              onChange={this.onChangeSearchText}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findByName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Emps List</h4>

          <div className={styles.empTable}>
            <div className={styles.row}>
              <div className={styles.col}>
                First Name
              </div>
              <div className={styles.col}>
                Last Name
              </div>
            </div>
            {this.props.emps &&
              this.props.emps.map((emp, index) => (

                <div className={styles.row}>
                  <div className={styles.col}>
                    {emp.firstName}
                  </div>
                  <div className={styles.col}>
                    {emp.lastName}
                  </div>
                </div>

              ))}
          </div>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllEmps}
          >
            Remove All
          </button>
        </div>

      </div>
    );
  }
};


export const mapDispatchToProps = (dispatch) => {
  return {
    getEmployees: () => dispatch(retrieveEmployees()),
    findByFirstName: (firstName) => dispatch(findByFirstName(firstName))
  }
}


const mapStateToProps = state => ({
  emps: state.empReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(EmpsList);


