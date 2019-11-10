import React, { Component } from 'react';
import { Button, Layout, Menu, Icon, Breadcrumb, Row, Col, Input, Table } from 'antd';
import {
    BrowserRouter,
    Route,
    Link,
    Router,
    Switch,
    withRouter
} from 'react-router-dom'


import { Select } from 'antd';
import worker from '../../resource/worker.json'

const { Option } = Select;




class ReportingScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {
        const column = [
            {
                title: <p style={styles.title}>Tên nhân viên</p>,
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: <p style={styles.title}>Trạng thái</p>,
                dataIndex: 'state',
                key: 'state',
                render: (text, record) => {
                    let tmp = record.state
                    if (tmp == 1) {
                        return (
                            <span style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ width: 16, height: 16, marginTop: 3, borderRadius: 8, backgroundColor: 'green' }} />
                                <p style={{ marginLeft: 10 }}>Rảnh</p>
                            </span>
                        )
                    } else {
                        return (
                            <span style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ width: 16, height: 16, marginTop: 3, borderRadius: 8, backgroundColor: 'orange' }} />
                                <p style={{ marginLeft: 10 }}>Đang làm</p>
                            </span>
                        )
                    }
                }
            },
            {
                title: <p style={styles.title}>Quản lý</p>,
                dataIndex: 'manager',
                key: 'manager',
                render: (text, record) => {
                    return (
                        <span style={{ display: 'flex', flexDirection: 'row' }}>
                            <Button style={styles.button}
                                onClick={() => this.props.history.push(`/work/assign/${record.name}`, { record: record })}>
                                Giao việc
                                 </Button>
                            <Button style={styles.button}>Đánh giá</Button>
                            <Button style={styles.button}
                                onClick={() => this.props.history.push(`/work/manager/${record.name}`, { record: record })}>
                                Theo dõi
                                </Button>
                        </span>
                    )
                }
            },
        ]

        return (

            <div style={styles.container}>
                <Table columns={column} dataSource={worker} />
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
        overflow: 'auto'
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
    },
    button: {
        width: 100,
        marginRight: 20
    }
}
