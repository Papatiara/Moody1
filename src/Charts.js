import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import App from './App';


class Charts  extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
    <div className="Charts-item">
      <BarChart width={600} height={300} data={this.props.data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar type="monotone" dataKey="value" fill="#8884d8" barSize={30} />
      </BarChart>
      <input className="Charts-button" value="Try it again" onClick={() => window.location.reload(false)}/>
    </div>
    );
  }
}


export default Charts;
