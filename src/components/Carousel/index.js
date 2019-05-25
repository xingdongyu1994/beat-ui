import React from 'react';
import clasname from 'classnames';
import './index.less';
export default class Carousel extends React.Component {
  state ={
    currIndex: 0,
    itemWidth: this.props.style.width,
    totalLen:0,
  }
  handClick =(e) => {
    const {target,} = e;
    const {itemWidth,currIndex,} = this.state;
    if(target.nodeName === 'BUTTON'){
      const clickIndex = parseInt(target.innerHTML, 10);

      const offset = itemWidth* (currIndex - clickIndex);
      this.animate(offset);
      this.setState({
        currIndex: clickIndex,
      });
    }
  }
  animate =(offset) => {
    const {itemWidth,totalLen,} = this.state;
    const list = document.getElementById('beat-slick-list');
    const newLeft = parseInt(list.style.left?list.style.left:0) +offset;
    this.setState({
      currIndex: Math.abs(newLeft/itemWidth),
    },()=>{
      list.style.left = newLeft + 'px';
      list.style.transition = '300ms ease';
      if(newLeft<=-(itemWidth*totalLen)){
        this.setState({
          currIndex: 0,
        });
        list.style.left = 0 +'px';
      }
    });

  }
  autoplay = () => {
    const {itemWidth,} = this.state;
    const that = this;
    this.timer = setInterval(function(){
      that.animate(-itemWidth);
    }, 2000);
  }
  stopPlay =() => {
    clearInterval(this.timer);
  }
  componentDidMount() {
    const {autoplay,children,} = this.props;
    if(autoplay) {
      this.autoplay();
    }
    this.setState({
      totalLen:children.length,
    });
  }
  handMouseOver =() => {
    const {autoplay,} = this.props;
    if(autoplay) {
      this.stopPlay();
    }
  }
  handMouseOut =() => {
    const {autoplay,} = this.props;
    if(autoplay) {
      this.autoplay();
    }
  }
  render() {
    const {
      children, // 每一屏
      dots,  // 是否显示面板指示点
      style, // 控制大小
    } =this.props;
    const that = this;
    const childrenList = children.map(function(item,index){
      return <div
        className={clasname({
          ['slick-slider']: 'slick-slider',
        })}
        key={index}
        style={style}
      >
        {item}
      </div>;
    });
    const childrenUl = children.map(function(item,index){
      const {currIndex,} = that.state;
      return <li
        className={clasname({
          ['slick-active']: index===currIndex ? 'slick-active' : '',
        })}
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
          id="beat-slick-slider"
          onMouseOut={this.handMouseOut}
          onMouseOver={this.handMouseOver}
          style={style}
        >
          <div
            className={clasname({
              ['beat-slick-list']: 'beat-slick-list',
            })}
            id="beat-slick-list"
            style={{'width':children.length*style.width,}}
          >
            {childrenList}
          </div>
          {
            dots
              ? <ul
                className={clasname({
                  ['slick-dots']: 'slick-dots',
                })}
                onClick={this.handClick}
              >
                {childrenUl}
              </ul>
              : ''
          }

        </div>
      </div>
    );
    return carousel;
  }
}
Carousel.defaultProps = {
  autoplay: false,
  dots: true,
  style: {
    width:400,
    height:200,
  },
};
