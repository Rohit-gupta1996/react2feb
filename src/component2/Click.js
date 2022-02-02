import React,{Component} from 'react'
class Click extends Component{

  constructor(props){
    super(props); 
    this.state = {counter:0}; 
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({counter:this.state.counter+1});
  }
  render(){
     return(
      <div>
        <h1>You clicked {this.state.counter} times.</h1>
        <button onClick={this.handleClick}>ClickMe</button>
        
      </div>
    );
  };

}
export default Click;