import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { List,InputItem,Button,WingBlank} from 'antd-mobile';

class ForexPresentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={style.wrap}>

            </div>
        )

    }


}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

ForexPresentation = connect(mapStateToProps, mapDispatchToProps)(ForexPresentation)


export default ForexPresentation;