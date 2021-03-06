import React,{PureComponent} from 'react'
import { LineChart, Line,SimpleLineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend } from 'recharts';


const data = [
    {name: '1-17', demand: 7600, amt: 2400},
    {name: '1-18', demand: 3698, amt: 2210},
    {name: '1-19', demand: 8600, amt: 2290},
    {name: '1-20', demand: 4608, amt: 2000},
    {name: '1-21', demand: 9800, amt: 2181},
    {name: '1-22', demand: 6700, amt: 2500},
    {name: '1-23', demand: 7700, amt: 2100},
];


export default class BTDashboardChartDemand extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="demand" stroke="#8884d8" />
              </LineChart>
            </div>
        )
    }
}