import React from 'react';
import ReactDOM from 'react-dom';

class Greetings extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        let emp = {};
        if(this.props.employee){
            emp = this.props.employee;
        }
        return <div>Hello {this.props.message} {this.props.address} <br/>
            Employee Details <br/>
            Name:  {emp.name} <br/>
            Age: {emp.age} <br/>
            Address: {emp.address} 

        </div>
    }
}

export default Greetings;