import React from 'react'
import style from  "./index.css"
import { connect } from 'react-redux';
import { List,InputItem,Button,WingBlank,NoticeBar,Picker } from 'antd-mobile';




class InGold extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
        };
    }
    render(){
        console.log('2222',this.props.foreignExchange.inGoldBanks);

        return(
            <div className={style.wrap} >
                <NoticeBar icon={null} style={{textAlign:"center",backgroundColor:"#f39392",color:"#fff"}}
                >尚未开户，当前可入金额：美元$5000</NoticeBar>
                <List >
                    <InputItem
                        placeholder="输入金额，最低50美元"
                        extra="$"
                        style={{textAlign:"right"}}

                    >入金金额</InputItem>
                </List>
                <div className={style.tip}>
                        <span className={style.left}>
                            合人民币：<span></span>
                        </span>
                    <span className={style.right}>
                            当前汇率：{this.props.foreignExchange.exchangeRate}
                        </span>
                </div>
                <List >
                    <Picker data={this.props.foreignExchange.inGoldBanks} cols={1} className="forss" onOk={() => this.setState({ visible: false })}
                            onDismiss={() => this.setState({ visible: false })}>
                        <List.Item arrow="horizontal">选择银行网银支付</List.Item>
                    </Picker>

                </List>
                <div className={style.button}>
                    <WingBlank size="lg">
                        <Button type="primary">确认入金</Button>
                    </WingBlank>
                </div>
            </div>
        )

    }
    onPickerChange = (val) => {
        console.log(val);
        let colNum = 1;
        const d = [...this.state.data];
        const asyncValue = [...val];
        this.setState({
            data: d,
            cols: colNum,
            asyncValue,
        });
    };
    // onClick = () => {
    //     setTimeout(() => {
    //         this.setState({
    //             data: province,
    //         });
    //     }, 120);
    // };
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

InGold = connect(mapStateToProps, mapDispatchToProps)(InGold)



export default InGold;