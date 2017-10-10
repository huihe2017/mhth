import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'


class GetAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log('2222', this.props.foreignExchange)
        return (
            <div className={style.wrap}>GetAccount</div>
        )

    }
}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

GetAccount = connect(mapStateToProps, mapDispatchToProps)(GetAccount)


export default GetAccount;