import React from 'react';
import clasname from 'classnames';
import './index.less';
export default class Form extends React.Component {
  render() {
    const {
      children,
    } = this.props;
    const from = (
      <div
        className={clasname({
          ['beat-form']: 'beat-form',
        })}
      >
        {children}
      </div>
    );
    return from;
  }
}