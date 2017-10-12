import React from 'react';
import style from "./index.css"
import {Drawer} from 'antd-mobile';
import {hashHistory} from 'react-router';

class Header extends React.Component {
    constructor(props) {
        console.log(hashHistory)
        super(props);
        this.state = {
            open: false,
            position: 'relative',
            otherStyle: true

        }
        this.choceType = this.choceType.bind(this)


    }


    componentWillMount() {
        this.choceType()
    }

    componentWillReceiveProps() {
        console.log(hashHistory)
        if (window.location.hash.substr(1).indexOf('/') !== -1) {
            this.setState({position: 'relative'})
            this.setState({otherStyle: true})
            window.onscroll = null
            return true
        } else {
            if (!window.onscroll) {
                this.choceType()
                return true
            }
        }
        return true
    }

    choceType() {
        if (window.location.hash.substr(1).indexOf('/') !== -1) {
            this.setState({position: 'absolute'})
            this.setState({otherStyle: false})
            let dance = document.body.clientWidth * 0.46
            let danceCopy = dance
            window.onscroll = null
            window.onscroll = (e) => {
                //console.log(document.body.scrollTop)
                var oTop = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;

                if (oTop < danceCopy) {
                    this.setState({position: 'absolute'})
                    this.setState({otherStyle: false})
                    return false
                }

                if (oTop - dance < 0) {
                    this.setState({position: 'fixed'})
                    this.setState({otherStyle: true})
                } else {
                    this.setState({position: 'absolute'})
                    this.setState({otherStyle: false})
                }
                dance = oTop
            }
        }
    }

    componentWillUnmount() {

    }

    onOpenChange = (...args) => {
        console.log(args);
        this.setState({open: !this.state.open});
    }

    render() {

        return (
            <div>
                <div className={this.state.otherStyle ? ( style.wrap + ' ' + style[this.state.position] + ' ' + style.otherStyle) : ( style.wrap + ' ' + style[this.state.position])}>
                    <div className={style.logo}><img src={require("./logoO.png")}/></div>
                    <div onClick={this.onOpenChange} className={style.sider}>
                        1414
                    </div>

                </div>
                <Drawer
                    className="my-drawer"
                    style={{minHeight: document.documentElement.clientHeight - 200}}
                    contentStyle={{}}
                    sidebar={<div style={{width: 200, height: 400, background: 'red'}}></div>}
                    open={this.state.open}
                    position="right"
                    onOpenChange={this.onOpenChange}
                >

                </Drawer>
            </div>
        )
    }
}

export default Header;