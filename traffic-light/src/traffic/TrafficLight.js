import React, {Component} from 'react';
import classNames from 'classnames';

import './TrafficLight.css';
const RED = 0;
const ORANGE = 1; 
const GREEN = 2;
class TrafficLight extends Component{
    constructor(){
        super();
        this.currentColor = RED;

        setInterval(() =>
           {
            console.log(this.currentColor);   
            this.currentColor = this.getNextColor(this.currentColor);}
        ,1000);
    }

    getNextColor(color){
        switch(color){
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }

    render(){
        return(
            <div className="TrafficLight">
                <div className={classNames('bulb','red',{
                    active: this.currentColor === RED
                })}/>
                <div className={classNames('bulb','orange',{
                    active: this.currentColor === ORANGE
                })}/>
                <div className={classNames('bulb','green',{
                    active: this.currentColor === GREEN
                })}/>
            </div>
        )
    }
}
export default TrafficLight;