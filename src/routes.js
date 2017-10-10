import React from 'react'
import {Route, Router,IndexRoute, hashHistory} from 'react-router'
import Home from './containers/home/'
import OutGold from './containers/outGold/'
import InGold from './containers/inGold/'
import ModifyPwd from './containers/modifyPwd/'
import ResultsPage from './containers/resultsPage/'
import GetAccount from './containers/getAccount/'


export default () => {


    return (
        <Router history={hashHistory}>
            <Route path="/" component={Home}/>
            <Route path="/outgold" component={OutGold}/>
            <Route path="/ingold" component={InGold}/>
            <Route path="/modifyPwd" component={ModifyPwd}/>
            <Route path="/resultsPage" component={ResultsPage}/>
            <Route path="/getAccount" component={GetAccount}/>



        </Router>
    )
}