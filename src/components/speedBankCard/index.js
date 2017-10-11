import React from 'react'
import style from "./index.css"
import {connect} from 'react-redux'
import { ImagePicker,Button,WingBlank} from 'antd-mobile';

const data = [];


class SpeedBankCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: data,

        }
    }

    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files:files
        });
    }


    render() {
        return (
            <div className={style.wrap}>
                <div className={style.selimg}>
                    <div className={style.img}>
                        <ImagePicker
                            files={this.state.files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={this.state.files.length < 1}
                        />

                    </div>
                </div>
                <div className={style.button}>
                    <WingBlank size="lg">
                        <Button type="primary">确认上传</Button>
                    </WingBlank>
                </div>
                <section className={style.hint}>
                    <header className={style.hinth}>
                        温馨提示：
                    </header>
                    <section className={style.hintc}>
                        <p>建议拍摄角度保持垂直，避免倾斜过大造成图像变形。</p>
                        <p>请提交银行卡原件的正/反两面彩色图片，不要提供黑白图片或复印件。</p>
                        <p>建议银行卡照片保持完整，避免裁剪边角框，有污迹，划痕或折痕。</p>
                        <p>银行卡图片中的文字，号码尽量清晰可辨，建议不要涂改或在名字和卡号文字上加水印。</p>
                    </section>
                </section>
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

SpeedBankCard = connect(mapStateToProps, mapDispatchToProps)(SpeedBankCard)


export default SpeedBankCard;