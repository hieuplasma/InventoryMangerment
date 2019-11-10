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
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;




class AssignScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.location.state.record
        }
    }



    render() {
        return (

            <div style={styles.container}>
                <p style={styles.name}>Giao việc cho: &nbsp;{this.state.data.name}</p>
                <div style={styles.box}>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Tên công việc </p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Thời hạn</p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Người giao</p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>
                    <div style={styles.item1}>
                        <p style={styles.feild}>Đồng đội</p>
                        <Input style={{ marginLeft: 5 }} size="large" />
                    </div>
                    <div style={styles.item2}>
                        <p style={styles.feild}>Mô tả</p>
                        <TextArea size="large" multiple={true} style={{ height: 270, marginLeft: -5 }} />
                    </div>

                </div>

                <div style={{ width: '100%', height: 50, display: 'flex', flexDirection: 'row-reverse', marginTop: 30 }}>
                    <Button type="primary" style={{ height: 50, width: 120 }}>
                        <span style={{ fontSize: 18 }}>
                            Thêm
                        </span>
                    </Button>
                </div>
            </div>
        )
    }
}

export default withRouter(AssignScreen);

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
