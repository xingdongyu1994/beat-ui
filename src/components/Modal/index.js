import React, { PureComponent }from 'react'
import clasname from "classnames"
import Button from "../Button";
import './index.less'
export default class Modal extends PureComponent {
  handCancel =() => {
    this.props.onCancel();
  }
  handOk =() => {
    this.props.onCancel();
  }
  componentDidUpdate () {
    const { visible } = this.props
    if (visible === true) {
      this.disableScroll()
    } else {
      this.enableScroll()
    }
  }
  // 禁止滚动
  disableScroll = () => {
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "15px"
  }
  // 解除滚动
  enableScroll = () => {
    document.body.style.overflow = ""
    document.body.style.paddingRight = 0
  }
  render() {
    const {
      title, // modal 标题
      children,  // 子元素
      okText,  // 确认按钮文案
      cancelText, // 取消按钮文案
      visible, //是否显示隐藏
    } = this.props
    console.log("官方格瑞丰", this.state)
   console.log("官方发射", this.props)
    return(
      <div
        className ={clasname({
          [`beat-modal-mask`]: `beat-modal-mask`,
          [`beat-modal-mask-${visible}`]: `${visible}`,
        })}
      >
        <div
          role="dialog"
          tabIndex="-1"
          className ={clasname({
            [`beat-modal-warp`]: 'beat-modal-warp'
          })}
        >
          <div
            className ={clasname({
              [`beat-modal`]: 'beat-modal'
            })}
          >
            <div
              className ={clasname({
                [`beat-modal-content`]: 'beat-modal-content'
              })}
            >
              <div className={`beat-modal-header`}>
                <div className={`beat-modal-title`}>{title}</div>
              </div>
              <div className={`beat-modal-body`}>
                {children}
              </div>
              <div className={`beat-modal-footer`}>
                <Button onClick={this.handCancel}>
                  {cancelText}
                </Button>
                <Button onClick={this.handOk} type='primary'>
                  {okText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.defaultProps = {
  okText: '确认',
  cancelText: '取消',
  title: 'Basic Modal',
  visible: true,
};
