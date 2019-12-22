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

const { Option } = Select;




class AskandAnswersScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            a1: false,
            a2: false,
            a3: false,
            a4: false,
            a5: false
        }
    }



    render() {


        return (

            <div style={styles.container}>
                <a style={styles.title} onClick={() => this.setState({ a1: !this.state.a1 })}>Làm sao để truy cập công việc của tôi ?   </a>
                {
                    this.state.a1 ?
                        <p style={{ fontSize: 15 }}>Các phím tắt của hệ thống được cung cấp như sau: Ctrl + 1 đến 8: Chọn một tab cụ thể đang mở, số thứ tự đánh từ trái sang phải Ctrl + 9: Chuyển tới tab cuối cùng Ctrl + Tab: Chuyển sang tab tiếp theo, thông thường là tab bên phải. (Ctrl + Page Up cũng hoạt động nhưng không dùng được trong IE). Ctrl + Shift + Tab: Chuyển sang tab trước đó, thông thường là tab bên trái. (Ctrl + Page Down cũng hoạt động nhưng không dùng được trong IE). Ctrl + W, Ctrl + F4: Đóng tab hiện tại. Ctrl + Shift + T: Mở lại tab cuối cùng vừa đóng. Ctrl + T: Mở một tab mới. Ctrl + N: Mở một cửa sổ mới. Alt + F4: Đóng cửa sổ hiện tại. (Làm việc với mọi cửa sổ đang mở, kể cả các ứng dụng).</p>
                        : <p></p>
                }

                <a style={styles.title} onClick={() => this.setState({ a2: !this.state.a2 })}>Làm sao để xem chi tiết công việc ?</a>
                {
                    this.state.a2 ?
                        <p style={{ fontSize: 15 }}>Các phím tắt của hệ thống được cung cấp như sau: Ctrl + 1 đến 8: Chọn một tab cụ thể đang mở, số thứ tự đánh từ trái sang phải Ctrl + 9: Chuyển tới tab cuối cùng Ctrl + Tab: Chuyển sang tab tiếp theo, thông thường là tab bên phải. (Ctrl + Page Up cũng hoạt động nhưng không dùng được trong IE). Ctrl + Shift + Tab: Chuyển sang tab trước đó, thông thường là tab bên trái. (Ctrl + Page Down cũng hoạt động nhưng không dùng được trong IE). Ctrl + W, Ctrl + F4: Đóng tab hiện tại. Ctrl + Shift + T: Mở lại tab cuối cùng vừa đóng. Ctrl + T: Mở một tab mới. Ctrl + N: Mở một cửa sổ mới. Alt + F4: Đóng cửa sổ hiện tại. (Làm việc với mọi cửa sổ đang mở, kể cả các ứng dụng).</p>
                        : <p></p>
                }
                <a style={styles.title} onClick={() => this.setState({ a3: !this.state.a3 })}>Làm sao để báo cáo công việc ?</a>
                {
                    this.state.a3 ?
                        <p style={{ fontSize: 15 }}>Các phím tắt của hệ thống được cung cấp như sau: Ctrl + 1 đến 8: Chọn một tab cụ thể đang mở, số thứ tự đánh từ trái sang phải Ctrl + 9: Chuyển tới tab cuối cùng Ctrl + Tab: Chuyển sang tab tiếp theo, thông thường là tab bên phải. (Ctrl + Page Up cũng hoạt động nhưng không dùng được trong IE). Ctrl + Shift + Tab: Chuyển sang tab trước đó, thông thường là tab bên trái. (Ctrl + Page Down cũng hoạt động nhưng không dùng được trong IE). Ctrl + W, Ctrl + F4: Đóng tab hiện tại. Ctrl + Shift + T: Mở lại tab cuối cùng vừa đóng. Ctrl + T: Mở một tab mới. Ctrl + N: Mở một cửa sổ mới. Alt + F4: Đóng cửa sổ hiện tại. (Làm việc với mọi cửa sổ đang mở, kể cả các ứng dụng).</p>
                        : <p></p>
                }
                <a style={styles.title} onClick={() => this.setState({ a4: !this.state.a4 })}> Làm sao để phân chia công việc ?</a>
                {
                    this.state.a4 ?
                        <p style={{ fontSize: 15 }}>Các phím tắt của hệ thống được cung cấp như sau: Ctrl + 1 đến 8: Chọn một tab cụ thể đang mở, số thứ tự đánh từ trái sang phải Ctrl + 9: Chuyển tới tab cuối cùng Ctrl + Tab: Chuyển sang tab tiếp theo, thông thường là tab bên phải. (Ctrl + Page Up cũng hoạt động nhưng không dùng được trong IE). Ctrl + Shift + Tab: Chuyển sang tab trước đó, thông thường là tab bên trái. (Ctrl + Page Down cũng hoạt động nhưng không dùng được trong IE). Ctrl + W, Ctrl + F4: Đóng tab hiện tại. Ctrl + Shift + T: Mở lại tab cuối cùng vừa đóng. Ctrl + T: Mở một tab mới. Ctrl + N: Mở một cửa sổ mới. Alt + F4: Đóng cửa sổ hiện tại. (Làm việc với mọi cửa sổ đang mở, kể cả các ứng dụng).</p>
                        : <p></p>
                }
                <a style={styles.title} onClick={() => this.setState({ a5: !this.state.a5 })}> Làm sao để giao việc ?</a>
                {
                    this.state.a5 ?
                        <p style={{ fontSize: 15 }}>Các phím tắt của hệ thống được cung cấp như sau: Ctrl + 1 đến 8: Chọn một tab cụ thể đang mở, số thứ tự đánh từ trái sang phải Ctrl + 9: Chuyển tới tab cuối cùng Ctrl + Tab: Chuyển sang tab tiếp theo, thông thường là tab bên phải. (Ctrl + Page Up cũng hoạt động nhưng không dùng được trong IE). Ctrl + Shift + Tab: Chuyển sang tab trước đó, thông thường là tab bên trái. (Ctrl + Page Down cũng hoạt động nhưng không dùng được trong IE). Ctrl + W, Ctrl + F4: Đóng tab hiện tại. Ctrl + Shift + T: Mở lại tab cuối cùng vừa đóng. Ctrl + T: Mở một tab mới. Ctrl + N: Mở một cửa sổ mới. Alt + F4: Đóng cửa sổ hiện tại. (Làm việc với mọi cửa sổ đang mở, kể cả các ứng dụng).</p>
                        : <p></p>
                }
            </div>
        )
    }
}

export default withRouter(AskandAnswersScreen);

const styles = {
    container: {
        height: '100%',
        width: '100%',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
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
