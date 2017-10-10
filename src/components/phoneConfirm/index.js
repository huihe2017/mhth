import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { List,InputItem,WingBlank,Button } from "antd-mobile"


class PhoneConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log('2222', this.props.foreignExchange)
        return (
            <div className={style.wrap}>
                <List >
                    <InputItem
                        placeholder="186****1866"
                        editable={false}
                        style={{textAlign:"right"}}
                    >绑定手机号</InputItem>
                    <InputItem
                        extra="获取验证码"
                        placeholder="输入验证码"
                    />
                </List>
                <div className={style.button}>
                    <WingBlank size="lg">
                        <Button type="primary">下一步</Button>
                    </WingBlank>
                </div>
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

PhoneConfirm = connect(mapStateToProps, mapDispatchToProps)(PhoneConfirm)


export default PhoneConfirm;