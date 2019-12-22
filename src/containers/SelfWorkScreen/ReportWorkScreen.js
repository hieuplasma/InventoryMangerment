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
const { Option } = Select;




class ReportWorkScreen extends Component {

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
            // {
            //     title: <p style={styles.title}>Người thực hiện</p>,
            //     dataIndex: 'nhanVien',
            //     key: 'nhanVien',
            //     render: (text, record) => {
            //         return (
            //             <div>
            //                 <Avatar icon="user" style={{ margin: 5 }} />
            //                 <Avatar icon="user" style={{ margin: 5 }} />
            //                 <Avatar icon="user" style={{ margin: 5 }} />
            //                 <text style={{ fontSize: 30 }}>...</text>
            //             </div>

            //         )
            //     }
            // },
            {
                title: <p style={styles.title}>Tiến độ</p>,
                dataIndex: 'progress',
                key: 'progress',
                render: (text, record) => {
                    return (
                        <Progress percent={record.progress} status="active" />
                    )
                }
            },
            {
                title: <p style={styles.title}>Chi tiết</p>,
                dataIndex: 'detail',
                key: 'detail',
                render: (text, record) => {
                    return (
                        <Button style={{ width: 100,
                            marginRight: 20, backgroundColor:'#1bb341s'}} type="primary"
                            onClick={() => this.props.history.replace(`/report-work/${record.work}`, { id: record.id })}>Chi tiết</Button>
                    )
                }
            },
            {
                title: <p style={styles.title}>Báo cáo</p>,
                dataIndex: 'detail',
                key: 'detail',
                render: (text, record) => {
                    return (
                        <Button style={styles.button} type="primary"
                            onClick={() => this.props.history.push(`/bao-cao/${record.work}`, { id: record.id })}>Báo cáo</Button>
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

export default withRouter(ReportWorkScreen);

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
