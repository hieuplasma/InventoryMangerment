import React, { Component } from 'react';
import { Button, Layout, Menu, Icon, Breadcrumb, Row, Col, Input, message } from 'antd';
import {
    BrowserRouter,
    Route,
    Link,
    Router,
    Switch,
    withRouter
} from 'react-router-dom'


import { Select } from 'antd';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const { Option } = Select;




class EditPtoductScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'Thuốc'
        }
    }

    _submitForm = () => {
        confirmAlert({
            title: 'Sửa thông tin sản phẩm',
            message: 'Bạn có chắc chắn không?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => message.success("Đã sửa thành công")
                },
                {
                    label: 'No',
                    // onClick: () => alert('Click No')
                }
            ]
        });
    };


    render() {

        return (

            <div style={styles.container}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50 }}>
                    <text style={{ fontSize: 20, fontWeight: 'bold' }}> Loại sản phẩm sửa  : </text>
                    <Select defaultValue={this.state.type} style={{ width: 150, marginLeft: 20 }} size={'large'} >
                        <Option value={'medicine'}>Thuốc</Option>
                        <Option value={'material'}>Nguyên liệu</Option>
                        <Option value={'Packaging'}>Bao bì</Option>
                    </Select>
                </div>

                <div style={styles.box}>
                    <p style={styles.name}>Nhập thông tin thuốc</p>

                    <div style={styles.item1}>
                        <p style={styles.feild}>Tên thuốc</p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>
                    <div style={styles.item2}>
                        <p style={styles.feild}> Mã thuốc</p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>

                    <div style={styles.item1}>
                        <p style={styles.feild}>  Số đăng ký</p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>
                    <div style={styles.item2}>
                        <p style={styles.feild}> Tiêu chuẩn </p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>

                    <div style={styles.item1}>
                        <p style={styles.feild}>  Phân loại </p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>
                    <div style={styles.item2}>
                        <p style={styles.feild}> Đơn vị tính</p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>

                    <div style={styles.item1}>
                        <p style={styles.feild}> Đóng gói</p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>
                    <div style={styles.item2}>
                        <p style={styles.feild}>Giá</p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>
                </div>

                <div style={{ width: '100%', height: 50, display: 'flex', flexDirection: 'row-reverse', marginTop: 30 }}>
                    <Button type="primary" style={{ height: 50, width: 120 }} onClick={() => {
                        this._submitForm()
                    }}>
                        <span style={{ fontSize: 18 }}>
                            Áp dụng
                        </span>
                    </Button>
                </div>
            </div>
            // </RemoveScroll>  
        )
    }
}

export default withRouter(EditPtoductScreen);

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
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        width: '100%'
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
        width: '50%',
        //   backgroundColor :'blue',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    feild: {
        width: 120,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 16,
    },

}
