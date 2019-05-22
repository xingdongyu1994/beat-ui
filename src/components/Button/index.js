import React from 'react'
import clasname from "classnames"
import './index.less'
export default class Button extends React.Component {
  render() {
    const  {
      type, // 类型
      children,  // 文本内容
      disabled,  // 是否可点击
      onClick,   // 点击事件
    } = this.props
    const isDisabled = disabled ? { disabled: true } : { onClick } //是否点击
    const baseProps = {
      ...isDisabled,
      className: clasname({
        [`learn-btn`]:'learn-btn',
        [`learn-btn-${type}`]: type,
        [`learn-btn-${disabled}`]: disabled
      })
    }
    const textContent =  <span>{children}</span>
    return <button {...baseProps}>{textContent}</button>
  }
}