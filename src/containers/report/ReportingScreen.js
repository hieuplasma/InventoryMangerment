import React, { Component } from 'react';
import { Button, Layout, Menu, Icon, Breadcrumb, Row, Col, Input, Table, message } from 'antd';
import {
    BrowserRouter,
    Route,
    Link,
    Router,
    Switch,
    withRouter
} from 'react-router-dom'


import { Select } from 'antd';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import KPI from '../../resource/KPI.json'
import xuat_kho from '../../resource/xuat_kho.json'


const { Option } = Select;




class ReportingScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            typereport: 0
        }
    }

    _submitForm = () => {
        confirmAlert({
            title: 'Xuất file báo cáo?',
            message: 'Bạn có chắc chắn không?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => message.success("Đã xuất file thành công")
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    };

    _submitForm1 = () => {
        confirmAlert({
            title: 'Nộp báo cáo?',
            message: 'Bạn có chắc chắn không?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => message.success("Đã nộp báo cáo thành công")
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    };



    render() {

        const columns = [
            {
                title: <p style={styles.title}>Sản phẩm</p>,
                dataIndex: 'product',
                key: 'product',
            },
            {
                title: <p style={styles.title}> Số lượng</p>,
                dataIndex: 'count',
                key: 'count',
            },
            {
                title: <p style={styles.title}>Người thực hiện</p>,
                dataIndex: 'person',
                key: 'person',
            },
            {
                title: <p style={styles.title}>Thời gian</p>,
                dataIndex: 'time',
                key: 'time',
            },
        ]

        const columns2 = [
            {
                title: <p style={styles.title}>Tên công việc </p>,
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: <p style={styles.title}>Tình trạng</p>,
                dataIndex: 'state',
                key: 'state',
            },
            {
                title: <p style={styles.title}>KPI dự kiến</p>,
                dataIndex: 'kpiguest',
                key: 'kpiguest',
            },
            {
                title: <p style={styles.title}>KPI đạt được</p>,
                dataIndex: 'kpireal',
                key: 'kpireal',
            },
            {
                title: <p style={styles.title}>Chi tiết</p>,
                dataIndex: 'detail',
                key: 'detail',
                render: (text, record) => (
                    <Button onClick={() => this.props.history.replace(`/report-work/${record.name}`, { id: record.id })} style={{ backgroundColor: '#f5428a' }}  >
                        <span style={{ color: 'white' }}>
                            Chi tiết
                            </span>
                    </Button>
                )
            },
        ]

        return (
            <div style={styles.container}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50, width: '100%' }}>
                    <text style={{ fontSize: 20, fontWeight: 'bold' }}> Báo cáo theo: </text>
                    <Select defaultValue={this.state.type} style={{ width: 170, marginLeft: 20 }} size={'large'} onSelect={(e) => this.setState({ type: e }, this.forceUpdate())}>
                        <Option value={0}></Option>
                        <Option value={1}>Quý gần nhất</Option>
                        <Option value={2}>Tháng gần nhất</Option>
                        <Option value={3}> Thời gian cụ thể</Option>
                    </Select>
                    {
                        (this.state.type == 3) ?
                            <text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}> Chọn khoảng thời gian: </text>
                            : <div />
                    }
                    {
                        (this.state.type == 3) ?
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50 }}>
                                <Input type={"date"} size="large" width={40} style={{ marginLeft: 10 }} />
                                <text style={{ fontSize: 20, fontWeight: 'bold' }} style={{ marginLeft: 10 }}> đến </text>
                                <Input type={"date"} size="large" width={40} style={{ marginLeft: 10 }} />
                            </div>
                            : <div />
                    }
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50, width: '100%' }}>
                    <text style={{ fontSize: 20, fontWeight: 'bold' }}> Chọn loại báo cáo: </text>
                    <Select defaultValue={this.state.typereport} style={{ width: 170, marginLeft: 20 }} size={'large'} onSelect={(e) => this.setState({ typereport: e }, this.forceUpdate())}>
                        <Option value={0}></Option>
                        <Option value={1}>Nhập kho</Option>
                        <Option value={2}>Xuất kho</Option>
                        <Option value={3}>Thống kê KPI</Option>
                    </Select>
                </div>

                {
                    this.state.typereport == 1 ?
                        <Table columns={columns} dataSource={xuat_kho} />
                        : <div />
                }
                {
                    this.state.typereport == 2 ?
                        <Table columns={columns} dataSource={xuat_kho} />
                        : <div />
                }
                {
                    this.state.typereport == 3 ?
                        <Table columns={columns2} dataSource={KPI} />
                        : <div />
                }
                {
                    !(this.state.typereport == 0) ?

                        <div style={{ width: '100%', height: 50, display: 'flex', flexDirection: 'row-reverse', marginTop: 30, }}>
                            <Button type="primary" style={{ height: 50, width: 120, }} onClick={() => {
                                this._submitForm1()
                            }}>
                                <span style={{ fontSize: 18 }}>
                                    Báo cáo
                    </span>
                            </Button>
                            <Button type="primary" style={{ height: 50, width: 120, backgroundColor: '#1bb341', marginRight: 20 }} onClick={() => {
                                this._submitForm()
                            }}>
                                <span style={{ fontSize: 18 }}>
                                    Xuất file
                    </span>
                            </Button>

                        </div>
                        : <div />
                }
            </div>
        )
    }
}

export default withRouter(ReportingScreen);

const styles = {
    container: {
        height: '100%',
        width: '100%',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        //overflow: 'auto'
    },
    container2: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        //fontWeight: 'bold',
        fontSize: 18
    }
}
