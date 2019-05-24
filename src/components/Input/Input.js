import React from 'react'
import clasname from "classnames"
import './index.less'
export default class Input extends React.Component {
  state={
    value: this.props.value || ""
  }
  handChange =(e) => {
    this.setState({ 
      value: e.target.value
    })
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
  }
  handClearValue =() => {
    this.setState({
      value: ''
    })
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
    const { value } = this.state;
    const inputEle = (
      <input
        value={value}
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
    const inputWrapper = (
      <div
        className ={clasname({
          [`beat-input-wrapper`]: `beat-input-wrapper`
        })}
      >
        {inputEle}
        <span
          className ={clasname({
            [`beat-input-suffix`]: `beat-input-suffix`
          })}
          onClick={this.handClearValue}
        >删
        </span>
      </div>
    )
    if(allowClear) {
      return inputWrapper
    } else {
      return inputEle
    }
   
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
