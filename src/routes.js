import React from 'react'
import { Route, Router, IndexRoute, hashHistory} from 'react-router'
import Home from './containers/home/'
import OutGold from './containers/outGold/'


export default () =>{


  return (<Router history={hashHistory} >
		<Route path="/" component={Home}/>
		<Route path="/outgold" component={OutGold}/>
		
  </Router>)
}