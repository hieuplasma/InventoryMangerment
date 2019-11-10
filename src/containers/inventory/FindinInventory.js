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
import inventory from '../../resource/inventory.json'
import inventory2 from '../../resource/inventory2.json'
const { Option } = Select;




class FindinInventory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            type: 'name',
            count: 2,
            data: inventory2[0]
        }
    }

    render() {
        const columns = [
            {
                title: <p style={styles.title}>Số kho</p>,
                dataIndex: 'soKho',
                key: 'soKho',
            },
            {
                title: <p style={styles.title}>Tầng</p>,
                dataIndex: 'phong',
                key: 'phong',
            },
            {
                title: <p style={styles.title}>Giá</p>,
                dataIndex: 'gia',
                key: 'gia'
            },
            {
                title: <p style={styles.title}> Phòng</p>,
                dataIndex: 'tang',
                key: 'tang'
            },
            {
                title: <p style={styles.title}>Số lượng</p>,
                dataIndex: 'soLuong',
                key: 'soLuong'
            },
        ]
        return (
            <div style={styles.container}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50 }}>
                    <text style={{ fontSize: 20, fontWeight: 'bold' }}> Loại sản phẩm tìm kiếm : </text>
                    <Select defaultValue={this.state.type} style={{ width: 150, marginLeft: 20 }} size={'large'} >
                        <Option value={'name'}>Thuốc</Option>
                        <Option value={'id'}>Nguyên liệu</Option>
                        <Option value={'businessiId'}> Bao bì</Option>
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
                <p style={{ fontSize: 24, fontWeight: 'bold', marginTop: 30 }}>Kết quả tìm kiếm của thuốc {this.state.data.tenThuoc} (Mã thuốc: {this.state.data.maThuoc} ) </p>
                <Table columns={columns} dataSource={this.state.data.position} />
            </div>
        )
    }
}

export default withRouter(FindinInventory);

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
    }
}
