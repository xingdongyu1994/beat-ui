import React from 'react';
import clasname from 'classnames';
import './index.less';
import { LoadingIcon, } from '../Icon';
export default class Spin extends React.Component {

  render() {
    const {
      dom,
      tip,
    } = this.props;
    const spindom = (
      <div
        className={clasname({
          ['beat-spin']: 'beat-spin',
        })}
      >
        <span
          className={clasname({
            ['beat-spin-indicator']: 'beat-spin-indicator',
            ['beat-spin-ani']: 'beat-spin-ani',
          })}
        >
          {dom}
        </span>
        {
          tip
            ? <div
              className={clasname({
                ['beat-spin-tip']: tip,
              })}>
              {tip}
            </div>
            : undefined
        }
      </div>

    );
    return spindom;
  }
}
Spin.defaultProps = {
  tip: '', //文案
  dom: <LoadingIcon />, // 是否有文案
};