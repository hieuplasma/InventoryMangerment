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


const nhanVien = [
    [
        {
            "name": "Le Minh nguyen"
        },
        {
            "name": "Nguyen Quang Thanh"
        },
        {
            "name": "Cao Van Duy"
        },
        {
            "name": "Hong Sok Heang"
        }
    ],
    [
        {
            "name": "Le Minh nguyen"
        },
        {
            "name": "Nguyen Quang Thanh"
        },
        {
            "name": "Cao Van Duy"
        },
        {
            "name": "Hong Sok Heang"
        }
    ],
    [
        {
            "name": "Le Minh nguyen"
        },
        {
            "name": "Nguyen Quang Thanh"
        },
        {
            "name": "Cao Van Duy"
        },
        {
            "name": "Hong Sok Heang"
        }
    ],
    [
        {
            "name": "Le Minh nguyen"
        },
        {
            "name": "Nguyen Quang Thanh"
        },
        {
            "name": "Cao Van Duy"
        },
        {
            "name": "Hong Sok Heang"
        }
    ],
    [
        {
            "name": "Le Minh nguyen"
        },
        {
            "name": "Nguyen Quang Thanh"
        },
        {
            "name": "Cao Van Duy"
        },
        {
            "name": "Hong Sok Heang"
        }
    ]

]

class PhancongScreen extends Component {

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
                title: <p style={styles.title}>Số lượng</p>,
                dataIndex: 'count',
                key: 'count',
            },
            {
                title: <p style={styles.title}>Người thực hiện</p>,
                dataIndex: 'worker',
                key: 'worker',
                render: (text, record, index) => {
                    return (
                        <div >
                            <Dropdown overlay={menu} placement="bottomLeft">
                                <Input style={{ marginLeft: 5 }} size="large" disabled value={this.state.man} width={200} />
                            </Dropdown>
                        </div>
                    )
                }
            },
            {
                title: <p style={styles.title}>KPI</p>,
                dataIndex: 'KPI',
                key: 'KPI',
                render: (text, record) => {
                    return (
                        <Input type="number"/>
                    )
                }
            }
        ]

        const thuoc = [
            {
                "id": "VN-22302-1",
                "count": 200,
                "worker": "Trần Minh Hiếu",
                "KPI": "xxx"
            },
            {
                "id": "VN-22302-2",
                "count": 300,
                "worker": "Nguyễn Quang Thành",
                "KPI": "xxx"
            },
            {
                "id": "VN-22302-3",
                "count": 400,
                "worker": "Lê Minh Nguyễn",
                "KPI": "xxx"
            },
            {
                "id": "VN-22302-4",
                "count": 500,
                "worker": "Cao Văn Duy",
                "KPI": "xxx"
            },
            {
                "id": "VN-22302-5",
                "count": 600,
                "worker": "Hong Sok Heang",
                "KPI": "xxx"
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
                        <Input style={{ marginLeft: 5 }} size="large" value={`${data.timeinit} - ${data.timeexp}`} />
                    </div>
                    <div style={styles.item1}>
                        <p style={styles.feild}>KPI tổng</p>
                        <Input style={{ marginLeft: 5 }} size="large" disabled value={'xxx'} />
                    </div>
                    {/* <div style={styles.item1}>
                        <p style={styles.feild}>Nhân viên</p>
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <Input style={{ marginLeft: 5 }} size="large" disabled value={this.state.man} />
                        </Dropdown>
                    </div> */}
                    <div style={styles.item1}>
                        <p style={styles.feild}>Progress</p>
                        <Progress percent={data.progress} status="active" />
                    </div>

                    <div style={styles.item2}>
                        <p style={styles.feild}>DS sản phẩm</p>
                        {/* <TextArea size="large" multiple={true} style={{ height: 270, marginLeft: -5 }} disabled /> */}
                        <Table columns={column} dataSource={thuoc} pagination={false} bordered={true} />
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
                    <Button type="primary" style={{ height: 50, width: 120 }} onClick={() => this._submitForm()}>
                        <span style={{ fontSize: 18 }}>
                            Xong
                        </span>
                    </Button>
                </div>
            </div >
        )
    }
}

export default withRouter(PhancongScreen);

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
