import React,{Component} from 'react'

class Message_state extends Component {
    constructor(){
        super()
        this.state={
            message:"Welcome"
        }
    }
    changeMessage(){
        this.setState({
            message:'Thanks for visiting'
        })
    }
    render(){
     return (
    <div>
     <h1>{this.state.message} </h1>
     <button onClick={() => this.changeMessage()}>More details</button>
     </div>
    )
 }
}

export default Message_state