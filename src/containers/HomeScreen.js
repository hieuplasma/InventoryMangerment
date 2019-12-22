import React, { Component } from 'react';
import { Button, Layout, Menu, Icon, Breadcrumb, Row, Col, Input, Card } from 'antd';
import {
    BrowserRouter,
    Route,
    Link,
    Router,
    Switch,
    withRouter
} from 'react-router-dom'

import { CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Legend, Bar } from 'recharts';

import { Select } from 'antd';

import CanvasJSReact from '../lib/canvasjs.react';
import Srcicon from '../resource/icons/Srcicon';
// var CanvasJSReact = require('../lib/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const { Option } = Select;




class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color1: 'white',
            color2: 'white',
            color3: 'white',
        }
    }

    _viewItem(color, link, text, icon, onSetState) {
        return (
            <div style={{
                height: 120,
                marginTop: 25,
                marginBottom: 25,
                marginLeft: 5, marginRight: 5,
                width: 380,
                borderRadius: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                backgroundColor: color
            }}
                onMouseMove={() => onSetState('#34bfa3')}
                onMouseLeave={() => onSetState('white')}
            >
                <img src={icon} style={styles.icon} />
                <p style={{ fontWeight: 'bold', fontSize: 24 }}>
                    {text}
                </p>
            </div>
        )
    }


    render() {

        const options = {
            animationEnabled: true,
            title: {
                text: "Tiến độ công việc"
            },
            subtitles: [{
                text: "71% Tích cực",
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: [
                    { name: "Hoàn thành", y: 40 },
                    { name: "Quá hạn", y: 17 },
                    { name: "Đang làm", y: 31 },
                ]
            }]
        }

        const data = [
            {
                "name": "Tm.Hiếu",
                "Hoàn thành": 32,
                "Quá hạn": 46,
                "Đang làm": 22
            },
            {
                "name": "Nq.Thành",
                "Hoàn thành": 56,
                "Quá hạn": 19,
                "Đang làm": 25
            },
            {
                "name": "Cv,Duy",
                "Hoàn thành": 60,
                "Quá hạn": 24,
                "Đang làm": 16
            }
        ]


        return (

            <div style={styles.container}>

                <div style={styles.topview}>
                    {
                        this._viewItem(this.state.color1, 'apis', 'KPI tuần: 154', Srcicon.kpi, (color) => {
                            this.setState({ color1: color })
                        })
                    }
                    {
                        this._viewItem(this.state.color2, 'reference', 'KPI tháng: 600', Srcicon.kpi, (color) => {
                            this.setState({ color2: color })
                        })
                    }
                    {
                        this._viewItem(this.state.color3, 'billing', 'KPI của tôi: 32', Srcicon.kpi, (color) => {
                            this.setState({ color3: color })
                        })
                    }
                </div>
                {/* <p style={styles.name}>KPI tuần: 154</p>
                    <p style={styles.name}>KPI tháng: 600</p>
                    <p style={styles.name}>KPI của tôi: 32</p> */}

                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: 20, justifyContent: 'space-between' }}>
                    <div style={{ width: '40%', backgroundColor: 'white', margin: 30, marginTop: 10, borderRadius: 10, paddingTop: 30 }}>
                        <div style={{ width: '85%', height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CanvasJSChart options={options}
                            /* onRef={ref => this.chart = ref} */
                            />
                            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                        </div>

                    </div>
                    <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 30, backgroundColor: 'white', marginTop: 10, borderRadius: 10, flexDirection: 'column', paddingTop: 30 }}>
                        <BarChart width={650} height={350} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Hoàn thành" fill="#8884d8" />
                            <Bar dataKey="Quá hạn" fill="red" />
                            <Bar dataKey="Đang làm" fill="#82ca9d" />
                        </BarChart>
                        <p style={{ fontSize: 24, fontWeight: 'bold' }}>Top 3 nhân viên</p>
                    </div>
                </div>


            </div >
        )
    }
}

export default withRouter(HomeScreen);

const styles = {
    container: {
        height: '100%',
        width: '100%',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#f0f2f5'
    },
    container2: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 20
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        width: '100%'
    },
    topview: {
        backgroundColor: '#f0f2f5',
        height: 'fit-content',
        marginBottom: 30,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    icon: {
        height: 60,
        width: 60,
        marginRight: 20,
    },

}
