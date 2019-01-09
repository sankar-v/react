import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Formatter from './fullstackreact/components/Timer/Formatter';
import {Hour, Minute, Second} from './fullstackreact/components/Timer/Hour';
import Clock from './fullstackreact/components/Timer/FormattedClock';
import {TimeForm, Select, RemoteTime} from './fullstackreact/components/Timer/TimeForm';
import FetchTime from './fullstackreact/components/Timeline/FetchTime';

/*
export const load = () => {
  ReactDOM.render(
    <div>
      <div>
        Minute: <Minute minutes={12} />
      </div>
      <div>
        Second: <Second seconds={51} />
      </div>
    </div>,
    document.getElementById('demo1')
  );
};
*/
/*
  ReactDOM.render(
    <div className="clock">
      <Clock format="h:m:s p" />
    </div>,
    document.getElementById('demo2')
  );
*/
const student = {
    name: 'hello',
    age: '30',
    sex: 'M',
    year: '2000'
};

/*
const Display = ({age}) => (
    <span>{age}</span>
)

const CalculateRaise = ({sex, age, ratio=2}) => {
    if (sex == 'M' && age < 100 && ratio === 2){
        return <span>Raise permitted</span>
    }else{
        return <span>Raise NOT permitted</span>
    }
}
*/

//Spread operator destructuring into respective properties..
//ReactDOM.render(<Display {...student} />, document.getElementById('demo1'));
//ReactDOM.render(<CalculateRaise {...student}/>, document.getElementById('demo2'));

/*ReactDOM.render(<Formatter format="h:m:s a" 
                            hours={12}  
                            minutes={10} 
                            seconds={30}/>, 
                            document.getElementById('demo2'));
                            */
/*
try {
  load();
} catch (e) {
  console.log(e);
}
*/
/*
const data = ['PST', 'MST','MDT', 'EST','UTC'];
const defaultValue =  'PST';
ReactDOM.render(<Select defaultValue = {defaultValue} data = {data}/>, document.getElementById('demo1'));
*/
//ReactDOM.render(<TimeForm/>, document.getElementById('demo1'));
//ReactDOM.render(<RemoteTime/>, document.getElementById('demo2'));


ReactDOM.render(<FetchTime tz="PST" timeString = ""/>, document.getElementById('demo2'));