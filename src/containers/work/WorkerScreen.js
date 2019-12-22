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

const { Option } = Select;




class WorkerScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.location.state.record
        }
    }

    render() {
        const work = this.state.data.working
        const column = [
            {
                title: <p style={styles.title}>Tên công việc</p>,
                dataIndex: 'work',
                key: 'work',
            },
            {
                title: <p style={styles.title}>Xem chi tiết</p>,
                dataIndex: 'detail',
                key: 'detail',
                render: (text, record) => {
                    return (
                        <Button style={styles.button} type="primary"
                        onClick= {()=> this.props.history.push(`/listwork/${record.work}`, {id: record.id})}>Chi tiết</Button>
                    )
                }
            },
            {
                title: <p style={styles.title}>Đánh giá</p>,
                dataIndex: 'evaluate',
                key: 'evaluate',
                render: (text, record) => {
                    return (
                        <div >
                            <Select defaultValue={'Tốt'} style={{ width: 150 }} size={'default'} >
                                <Option value={'good'}>Tốt</Option>
                                <Option value={'bad'}>Không tốt</Option>
                            </Select>
                        </div>
                    )
                }
            },
        ]

        return (

            <div style={styles.container}>
                <p style={styles.name}>{this.state.data.name}</p>
                <Table columns={column} dataSource={work} />
            </div>
        )
    }
}

export default withRouter(WorkerScreen);

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
