import React from 'react';

class Car extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            name: "Maruti",
            model: "M1",
            color: "Green"

        }
    }

    shoot(msg) {
        console.log(msg)
    }

    changeColor = () =>{
        this.setState({color:"Red"})
    }

    changeName(){
       this.setState({name:"Hundai"})
      // this.state = {name: "Hundai"}
    }

    render() {
        return <div>
         Hello Car {this.state.name} {this.state.model} {this.state.color} 
            <button onClick = {this.changeName.bind(this)}> Change</button>
         </div>
    }
}

export default Car;
