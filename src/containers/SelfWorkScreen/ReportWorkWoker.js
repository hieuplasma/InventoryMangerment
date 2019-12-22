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


import wokerwork from '../../resource/wokerwork.json'
const { Option } = Select;




class ReportWorkWoker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: wokerwork
        }
    }

    render() {
        const column = [
            {
                title: <p style={styles.title}>Tên công việc</p>,
                dataIndex: 'name',
                key: 'name',
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
                dataIndex: 'isComplete',
                key: 'isComplete',
                render: (text, record) => {
                    return (
                        <div>
                            {
                                record.isComplete ?
                                    <span style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ width: 16, height: 16, marginTop: 3, borderRadius: 8, backgroundColor: 'green' }} />
                                        <p style={{ marginLeft: 10 }}>Đã hoàn thành</p>
                                    </span>
                                    :
                                    <span style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ width: 16, height: 16, marginTop: 3, borderRadius: 8, backgroundColor: 'orange' }} />
                                        <p style={{ marginLeft: 10 }}>Chưa hoàn thành</p>
                                    </span>
                            }
                        </div>
                    )
                }
            },
            {
                title: <p style={styles.title}>Chi tiết</p>,
                dataIndex: 'detail',
                key: 'detail',
                render: (text, record) => {
                    return (
                        <Button style={{
                            width: 100,
                            marginRight: 20, backgroundColor: '#1bb341s'
                        }} type="primary"
                            onClick={() => this.props.history.replace(`/report-work/${record.name}`, { data: record })}>Chi tiết</Button>
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
                        onClick={() => this.props.history.replace(`/bao-cao/${record.name}`, { data: record })}
                        >Báo cáo</Button>
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

export default withRouter(ReportWorkWoker);

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
