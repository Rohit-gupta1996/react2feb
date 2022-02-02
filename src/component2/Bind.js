import React,{Component} from'react'

class Bind extends Component{
    constructor(props){
        super(props)
        this.state={hello:' bind function example'}
        this.clickHandler=this.clickHandler.bind(this)
    }
    

    clickHandler(){
        this.setState({
            hello:'on click function execution'
        })
        console.log(this)
    }
    render(){
        return(
            <div>
                <div >{this.state.hello}</div>
                {/* <button onClick={this.clickHandler.bind(this)} >click</button> */}
                <button onClick= {() =>this.clickHandler()} >click</button>
            </div>
        )
    }
}
export default Bind;