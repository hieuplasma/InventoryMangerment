import React, { Component } from 'react';
import { Button, Layout, Menu, Icon, Breadcrumb, Row, Col, Input } from 'antd';
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




class DetailProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.location.state.record
        }
    }



    render() {
        const { data } = this.state
        console.log(data)
        return (
            <div style={styles.container}>
                <p style={{ fontSize: 24, fontWeight: 'bold' }}>  Thông tin sản phẩm </p>
                <div style={styles.box}>
                    <p style={styles.info}>Tên thuốc: {data.tenThuoc}</p>
                    <p style={styles.info}>Số đăng ký: {data.soDangKy}</p>
                    <p style={styles.info}>Phân loại: {data.phanLoai}</p>
                    <p style={styles.info}>Quy cách đóng gói: {data.quyCachDongGoi}</p>
                    <p style={styles.info}>Mã thuốc: {data.maThuoc}</p>
                    <p style={styles.info}>Tiêu chuẩn: {data.tieuChuan}</p>
                    <p style={styles.info}>Đơn vị tính: {data.donViTinh}</p>
                    <p style={styles.info}>Giá: {data.gia}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 20 }}>
                    <Button size="large" style={{ width: 150, height: 50 }}>
                        Tìm vị trí
                    </Button>
                    <Button size="large" style={{ marginRight: 30, width: 150, height: 50 }}>
                        Sửa đổi
                    </Button>
                </div>
            </div>
            // </RemoveScroll>  
        )
    }
}

export default withRouter(DetailProduct);

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
    info: {
        fontSize: 18,
        width: '50%'
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
        flexDirection: 'row'
    }
}
