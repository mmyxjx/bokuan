import React from 'react';
import { Link } from 'react-router';
import CreateDesire from './CreateDesire'
import DesireList from "./DesireList"
import {Menu,SubMenu} from 'antd'

export default class MenuLeft extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="d-left-side">
                <ul className="d-main-menu">
                    <li><Link to="/CreateDesire">创建</Link></li>
                    <li><Link to="/DesireList">历史列表</Link></li>
                </ul>
                <Menu them="dark">
                    <Menu.Item>菜单项</Menu.Item>
                    <Menu.Item>菜单
                    </Menu.Item>
                    
                    
                </Menu>
            </div>
            
        )
    }
}