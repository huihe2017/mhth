import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'


class PersonalMsg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log('2222', this.props.foreignExchange)
        return (
            <div className={style.wrap}>ModifyPwd</div>
        )

    }
}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

PersonalMsg = connect(mapStateToProps, mapDispatchToProps)(PersonalMsg)


export default PersonalMsg;