import React, { Component } from 'react';
import { Button, Layout, Menu, Icon, Breadcrumb, Row, Col, Input, message, Checkbox } from 'antd';
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




class DetailWorkScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: listwork[this.props.location.state.id - 1],
            man: listwork[this.props.location.state.id - 1].nhanVien[0].name
        }
    }

    // _submitForm = () => {
    //     confirmAlert({
    //         title: `Giao việc cho ${this.state.data.name}`,
    //         message: 'Bạn có chắc chắn không?',
    //         buttons: [
    //             {
    //                 label: 'Yes',
    //                 onClick: () => message.success("Đã thêm thành công")
    //             },
    //             {
    //                 label: 'No',
    //                 // onClick: () => alert('Click No')
    //             }
    //         ]
    //     });
    // };

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
                        <p style={styles.feild}>Người giao</p>
                        <Input style={{ marginLeft: 5 }} size="large" disabled value={data.nguoiGiao} />
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
                        <p style={styles.feild}>Mô tả</p>
                        <TextArea size="large" multiple={true} style={{ height: 270, marginLeft: -5 }} disabled />
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
                        <p style={styles.feild}>Subtask</p>
                        <div style={{ width: '100%', flexWrap: 'wrap', display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                            <Checkbox style={{ width: '100%', margin: 10, marginLeft: 0 }} checked={true}>
                                Buoc 1: abc
                        </Checkbox >
                            <Checkbox style={{ width: '100%', margin: 10, marginLeft: 0 }} checked={true}>
                                Buoc 2: abc
                        </Checkbox>
                            <Checkbox style={{ width: '100%', margin: 10, marginLeft: 0 }} checked={false}>
                                Buoc 3: abc
                        </Checkbox>
                        </div>

                    </div>
                </div>

                {/* <div style={{ width: '100%', height: 50, display: 'flex', flexDirection: 'row-reverse', marginTop: 30 }}>
                    <Button type="primary" style={{ height: 50, width: 120 }} onClick={() => this._submitForm()}>
                        <span style={{ fontSize: 18 }}>
                            Thêm
                        </span>
                    </Button>
                </div> */}
            </div >
        )
    }
}

export default withRouter(DetailWorkScreen);

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
        height: 270,
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
