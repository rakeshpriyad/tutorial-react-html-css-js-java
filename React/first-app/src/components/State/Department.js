import React from 'react';
import Emp from './Emp';

class Department extends React.Component {
	
	
  render() {
	  const empInfo = {name: "Rakesh", agge: "30"};
    return (
      <div>
      <h1>Who works in my department?</h1>
      <Emp data={empInfo} />
      </div>
    );
  }
}

export default Department;