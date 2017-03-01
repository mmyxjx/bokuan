import React from 'react';
import { Link } from 'react-router';
import CreateDesire from './CreateDesire'
import DesireList from "./DesireList"
import {Menu, Switch} from 'antd'

const SubMenu = Menu.SubMenu

export default class MenuLeft extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="d-left-side">
               <Menu theme="dark" mode="inline">
                    <Menu.Item><Link to="/CreateDesire">创建</Link></Menu.Item>
                    <Menu.Item><Link to="/DesireList">历史列表</Link></Menu.Item>
                    <SubMenu  title="子菜单">
                        <Menu.Item>子菜单项</Menu.Item>

                    </SubMenu >
                </Menu>
            </div>
            
        )
    }
}