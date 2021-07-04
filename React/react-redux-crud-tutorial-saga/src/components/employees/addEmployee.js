import React from "react";
import { createEmp } from "../../actions/empAction";
import { connect } from 'react-redux';

class AddEmp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: null,
      firstName: "",
      lastName: "",
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  saveEmp = () => {
    this.props.save(this.state);
  };


  render() {
    return (
      <div className="submit-form">
        {(
          <div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
              />
            </div>

            <button onClick={this.saveEmp} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
};


export const mapDispatchToProps = (dispatch) => {
  return {
    save: (emp) => dispatch(createEmp(emp))
  }
}

export default connect(null, mapDispatchToProps)(AddEmp);


