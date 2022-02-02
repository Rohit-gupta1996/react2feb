import React,{Component} from 'react'
class Form extends Component {
    constructor(props) {  
      super(props);  
      this.state = {name: '',pnumber: '',email:''};  
      this.handleChange = this.handleChange.bind(this);  
      this.handleChange2 = this.handleChange2.bind(this);  
      this.handleChange3= this.handleChange3.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  handleChange(event) {  
      this.setState({name: event.target.value.toUpperCase()});  
      
  }  
  handleChange2(event) {  
      this.setState({pnumber: event.target.value});  
      
  }  
  handleChange3(event) {  
      this.setState({email: event.target.value});  
  }  

  handleSubmit(event) {  
      if(this.state.pnumber.length<=9)
      {
         alert("enter 10 digit number")
      }
      else{
      
      alert('Details are here: ' + this.state.name+" "+this.state.pnumber+" "+this.state.email);  
      
      }
  }  

  render() {  
      return (  
          <form onSubmit={this.handleSubmit}>  
            <h1> Emp</h1>  
            <label>  
                Name:  
                <input type="text" required value={this.state.name} onChange={this.handleChange} />  
            </label>  
            <br/>
            <label>
                Phone:
                <input type="number" value={this.state.pnumber} onChange={this.handleChange2} />  
            </label>
            <br/>
            <label>
                Email:
                <input type="email" required value={this.state.email} onChange={this.handleChange3} />  
            </label>  
            <br/>
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default Form;

