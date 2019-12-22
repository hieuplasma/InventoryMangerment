import { Breadcrumb } from 'antd';
import React, { Component } from 'react';

class BreadcrumbCustom extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>
                    Nhóm 13 - Trang quản lý kho
                        </a>
                </Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

export default BreadcrumbCustom;