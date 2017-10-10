import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { List,InputItem,WingBlank,Button,ImagePicker,TextareaItem } from "antd-mobile"

const data = [];

class PersonalMsg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: data,
        }
    }

    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }

    render() {
        const { files } = this.state;
        console.log('2222', this.props.foreignExchange)
        return (
            <div className={style.wrap}>
                <div className={style.selimg}>
                    <div className={style.img}>
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 1}
                        />
                    </div><div className={style.img}>
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 1}
                        />
                    </div>


                </div>
                <List >
                    <InputItem
                        placeholder="输入需与身份证一致"
                        type="text"
                        style={{textAlign:"right"}}
                    >姓名</InputItem>
                    <InputItem
                        placeholder="输入15位或18位身份证号"
                        type="number"
                        style={{textAlign:"right"}}
                    >身份证号码</InputItem>
                    <InputItem
                        type="text"
                        placeholder="输入邮箱"
                        style={{textAlign:"right"}}
                    >邮箱(选填)</InputItem>
                    <TextareaItem
                        placeholder="输入需与身份证住址一致"
                        title="住址(选填)"
                        autoHeight
                        labelNumber={5}
                        style={{textAlign:"right"}}
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

PersonalMsg = connect(mapStateToProps, mapDispatchToProps)(PersonalMsg)


export default PersonalMsg;