import React from 'react';
import './popup.css';

import {TimePickerComponent} from '@syncfusion/ej2-react-calendars';

class Popup extends React.Component{
    

    render(){
        return(
            <div className='popup'>
              
              <div className="popup/_inner">
                <input  type="text" placeholder="title" defaultValue={this.props.title} onChange={this.props.handle} ></input><br></br>
                <TimePickerComponent step={60}format={"HH:mm"} placeholder="Select startTime"defaultValue={this.props.start} onChange={this.props.handlestart} /><br />
                <TimePickerComponent format={"HH:mm"} placeholder="Select EndTime" defaultValue={this.props.end} onChange={this.props.handleend} /><br />
               
               
               
                <button onClick={this.props.add}>ADD</button> <br/>  
                          
                    
                </div>
                
            </div>
        )
    }
}

export default Popup;