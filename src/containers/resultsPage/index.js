import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { Result } from 'antd-mobile';

const customIcon = src => <img src={src} className="icon" />

class ResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log('2222', this.props.foreignExchange)
        return (
            <div className={style.wrap}>
                <Result
                    img={customIcon('')}
                    title={<span className="shtitle">审核中</span>}
                    message={<span className="shmsg">将于1-3个工作日内审核账户信息，请耐心等待</span>}
                />
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

ResultsPage = connect(mapStateToProps, mapDispatchToProps)(ResultsPage)


export default ResultsPage;