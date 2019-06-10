import React from 'react';
import clasname from 'classnames';
import './index.less';
import { CloseIcon,} from '../Icon';
export default class Input extends React.Component {
  constructor(props){
    super(props);
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value,
    };
  }
  handChange =(e) => {
    this.setState({
      value: e.target.value,
    });
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }
  handClearValue =() => {
    this.setState({
      value: '',
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
    	this.setState({
        value: nextProps.value,
      });
    }
  }
  render() {
    const  {
      placeholder, // 描述
      type,  // 可替换元素的类型
      size, // 大小
      style, // 自定义的样式
      disabled, // 是否禁用
      allowClear, // 允许手动清除
      readonly,
      suffix, // 内容
    } = this.props;
    const { value, } = this.state;
    const inputEle = (
      <input
        className={clasname({
          ['beat-input']: 'beat-input',
          [`beat-input-${size}`]: size !=='default'?`beat-input-${size}`:'',
          ['beat-input-disabled']: disabled?`beat-input-${disabled}`:'',
        })}
        disabled={disabled}
        onChange={this.handChange}
        placeholder={placeholder}
        readOnly={readonly}
        style={style}
        type={type}
        value={value}
      />
    );
    const inputWrapper = (
      <div
        className={clasname({
          ['beat-input-wrapper']: 'beat-input-wrapper',
        })}
      >
        {inputEle}

        <span
          className={clasname({
            ['beat-input-suffix']: 'beat-input-suffix',
          })}

        >
          {
            allowClear && value
              ?  <CloseIcon  onClick={this.handClearValue}/>
              :suffix
          }

        </span>


      </div>
    );
    if(allowClear || value) {
      return inputWrapper;
    } else {
      return inputEle;
    }

  }
}
Input.defaultProps = {
  placeholder: '',
  type: 'text',
  size: 'default',
  onChange: () => {},
  disabled: false,
  allowClear: false,
  readonly: false,
};
