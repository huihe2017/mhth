import React from 'react'
import style from  "./index.css"
import { connect } from 'react-redux';
import { List, InputItem, Button } from 'antd-mobile';


class OutGold extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
	}
	render(){
        console.log('2222',this.props.foreignExchange);

        return(
            <div className={style.wrap} >
                <div className="part1">
                    <List >
                        <InputItem
                            defaultValue={this.props.foreignExchange.bankName+" "+this.props.foreignExchange.bankNo}
                            type="bankCard"
                            editable={false}
                            style={{textAlign:"right"}}
                        >出金账户</InputItem>
                        <InputItem
                            defaultValue={"$ "+this.props.foreignExchange.accountBalance}
                            type="bankCard"
                            editable={false}
                            className={style.Apphh}
                            style={{textAlign:"right"}}
                        >账户余额</InputItem>
                    </List>
                </div>


                <List >
                    <InputItem
                        placeholder="输入金额，最低50美元"
                        extra="$"
                        style={{textAlign:"right"}}
                    >价格</InputItem>
                </List>
                <div className="tip">
                        <span className={style.left}>
                            合人民币：<span></span>
                        </span>
                    <span className="right">
                            当前汇率：{this.props.foreignExchange.exchangeRate}
                        </span>
                </div>
                <List >
                    <InputItem
                        type="password"
                        placeholder="输入支付密码"
                        style={{textAlign:"right"}}
                    >支付密码</InputItem>

                </List>
                <div className="tip">
                        <span className={style.left}>
                            注：支付密码即登录密码
                        </span>
                    <span className="right">
                        <a href="javascript:void (0)">
                            忘记密码？
                        </a>
                    </span>
                </div>

            </div>
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