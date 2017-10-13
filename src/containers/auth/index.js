import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { List,InputItem,Button,WingBlank,Picker} from 'antd-mobile';
import Header from '../../components/header'

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login:true
        }
    }



    render() {
        const quhao=[
            {
                value:1,
                label:"中国大陆  +86"
            },{
                value:2,
                label:"中国台湾  +87"
            },{
                value:3,
                label:"中国香港  +88"
            },

        ]
        let show={
            display:this.state.login?'none':'block'
        }
        return (
            <div className={style.wrap}>
                <Header/>
                <div className={style.logo}></div>
                <nav className={style.nav}>
                    <div>
                        <span id={this.state.login?style.active:""} onClick={this.toreg.bind(this)}>登录</span>
                    </div>
                    <div>
                        <span id={this.state.login?"":style.active} onClick={this.tolog.bind(this)}>注册</span>
                    </div>
                </nav>
                <section className={style.content}>
                    <div className={style.selphone}>
                        <div className={style.qh}>
                            <Picker data={quhao} cols={1} className="forss">
                                <List.Item arrow="horizontal"> </List.Item>
                            </Picker>
                        </div>
                        <div className={style.line}></div>
                        <div className={style.phone}>
                            <List>
                                <InputItem placeholder="请输入手机号" type="number"></InputItem>
                            </List>
                        </div>
                    </div>
                    <div className={style.selphone}>
                        <div className={style.tu}>
                            <List>
                                <InputItem placeholder="请输入图形验证码" type="text"></InputItem>
                            </List>

                        </div>
                        <img className={style.tuxing} src="http://reso2.yiihuu.com/1331436-z.jpg" alt=""/>
                    </div>
                    <div className={style.selphone} style={show}>
                        <div className={style.tu}>
                            <List>
                                <InputItem placeholder="请输入验证码" type="text" extra="获取验证码"></InputItem>
                            </List>

                        </div>
                        <div className={style.lline}></div>

                    </div>
                    <div className={style.selphone}>
                        <div className={style.tu}>
                            <List>
                                <InputItem type="password" placeholder={this.state.login?'请输入密码':'请设置6-20位密码'}></InputItem>
                            </List>

                        </div>
                    </div>
                    <div className={style.button}>
                        <Button type="primary">
                            {
                                this.state.login?'立即登录':'立即注册'
                            }
                        </Button>
                    </div>
                </section>
            </div>
        )

    }

    toreg(){
        this.setState({
            login:true
        })
    }
    tolog(){
        this.setState({
            login:false
        })
    }


}

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

Auth = connect(mapStateToProps, mapDispatchToProps)(Auth)


export default Auth;