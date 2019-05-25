import React from 'react';
import clasname from 'classnames';
import './index.less';
export default class Carousel extends React.Component {
  handClick =(e) => {
    const {target,} = e;
    if(target.nodeName === 'BUTTON'){
      console.log(target.innerHTML);
      const clickIndex = parseInt(target.innerHTML, 10);
      const offset = 400* clickIndex;
      this.animate(offset);
    }
  }
  animate =(offset) => {
    const list = document.getElementById('beat-slick-list');
    const newLeft = -offset;
    console.log('发生发的撒范德萨', newLeft);
    list.style.left = newLeft + 'px';
    list.style.transition = '300ms ease';
  }
  render() {
    const {
      children,
    } =this.props;
    const childrenList = children.map(function(item,index){
      return <div
        className={clasname({
          ['slick-slider']: 'slick-slider',
        })}
        key={index}
      >
        {item}
      </div>;
    });
    const childrenUl = children.map(function(item,index){
      return <li
        key={index}
      >
        <button>{index}</button>
      </li>;
    });
    const carousel =(
      <div
        className={clasname({
          ['beat-carousel']: 'beat-carousel',
        })}
      >
        <div
          className={clasname({
            ['beat-slick-slider']: 'beat-slick-slider',
          })}
        >
          <div
            className={clasname({
              ['beat-slick-list']: 'beat-slick-list',
            })}
            id="beat-slick-list"
          >
            {childrenList}
          </div>
          <ul
            className={clasname({
              ['slick-dots']: 'slick-dots',
            })}
            onClick={this.handClick}
          >
            {childrenUl}
          </ul>
        </div>
      </div>
    );
    return carousel;
  }
}