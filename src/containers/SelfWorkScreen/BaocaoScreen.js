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




class BaocaoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: listwork[this.props.location.state.id - 1],
            man: listwork[this.props.location.state.id - 1].nhanVien[0].name
        }
    }

    _submitForm = () => {
        confirmAlert({
            title: `Update trạng thái công việc`,
            message: 'Bạn có chắc chắn không?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => message.success("Đã update thành công")
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    };

    render() {
        const { data } = this.state

        const menu = (
            <Menu>

                {
                    data.nhanVien.map(item => (
                        <Menu.Item onClick={() => this.setState({ man: item.name })}>
                            {item.name}
                        </Menu.Item>
                    ))
                }
            </Menu>
        );

        const column = [
            {
                title: <p style={styles.title}>Mã sản phẩm</p>,
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: <p style={styles.title}>Số lượng đề ra </p>,
                dataIndex: 'count1',
                key: 'count1',
            },
            {
                title: <p style={styles.title}>Số lượng thực tế </p>,
                dataIndex: 'count2',
                key: 'count2',
                render: (text, record) => {
                    return (
                        <Input />
                    )
                }
            },
            {
                title: <p style={styles.title}>Ghi chú</p>,
                dataIndex: 'note',
                key: 'note',
                render: (text, record) => {
                    return (
                        <TextArea style={{width:400}} />
                    )
                }
            }
        ]

        const thuoc = [
            {
                "id": "VN-22302-1",
                "count1": 200,
                "count2": 200,
                "note": "hihihaha"
            },
            {
                "id": "VN-22302-2",
                "count1": 300,
                "count2": 300,
                "note": "huhuhichic"
            },
            {
                "id": "VN-22302-3",
                "count1": 400,
                "count2": 250,
                "note": "abcxyz"
            },
            {
                "id": "VN-22302-4",
                "count1": 500,
                "count2": 450,
                "note": "S.MNPQ"
            },
            {
                "id": "VN-22302-5",
                "count1": 600,
                "count2": 120,
                "note": "kimetsu no yaiba"
            }
        ]
        return (

            <div style={styles.container}>
                <p style={styles.name}>{data.work}</p>
                <div style={styles.box}>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Tên công việc </p>
                        <Input style={{ marginLeft: 5 }} size="large" disabled value={data.work} />
                    </div>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Thời hạn</p>
                        <Input style={{ marginLeft: 5 }} size="large" disabled value={`${data.timeinit} - ${data.timeexp}`} />
                    </div>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Tổng KPI</p>
                        <Input style={{ marginLeft: 5 }} size="large" disabled value={'xxx'} />
                    </div>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Nhân viên</p>
                        {/* <Input style={{ marginLeft: 5 }} size="large" disabled value={`${data.nhanVien[0].name}, ${data.nhanVien[1].name}, ${data.nhanVien[2].name}...`} /> */}
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Input style={{ marginLeft: 5 }} size="large" disabled value={this.state.man} />
                        </Dropdown>
                    </div>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Progress</p>
                        <Progress percent={data.progress} status="active" />
                    </div>

                    <div style={styles.item2}>
                        <p style={styles.feild}>DS sản phẩm</p>
                        {/* <TextArea size="large" multiple={true} style={{ height: 270, marginLeft: -5 }} disabled /> */}
                        <Table columns={column} dataSource={thuoc} pagination={false} bordered={true} />
                    </div>
                    <div style={{
                        width: '100%',
                        //   backgroundColor :'blue',
                        height: 'fit-content',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingRight: 20
                    }}>
                        <p style={styles.feild}>Đánh giá</p>
                        <div style={{ width: '100%', flexWrap: 'wrap', display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                            <Checkbox style={{ width: '100%', margin: 10, marginLeft: 0 }}>
                                Đạt
                        </Checkbox >
                            <Checkbox style={{ width: '100%', margin: 10, marginLeft: 0 }} >
                                Không đạt
                        </Checkbox>
                        </div>

                    </div>
                </div>

                <div style={{ width: '100%', height: 50, display: 'flex', flexDirection: 'row-reverse', marginTop: 30 }}>
                    <Button type="primary" style={{ height: 50, width: 120 }} onClick={() => this._submitForm()}>
                        <span style={{ fontSize: 18 }}>
                            Lưu thay đổi
                        </span>
                    </Button>
                    <Button type="primary" style={{ height: 50, width: 120, marginRight: 20 }} onClick={() => this._submitForm()}>
                        <span style={{ fontSize: 18 }}>
                            Nộp báo cáo
                        </span>
                    </Button>
                </div>
            </div >
        )
    }
}

export default withRouter(BaocaoScreen);

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
