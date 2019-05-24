import React from 'react';
import './index.less';
export default class Carousel extends React.Component {
  render() {
    const {
      children,
    } =this.props;
    console.log('发的说法都是vm', this.props);
    return <div>{children}</div>;
  }
}