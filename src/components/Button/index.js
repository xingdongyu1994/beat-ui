import React from 'react'
import clasname from "classnames"
import './index.less'
export default class Button extends React.Component {

  render() {
    const  {
      type, // 类型
      children,  // 文本内容
    } = this.props
    console.log("个人供热其他人", this.props)
    const baseProps = {
      className: clasname({
        [`learn-btn`]:'learn-btn',
        [`learn-btn-${type}`]: type,
       
      })
    }
    const textContent = children
    return <button {...baseProps}>{textContent}</button>
  }
}