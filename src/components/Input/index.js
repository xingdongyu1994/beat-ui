import React from 'react'
import clasname from "classnames"
import './index.less'
export default class Input extends React.Component {
  
  handChange =(e) => {
    this.props.onChange(e.target.value)
  }
  render() {
    const  {
      placeholder, // 描述
      type,  // 可替换元素的类型
      size, // 大小
      style, // 自定义的样式
      disabled, // 是否禁用
      allowClear, // 允许手动清除
    } = this.props
    
    const inputEle = (
      <input
        type={type}
        disabled={disabled}
        className ={clasname({
          [`beat-input`]: 'beat-input',
          [`beat-input-${size}`]: size !=='default'?`beat-input-${size}`:'',
          [`beat-input-disabled`]: disabled?`beat-input-${disabled}`:''
        })}
        placeholder={placeholder}
        style={style}
        onChange={this.handChange}
      />
    )
    return inputEle
  }
}
Input.defaultProps = {
  placeholder: '',
  type: "text",
  size: 'default',
  onChange: () => {},
  disabled: false,
  allowClear: false
};
