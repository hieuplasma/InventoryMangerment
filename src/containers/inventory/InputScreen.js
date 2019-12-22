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

import nhapKho from '../../resource/nhapKho.json'

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Srcicon from '../../resource/icons/Srcicon.js';
const { Option } = Select;




class InputScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id": 0,
                    "maThuoc": "",
                    "tenThuoc": "",
                    "loai": "",
                    "thoiGian": "",
                    "soLuong": "",
                    "soKho": "",
                    "phong": "",
                    "gia": "",
                    "tang": "",
                    "soLo": "",
                    "hsd": ""
                }
            ],
            number: 0
        }
    }

    _submitForm = () => {
        confirmAlert({
            title: 'Thêm danh sánh sản phẩm vào kho',
            message: 'Bạn có chắc chắn không?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => message.success("Đã thêm thành công")
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    };

    async  _addRow() {
        let object = {
            "id": 0,
            "maThuoc": "",
            "tenThuoc": "",
            "loai": "",
            "thoiGian": "",
            "soLuong": "",
            "soKho": "",
            "phong": "",
            "gia": "",
            "tang": "",
            "soLo": "",
            "hsd": ""
        }
        let tmp = this.state.data
        let obj = object

        await this.setState({ number: this.state.number + 1 }, () => obj.id = this.state.number)
        tmp[tmp.length] = obj
        await this.setState({ data: tmp })
    }

    render() {
        const columns = [
            {
                title: <p style={styles.title}>Mã số thuốc</p>,
                dataIndex: 'maThuoc',
                key: 'maThuoc',
                render: (text, record) => {
                    console.log()
                    return (
                        <Input
                            value={record.maThuoc}
                            onChange={(e) => {
                                let data = this.state.data
                                data[data.indexOf(record)].maThuoc = e.target.value
                                this.setState({ data: data })
                            }} />
                    )
                }
            },
            // {
            //     title: <p style={styles.title}>Tên thuốc</p>,
            //     dataIndex: 'tenThuoc',
            //     key: 'tenThuoc',
            //     render: (text, record) => {
            //         return (
            //             <Input />
            //         )
            //     }
            // },
            {
                title: <p style={styles.title}>Loại</p>,
                dataIndex: 'loai',
                key: 'loai',
                render: (text, record) => {
                    return (
                        <Input
                            value={record.loai}
                            onChange={(e) => {
                                let data = this.state.data
                                data[data.indexOf(record)].loai = e.target.value
                                this.setState({ data: data })
                            }} />
                    )
                }

            },
            {
                title: <p style={styles.title}>Số lô    </p>,
                dataIndex: 'soLo',
                key: 'soLo',
                render: (text, record) => {
                    return (
                        <Input
                            value={record.soLo}
                            onChange={(e) => {
                                let data = this.state.data
                                data[data.indexOf(record)].soLo = e.target.value
                                this.setState({ data: data })
                            }} />
                    )
                }

            },
            {
                title: <p style={styles.title}>Hạn sử dụng</p>,
                dataIndex: 'hsd,',
                key: 'hsd',
                render: (text, record) => {
                    return (
                        <Input
                            value={record.hsd}
                            onChange={(e) => {
                                let data = this.state.data
                                data[data.indexOf(record)].hsd = e.target.value
                                this.setState({ data: data })
                            }} />
                    )
                }

            },
            {
                title: <p style={{ fontSize: 18, width: 200 }}>Thời gian nhập</p>,
                dataIndex: 'thoiGian',
                key: 'thoiGian',
                render: (text, record) => {
                    return (
                        <Input type="datetime-local" />
                    )
                }
            },
            {
                title: <p style={styles.title}>Số lượng</p>,
                dataIndex: 'soLuong',
                key: 'soLuong',
                render: (text, record) => {
                    return (
                        <Input
                            value={record.soLuong}
                            onChange={(e) => {
                                let data = this.state.data
                                data[data.indexOf(record)].soLuong = e.target.value
                                this.setState({ data: data })
                            }} />
                    )
                }
            },
            {
                title: <p style={styles.title}>Số kho</p>,
                dataIndex: 'soKho',
                key: 'soKho',
                render: (text, record) => {
                    return (
                        <Input
                            value={record.soKho}
                            onChange={(e) => {
                                let data = this.state.data
                                data[data.indexOf(record)].soKho = e.target.value
                                this.setState({ data: data })
                            }} />
                    )
                }
            },
            {
                title: <p style={styles.title}>Phòng</p>,
                dataIndex: 'phong',
                key: 'phong',
                render: (text, record) => {
                    return (
                        <Input
                            value={record.phong}
                            onChange={(e) => {
                                let data = this.state.data
                                data[data.indexOf(record)].phong = e.target.value
                                this.setState({ data: data })
                            }} />
                    )
                }
            },
            {
                title: <p style={styles.title}>Giá</p>,
                dataIndex: 'gia',
                key: 'gia',
                render: (text, record) => {
                    return (
                        <Input
                            value={record.gia}
                            onChange={(e) => {
                                let data = this.state.data
                                data[data.indexOf(record)].gia = e.target.value
                                this.setState({ data: data })
                            }} />
                    )
                }
            },
            {
                title: <p style={styles.title}>Tầng</p>,
                dataIndex: 'tang',
                key: 'tang',
                render: (text, record) => {
                    return (
                        <Input
                            value={record.tang}
                            onChange={(e) => {
                                let data = this.state.data
                                data[data.indexOf(record)].tang = e.target.value
                                this.setState({ data: data })
                            }} />
                    )
                }
            },
            {
                dataIndex: 'button',
                key: 'button',
                render: (text, record) => {
                    console.log(record.id)
                    return (
                        <div>
                            {
                                this.state.data.length == 1 ?
                                    <img src={Srcicon.remove} style={{ width: 20, height: 20, cursor: 'pointer' }} onClick={() => message.warning("Số hàng không thể dưới 1")} />
                                    : <img src={Srcicon.remove} style={{ width: 20, height: 20, cursor: 'pointer' }} onClick={() => {
                                        let data = this.state.data
                                        data.splice(data.indexOf(record), 1)
                                        this.setState({ data: data })
                                    }} />
                            }

                        </div>

                    )
                }
            },

        ]
        console.log(this.state.data)
        return (
            <div style={styles.container}>
                <p style={styles.name}>Bảng nhập kho</p>
                <Table columns={columns} dataSource={this.state.data} pagination={false} />
                <div style={{ width: '100%', height: 50, display: 'flex', flexDirection: 'row-reverse', marginTop: 30 }}>
                    <Button type="primary" style={{ height: 50, width: 120 }} onClick={() => this._submitForm()}>
                        <span style={{ fontSize: 18 }}>
                            Submit
                        </span>
                    </Button>
                    <Button type="primary" style={{ height: 50, width: 120, marginRight: 20, backgroundColor: '#1bb341' }} onClick={() => this._addRow()}>
                        <span style={{ fontSize: 18 }}>
                            Thêm hàng
                        </span>
                    </Button>
                </div>
            </div>
        )
    }
}

export default withRouter(InputScreen);

const styles = {
    container: {
        height: '100%',
        width: '100%',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        //overflow: 'auto'
    },
    title: {
        //fontWeight: 'bold',
        fontSize: 18
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        width: '100%'
    }
}
