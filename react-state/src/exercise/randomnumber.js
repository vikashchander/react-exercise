import React,{Component} from 'react';


class Random extends Component{
    constructor(props){
        super(props);
       this.state={Ranumber :1};
       this.randnumb= this.randnumb.bind(this);
    };
    
    randnumb(e){
        let  num = Math.floor(Math.random()*10+1);
        this.setState({Ranumber:num});
    }

    render(){
        // this is a if else method
        // const check =this.state.Ranumber;
        // let button;
        // if(check ===7)  
        // { button=<h2>You Win</h2>}
        // else{
        //  button=<button onClick={this.randnumb} > {this.props.button}</button>
        // }
        return(
          <div>
            <h2>The Number is :{this.state.Ranumber}</h2>
            {/* if-else conditons in it*/}
            {/*button*/}

            {/* Inline If with Logical && Operator*/}
            { /*this.state.Ranumber===7 &&  <h2>You Win</h2>*/ }
            { /*this.state.Ranumber !==7 &&  <button onClick={this.randnumb} > {this.props.button}</button>*/}
           
            
             {/* Inline ternary operator condtions*/}
            { this.state.Ranumber===7 ? 
                <h2>You Win</h2> 
                :
                <button onClick={this.randnumb} > {this.props.button}</button>
                }

          </div>
        );
    }
}

export default Random;