import React, { PureComponent, } from 'react';
import clasname from 'classnames';
import {DownIcon,} from '../Icon';
import Input from '../Input';
import SelectContent from './SelectContent';

import './index.less';
export default class Select extends PureComponent {
  constructor(props) {
    super(props);
    this.state ={
      visible: false,
      selectValue: this.props.defaultValue || '',
    };
    this.outContainer = null;
    this.selectRef = element => {
      this.outContainer = element;
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.onhandlerOutside, false);
  }
  onhandlerOutside = e => {
    e.stopPropagation();
    const a = this.outContainer.outerHTML;
    const b = e.target.outerHTML;
    if(this.state.visible && !this.props.disabled && !a.includes(b)) {
      this.setState({ visible: false, });
    }
  };
  handleChange = (e) => {
    this.setState({
      visible: false,
      selectValue: e.target.innerText,
    });
  };
  handleInputClick =() => {
    const visible = !this.state.visible;
    this.setState({
      visible,
    });

  }
  render() {
    const {
      children,
      style,
      disabled,
      allowClear,
    } = this.props;
    const  {
      visible,
      selectValue,
    } = this.state;
    const select = (
      <div
        className={clasname({
          ['beat-select']: 'beat-select',
        })}
        ref={this.selectRef}
        style={style}
      >
        <div
          className={clasname({
            ['beat-select-inner']: 'beat-select-inner',
            ['beat-select-active']: visible,
            [`beat-select-${disabled}`]: disabled,
          })}

          onClick={this.handleInputClick}
        >
          <div
            className={clasname({
              ['beat-select-main']: 'beat-select-main',
            })}
          >

            <Input
              allowClear={allowClear}
              className={clasname({
                ['beat-select-main-value']: 'beat-select-main-value',
              })}
              disabled={disabled}
              readonly
              style={{
                width: '100%',
                border: 'none',
                padding: '0',
                cursor: 'pointer',
              }}
              suffix={<DownIcon className={clasname({
                ['beat-select-arrow']: 'beat-select-arrow',
              })}/>}
              value={selectValue}
            />
          </div>
        </div>

        <div
          className={clasname({
            ['beat-select-content']: 'beat-select-content',
            ['beat-select-content-show']: visible,
            ['beat-select-content-hide']: !visible,
          })}

          onClick={this.handleChange}
        >
          {
            children
              ? <SelectContent
                children={children}
              />
              : ''
          }
        </div>


      </div>
    );
    return select;
  }
}

Select.defaultProps = {
  disabled: false,
};