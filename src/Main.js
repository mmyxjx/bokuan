import React from 'react'
import MenuLeft from './components/MemuLeft';
import {Router, Route, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'



export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                <MenuLeft />
                <div className="d-right-side">
                   { this.props.children }
                </div>
            </div>
        )
        
    }
}