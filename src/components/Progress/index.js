import React from 'react';
import clasname from 'classnames';
import './index.less';
export default class Progress extends React.Component {
  getStrokeDasharray = (percent = 0.8, r = 50) => {
    const perimeter = parseFloat(Math.PI * 2 * r, 2); // 周长
    return `${perimeter * percent} ${perimeter * (1 - percent)}`;
  };
  render() {
    const {
      percent, //进度
      type, // 类型 是圆形还是线性
      status, // 状态
      width,
    } = this.props;
    const defaultPercent = `${percent}%`;
    const statuss = percent===100?'success':status;
    const cx = width / 2;
    const cy = width / 2;
    const r = width / 2 - 10;
    const progress =(
      <div className={clasname({
        ['beat-progress-outer-main']: 'beat-progress-outer-main',
      })}>
        <div
          className={clasname({
            ['beat-progress-outer']: 'beat-progress-outer',
          })}
        >
          <div
            className={clasname({
              ['beat-progress-inner']: 'beat-progress-inner',
            })}
          >
            <div
              className={clasname({
                ['beat-progress-bg']: 'beat-progress-bg',
              })}
              style={{ width: defaultPercent, }}
            >
            </div>
          </div>
        </div>
        <span
          className={clasname({
            ['beat-progress-text']: 'beat-progress-text',
          })}
          title={defaultPercent}
        >
          {defaultPercent}
        </span>

      </div>
    );
    const circleprogree = (
      <div
        className={clasname({
          ['beat-progress-inner']: 'beat-progress-inner',
        })}
      >
        <svg
          className={clasname({
            ['beat-progress-circle']: 'beat-progress-circle',
          })}
          height={width}
          viewBox={`0 0 ${width} ${width}`}
          width={width}
        >
          <circle
            className={clasname({
              ['beat-progress-circle-bg']: 'beat-progress-circle-bg',
            })}
            cx={cx}
            cy={cy}
            fill="transparent"
            r={r}
          />
          <circle
            className={clasname({
              ['beat-progress-circle-stroke']: 'beat-progress-circle-stroke',
              [`beat-progress-circle-stroke-${statuss}`]: statuss,
            })}
            cx={cx}
            cy={cy}
            fill="transparent"
            r={r}
            strokeDasharray={this.getStrokeDasharray(percent / 100, r)}
          />

        </svg>
        <div  className={clasname({
          ['beat-progress-circle-percent']: 'beat-progress-circle-percent',
        })}>
          {defaultPercent}
        </div>
      </div>
    );


    return <div
      className={clasname({
        ['beat-progress']: 'beat-progress',
        [`beat-progress-${type}`]: type,
        [`beat-progress-status-${statuss}`]: statuss,
      })}
    >
      {
        type === 'line'? progress: circleprogree
      }

    </div>;
  }
}

Progress.defaultProps = {
  percent: 0,
  status: 'normal',
  type: 'line',
  width: 150, // 环形进度条 svg 的宽度
};