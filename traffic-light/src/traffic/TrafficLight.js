import React, {Component} from 'react';
import classNames from 'classnames';
import './TrafficLight.css';
const RED = 0;
const ORANGE = 1; 
const GREEN = 2;
class TrafficLight extends Component{
    constructor(props){
        super(props);
        this.state = { currentColor : RED}
       
    }
    componentDidMount() {
        setInterval(() =>
           {       
             this.setState( {currentColor: this.changeColor(this.state.currentColor)});
          },1000);
    }
    clickChange(){
        console.log('abc')
    }
   
    changeColor(color) {
       switch(color)
            {
                case RED: 
                    return ORANGE;
                case ORANGE: 
                    return GREEN;
                default: 
                    return RED
            }    
    }
    
    render()
    {
        const { currentColor } = this.state;
        return(
            <div className="TrafficLight">
               <div className={classNames('bulb','red',
                 {active : currentColor === RED}
               )}></div>
               <div className={classNames('bulb','orange',
               {active : currentColor === ORANGE}
               )}></div>
                <div className={classNames('bulb','green',
               {active : currentColor === GREEN}
               )}></div>
            </div>
        )
    }
}
export default TrafficLight;