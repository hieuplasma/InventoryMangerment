import React, { Component } from 'react';
import { Button, Layout, Menu, Icon, Breadcrumb, Row, Col, Input, message, Checkbox, Table } from 'antd';
import {
    BrowserRouter,
    Route,
    Link,
    Router,
    Switch,
    withRouter
} from 'react-router-dom'


import { Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { Progress, Dropdown } from 'antd';

import listwork from '../../resource/listwork.json'

const { Option } = Select;




class ReportOFWorker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.location.state.data,
            edit: true
        }
    }

    _submitForm = () => {
        confirmAlert({
            title: `Báo cáo công việc`,
            message: 'Bạn có chắc chắn không?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        this.setState({ edit: true }, () => message.success("Đã báo cáo thành công"))
                    }
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    };

    _chuyenPage() {
        switch (this.state.data.name) {
            case "Nhập kho":
                this.props.history.replace('/input-inventory')
                break;
            case "Xuất kho":
                this.props.history.replace('/out-inventory')
                break;
            case "Kiểm kê kho":

                break;

            default:
                break;
        }
    }

    render() {
        const { data } = this.state

        const column = [
            {
                title: <p style={styles.title}>Mã sản phẩm</p>,
                dataIndex: 'maSP',
                key: 'maSP',
            },
            {
                title: <p style={styles.title}>Số lượng đề ra</p>,
                dataIndex: 'soluong',
                key: 'soluong',
            },
            {
                title: <p style={styles.title}>Số lượng làm</p>,
                dataIndex: 'soLuongLam',
                key: 'soLuongLam',
                render: (text, record) => {
                    return (
                        <Input defaultValue={record.soLuongLam} type="number" />
                    )
                }
            },
            {
                title: <p style={styles.title}>Ghi chú</p>,
                dataIndex: 'note',
                key: 'note',
                render: (text, record) => {
                    return (
                        <TextArea />
                    )
                }
            }
        ]

        return (

            <div style={styles.container}>
                <p style={styles.name}>{data.name}</p>
                <div style={styles.box}>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Tên công việc </p>
                        <Input style={{ marginLeft: 5 }} size="large" disabled value={data.name} />
                    </div>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Người giao</p>
                        <Input style={{ marginLeft: 5 }} size="large" disabled value={`${data.from}`} />
                    </div>
                    <div style={styles.item1}>
                        <p style={styles.feild}>KPI tổng</p>
                        <Input style={{ marginLeft: 5 }} size="large" disabled value={data.kpi} />
                    </div>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Trạng thái</p>
                        {
                            data.isComplete ?
                                <Input style={{ marginLeft: 5 }} size="large" disabled value={"Đã hoàn thành "} />
                                : <Input style={{ marginLeft: 5 }} size="large" disabled value={"Chưa hoàn thành"} />
                        }
                        {/* <Input style={{ marginLeft: 5 }} size="large" disabled value={data.kpi} /> */}
                        {/* <Dropdown overlay={menu} placement="bottomLeft">
                            <Input style={{ marginLeft: 5 }} size="large" disabled value={this.state.man} />
                        </Dropdown> */}
                    </div>
                    {/* <div style={styles.item1}>
                        <p style={styles.feild}>Progress</p>
                        <Progress percent={data.progress} status="active" />
                    </div> */}

                    <div style={styles.item2}>
                        <p style={styles.feild}>Nội dung</p>
                        {/* <TextArea size="large" multiple={true} style={{ height: 270, marginLeft: -5 }} disabled /> */}
                        <Table columns={column} dataSource={[data.content]} pagination={false} bordered={true} />
                    </div>
                    {/* <div style={{
                        width: '100%',
                        //   backgroundColor :'blue',
                        height: 'fit-content',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingRight: 20
                    }}>
                        <p style={styles.feild}>Subtask</p>
                        <div style={{ width: '100%', flexWrap: 'wrap', display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                            <Checkbox style={{ width: '100%', margin: 10, marginLeft: 0 }}>
                                Buoc 1: abc
                        </Checkbox >
                            <Checkbox style={{ width: '100%', margin: 10, marginLeft: 0 }} >
                                Buoc 2: abc
                        </Checkbox>
                            <Checkbox style={{ width: '100%', margin: 10, marginLeft: 0 }} >
                                Buoc 3: abc
                        </Checkbox>
                        </div>

                    </div> */}
                </div>

                <div style={{ width: '100%', height: 50, display: 'flex', flexDirection: 'row-reverse', marginTop: 30 }}>

                    <Button type="primary" style={{ height: 50, width: 200 }} onClick={() => this._submitForm()}>
                        <span style={{ fontSize: 18 }}>
                            Báo cáo
                </span>
                    </Button>

                </div>
            </div >
        )
    }
}

export default withRouter(ReportOFWorker);

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
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        width: '100%'
    },
    box: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        height: 'fit-content',
        borderStyle: 'solid',
        padding: 30,
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
    },
    item1: {
        width: '50%',
        //   backgroundColor :'blue',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20
    },
    item2: {
        width: '100%',
        //   backgroundColor :'blue',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        paddingRight: 20,
        marginTop: 20
    },
    feild: {
        width: 140,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 16,
    },
}
