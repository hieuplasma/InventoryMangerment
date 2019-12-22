import React, { Component } from 'react';
import { Button, Layout, Menu, Icon, Breadcrumb, Row, Col, Input, Table, Avatar, Progress } from 'antd';
import {
    BrowserRouter,
    Route,
    Link,
    Router,
    Switch,
    withRouter
} from 'react-router-dom'


import { Select } from 'antd';


import listwork from '../../resource/listwork.json'
import Srcicon from '../../resource/icons/Srcicon.js';
const { Option } = Select;




class ListWorkSceen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: listwork
        }
    }

    render() {
        const column = [
            {
                title: <p style={styles.title}>Tên công việc</p>,
                dataIndex: 'work',
                key: 'work',
            },
            {
                title: <p style={styles.title}>Người thực hiện</p>,
                dataIndex: 'nhanVien',
                key: 'nhanVien',
                render: (text, record) => {
                    return (
                        <div>
                            {/* <Avatar icon="user" style={{ margin: 5 }} />
                            <Avatar icon="user" style={{ margin: 5 }} />
                            <Avatar icon="user" style={{ margin: 5 }} /> */}
                            <img src={Srcicon.avt[record.id - 1]} style={{ width: 36, height: 36, borderRadius: 18 }} />
                            <img src={Srcicon.avt[record.id]} style={{ width: 36, height: 36, borderRadius: 18 }} />
                            <img src={Srcicon.avt[record.id + 1]} style={{ width: 36, height: 36, borderRadius: 18 }} />
                            <text style={{ fontSize: 30 }}>...</text>
                        </div>

                    )
                }
            },
            {
                title: <p style={styles.title}>Progress</p>,
                dataIndex: 'progress',
                key: 'progress',
                render: (text, record) => {
                    return (
                        <Progress percent={record.progress} status="active" />
                    )
                }
            },
            {
                title: <p style={styles.title}>Xem chi tiết</p>,
                dataIndex: 'detail',
                key: 'detail',
                render: (text, record) => {
                    return (
                        <Button style={styles.button} type="primary"
                            onClick={() => this.props.history.push(`/report-work/${record.work}`, { id: record.id })}>Chi tiết</Button>
                    )
                }
            },
        ]

        return (

            <div style={styles.container}>
                <p style={styles.name}>Danh sách các công việc</p>
                <Table columns={column} dataSource={this.state.data} />
            </div>
        )
    }
}

export default withRouter(ListWorkSceen);

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
    },
    button: {
        width: 100,
        marginRight: 20
    },
    button: {
        width: 100,
        marginRight: 20
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        width: '100%'
    },
}
