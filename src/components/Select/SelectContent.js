import React from 'react';
import '.';

import './index.less';
export default class SelectContent extends React.Component {
  render() {
    const {children,} = this.props;
    const selectcontent = (
      <div>
        {
          React.Children.map(children, (element) => {
            return  React.createElement(
              'div',
              {
                className:'beat-select-option',
              },
              element.props.children
            );
          })
        }
      </div>
    );
    return selectcontent;
  }
}