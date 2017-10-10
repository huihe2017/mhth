import React from 'react'
import style from  "./index.css"
import { connect } from 'react-redux'


class OutGold extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
	}
	render(){
			console.log('2222',this.props.foreignExchange)
			return(
				<div className={style.wrap} >foreignExchange</div>
			)

		}
}

function mapStateToProps(state, props) {
  return {
	  foreignExchange:state.foreignExchange
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

OutGold = connect(mapStateToProps, mapDispatchToProps)(OutGold)



export default OutGold;