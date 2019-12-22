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
import thuoc from '../../resource/thuoc.json'
const { Option } = Select;




class FindProductScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            type: 'name',
            count: 2,
            data: thuoc
        }
    }

    render() {
        const columns = [
            {
                title: <p style={styles.title}>Mã số thuốc</p>,
                dataIndex: 'maThuoc',
                key: 'maThuoc',
            },
            {
                title: <p style={styles.title}>Tên thuốc</p>,
                dataIndex: 'tenThuoc',
                key: 'tenThuoc',
            },
            {
                title: <p style={styles.title}>Loại</p>,
                dataIndex: 'phanLoai',
                key: 'phanLoai'

            },
            {
                title: <p style={styles.title}>Số đăng ký</p>,
                dataIndex: 'soDangKy',
                key: 'soDangKy'
            },
            {
                title: <p style={styles.title}>Số lượng</p>,
                dataIndex: 'gia',
                key: 'gia'
            },
        ]
        return (
            <div style={styles.container}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50 }}>
                    <text style={{ fontSize: 20, fontWeight: 'bold' }}> Tìm kiếm theo : </text>
                    <Select defaultValue={this.state.type} style={{ width: 150, marginLeft: 20 }} size={'large'} >
                        <Option value={'name'}>Tên</Option>
                        <Option value={'id'}>Mã thuốc</Option>
                        <Option value={'businessiId'}> Số đăng ký</Option>
                    </Select>
                </div>
                <div style={{ height: 10, width: '100%' }}></div>
                <Input
                    style={{ width: 500, height: 50 }}
                    value={this.state.keyword}
                    placeholder="Nhập thông tin tìm kiếm"
                    onChange={(e) => this.setState({ keyword: e.target.value })} />
                <Button type="primary" style={{ height: 50, marginLeft: 20, width: 150 }}>
                    Tìm kiếm
                    </Button>
                {/* <Button type="primary" style={{ height: 50, marginLeft: 20, width: 200 }}>
                    Hiển thị tất cả
                </Button> */}
                <p style={{ fontSize: 24, fontWeight: 'bold', marginTop: 30 }}> Đã tìm được {this.state.data.length} sản phẩm  </p>
                <Table columns={columns} dataSource={this.state.data} />
            </div>
        )
    }
}

export default withRouter(FindProductScreen);

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
