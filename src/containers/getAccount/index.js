import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux';
import BankCardMsg from '../../components/bankCardMsg';
import PersonalMsg from '../../components/personalMsg';
import PhoneConfirm from '../../components/phoneConfirm';
import { Steps } from "antd-mobile"

const Step = Steps.Step;

const steps = [{
    title: '手机号验证'
}, {
    title: '联络人信息'
}, {
    title: '银行卡信息'
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);


class GetAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            state:1
        }
    }

    render() {
        console.log('2222', this.props.foreignExchange)
        return (
            <div className={style.wrap}>
                <Steps current={this.state.state} direction="horizontal">{steps}</Steps>
                {this.showtab()}
            </div>
        )

    }
    showtab(){
        if(this.state.state=='0'){
            return <PhoneConfirm/>
        }else if(this.state.state=='1'){
            return <PersonalMsg/>
        }else if(this.state.state=='2'){
            return <BankCardMsg/>
        }
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