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




class AddProductScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {

        return (

            <div style={styles.container}>
                AddProductScreen
            </div>
            // </RemoveScroll>  
        )
    }
}

export default withRouter(AddProductScreen);

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
    }
}
