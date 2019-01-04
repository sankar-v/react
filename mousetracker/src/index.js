import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {Hour, Minute, Second} from './fullstackreact/components/Timer/Hour';
import Clock from './fullstackreact/components/Timer/FormattedClock';
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
  ReactDOM.render(
    <div className="clock">
      <Clock format="h:m:s p" />
    </div>,
    document.getElementById('demo2')
  );

/*
try {
  load();
} catch (e) {
  console.log(e);
}
*/