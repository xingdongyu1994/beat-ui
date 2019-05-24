import React from 'react';
import clasname from 'classnames';
import './index.less';
export default class TextArea extends React.Component {
  state={
    value: this.props.value || '',
  }

  render() {
    const {
      rows,
      autosize,
    } = this.props;
    const textArea = (
      <textarea
        autosize={autosize}
        className={clasname({
          ['beat-input']: 'beat-input',
        })}
        rows={rows}
      />
    );
    return textArea;
  }
}
