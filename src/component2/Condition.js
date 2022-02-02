import React,{Component} from 'react'

class Condition extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedin:false
        }
    }
    render(){
        if(this.state.isLoggedin){
            return(<div>Welcome rohit</div>)
        }
        else{
            return(<div>Welcome g</div>)
        }
    }
}
export default Condition;