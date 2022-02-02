import React,{Component} from 'react'
class Calculator extends Component {
    constructor(props) {
       super(props);
       this.state = {result: '',num1: '',num2: ''};
       
       this.handlenum1Change = this.handlenum1Change.bind(this);
       this.handlenum2Change = this.handlenum2Change.bind(this);
       this.addAction = this.addAction.bind(this);
       this.subAction = this.subAction.bind(this);
       this.multAction = this.multAction.bind(this);
       this.divAction = this.divAction.bind(this);
     }
     handlenum1Change (evt) {
       console.log(evt.target.value);
       this.setState({ num1: Number(evt.target.value) });
     }
     handlenum2Change(evt) {
       console.log(evt.target.value);
       this.setState({ num2:Number(evt.target.value) });
     }
     addAction() {
                var sum = this.state.num1 + this.state.num2
                alert('sum of number is: '+ sum);  
                 }
  
     subAction() {
                  var sub = this.state.num1 - this.state.num2
                  alert('subtraction of number is: '+ sub);  
                   }      
     multAction() {
                    var mul = this.state.num1 * this.state.num2
                    alert('multiplication of number is: '+ mul);  
                     }    
     divAction() {
                      var div = this.state.num1 / this.state.num2
                      alert('division of number is: '+ div);  
                       }                                     
   render() {
    return (
      <form>
           <label>
             First Number:
             <input type="number" onChange={this.handlenum1Change} />
             Second Number:
             <input type="number"   onChange={this.handlenum2Change}/>
             <input type="button" onClick={this.addAction} value="Addition"/><br></br>
             <input type="button" onClick={this.subAction} value="Subtraction"/><br></br>
             <input type="button" onClick={this.multAction} value="multiplication"/><br></br>
             <input type="button" onClick={this.divAction} value="Division"/><br></br>
  
             
           </label>
         </form>
       );
     }
   }
   export default Calculator;