import React from 'react'
import ReactDOM, {render} from 'react-dom'
import MenuLeft from './src/components/MemuLeft';
import {Router, Route, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
import Main from './src/Main'
import CreateDesire from './src/components/CreateDesire'
import DesireList from './src/components/DesireList'
import './css/main.css'
import {Menu, Icon, Switch} from 'antd'



ReactDOM.render(
    (<Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute path='CreateDesire' component={CreateDesire} />
                <Route path='CreateDesire' component={CreateDesire} />
                <Route path='DesireList' component={DesireList} />


        </Route>
    </Router>),
    document.getElementById("content")
    
)