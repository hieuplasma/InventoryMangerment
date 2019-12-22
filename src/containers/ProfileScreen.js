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
import Srcicon from '../resource/icons/Srcicon';

const { Option } = Select;




class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {


        return (

            <div style={styles.container}>
               
                   
                        <img src={Srcicon.avt[1]} style={{ width: 150, height: 150, borderRadius: 75 }} />
                   
                    {/* <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row' }}>
                            <p style={{ fontSize: 18, color: '#cccccc', width: 150 }}>Customer ID</p>
                            <p style={{ borderBottomStyle: 'solid', borderBottomColor: '#cccccc', borderBottomWidth: 1, fontSize: 18, marginLeft: 40, width: '100%', marginRight: 20 }}>HCI_13_20161574</p>
                        </div> */}
                    <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row' }}>
                        <p style={{ fontSize: 18, color: '#cccccc', width: 150 }}>Tên tài khoản </p>
                        <p style={{ borderBottomStyle: 'solid', borderBottomColor: '#cccccc', borderBottomWidth: 1, fontSize: 18, marginLeft: 40 - 26.05, width: 250, marginRight: 20 }}>Trần Minh Hiếu</p>
                    </div>
                    <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row' }}>
                        <p style={{ fontSize: 18, color: '#cccccc', width: 150 }}>KPI cao nhất</p>
                        <p style={{ borderBottomStyle: 'solid', borderBottomColor: '#cccccc', borderBottomWidth: 1, fontSize: 18, marginLeft: 40 - 26.05, width: 250, marginRight: 20 }}>34</p>
                    </div>
                    <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row' }}>
                        <p style={{ fontSize: 18, color: '#cccccc', width: 150 }}>Tổng số KPI</p>
                        <p style={{ borderBottomStyle: 'solid', borderBottomColor: '#cccccc', borderBottomWidth: 1, fontSize: 18, marginLeft: 40 - 26.05, width: 250, marginRight: 20 }}>200</p>
                    </div>
                    <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row' }}>
                        <p style={{ fontSize: 18, color: '#cccccc', width: 150 }}>Hiệu suất cao nhất</p>
                        <p style={{ borderBottomStyle: 'solid', borderBottomColor: '#cccccc', borderBottomWidth: 1, fontSize: 18, marginLeft: 40 - 26.05, width: 250, marginRight: 20 }}>90%</p>
                    </div>
                    <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row' }}>
                        <p style={{ fontSize: 18, color: '#cccccc', width: 150 }}>Địa chỉ</p>
                        <p style={{ borderBottomStyle: 'solid', borderBottomColor: '#cccccc', borderBottomWidth: 1, fontSize: 18, marginLeft: 40 - 26.05, width: 250, marginRight: 20 }}>Số 1 Đường Hùng Vương</p>
                    </div>
                    <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row' }}>
                        <p style={{ fontSize: 18, color: '#cccccc', width: 150 }}>Số điện thoạil</p>
                        <p style={{ borderBottomStyle: 'solid', borderBottomColor: '#cccccc', borderBottomWidth: 1, fontSize: 18, marginLeft: 40 - 26.05, width: 250, marginRight: 20 }}>0358272555</p>
                    </div>
                    <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row' }}>
                        <p style={{ fontSize: 18, color: '#cccccc', width: 150 }}>Email</p>
                        <a style={{ borderBottomStyle: 'solid', borderBottomColor: '#cccccc', borderBottomWidth: 1, fontSize: 18, marginLeft: 40 - 26.05, width: 250, marginRight: 20 }}>hieutm9x@gmail.com</a>
                    </div>


           
            </div>
        )
    }
}

export default withRouter(ProfileScreen);

const styles = {
    container: {
        height: '100%',
        width: '100%',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //overflow: 'auto',
        padding: 30,
        display: 'flex',
        flexDirection: 'column'

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
        fontSize: 22,
        margin: 10
    },
    button: {
        width: 100,
        marginRight: 20
    }
}
