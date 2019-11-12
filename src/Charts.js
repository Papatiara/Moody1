import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';
import App from './App';


class Charts  extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
    <div className="Charts-item">
      <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={this.props.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
      <input className="Charts-button" value="Try it again" onClick={() => window.location.reload(false)}/>
    </div>
    );
  }
}


export default Charts;
