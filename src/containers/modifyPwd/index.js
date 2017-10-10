import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { List,InputItem,Button,WingBlank} from 'antd-mobile';

class ModifyPwd extends React.Component {
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
                        style={{textAlign:"right"}}
                        type="password"
                        placeholder="输入初始密码"
                    >初始密码</InputItem>
                    <InputItem
                        style={{textAlign:"right"}}
                        type="password"
                        placeholder="密码6-24位数字、字母、字符"
                    >设置密码</InputItem>
                    <InputItem
                        style={{textAlign:"right"}}
                        type="password"
                        placeholder="请再次输入密码"
                    >确认密码</InputItem>
                </List>
                <div className={style.button}>
                    <WingBlank size="lg">
                        <Button type="primary">确认入金</Button>
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

ModifyPwd = connect(mapStateToProps, mapDispatchToProps)(ModifyPwd)


export default ModifyPwd;