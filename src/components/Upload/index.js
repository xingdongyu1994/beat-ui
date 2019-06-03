import React from 'react';
import clasname from 'classnames';
import './index.less';
import Progress from '../Progress';
export default class Upload extends React.Component {
  state = {
    uploadList: [],

  };
  constructor(props) {
    super(props);
    this.uploadInput = null;

    this.fileRef = element => {
      this.uploadInput = element;
    };
  }
  handleSelect =() => {
    this.uploadInput.click();
  }
  handleUploadStatus = (status,index)=> {
    const uploadList = [...this.state.uploadList,];
    uploadList[index].status = status;
    this.setState({ uploadList, });
  }
  handleInputSelect =() => {
    const files = [...this.uploadInput.files,];
    const uploadLists = [...this.state.uploadList,];
    files.forEach((file) => {
      const fileInfo = {
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
      };
      uploadLists.push(fileInfo);
    });

    const {onChange,beforeUpload,} = this.props;
    if(this.props.beforeUpload && beforeUpload(uploadLists)) {
      return;
    } else {
      this.setState({
        uploadList:uploadLists,
      },()=>{
        onChange({
          fileList: this.state.uploadList,
        });
        this.state.uploadList.forEach((file, index) => {
          this.handleUploadFile(file, index);
        });
      });
    }

  }
  handleUploadFile =(file, index) => {
    const { name, action, } = this.props;
    const formData = new FormData();
    const xhr = new XMLHttpRequest();

    formData.append(name, file);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // const res = JSON.parse(xhr.responseText);
          this.handleUploadStatus('success', index);
        }
      }
    };
    xhr.onerror = () => {
      this.handleUploadStatus('error', index);
    };
    xhr.upload.onprogress = (e) => {
      const { loaded, total, } = e;
      const progress = Math.round((loaded * 100) / total);
      const uploadList = [...this.state.uploadList,];
      uploadList[index].progress = progress;
      this.setState({ uploadList, });
    };
    xhr.open('POST', action, true);
    xhr.send(formData);
  }
  render() {
    const {
      children, // 按钮
      directory, // 上传文件夹
      accept,  // 支持类型
      multiple, // 是否多选
      showUploadList, // 上传列表
    } = this.props;
    const {uploadList,} = this.state;
    const isDirectory = directory
      ? {
        webkitdirectory: 'true',
      }
      : {};
    const upload = (
      <div
        className={clasname({
          ['beat-upload']: 'beat-upload',
        })}
      >
        <input
          accept={accept}
          multiple={multiple}
          onChange={this.handleInputSelect}
          ref={this.fileRef}
          style={{'display': 'none',}}
          type="file"
          {...isDirectory}
        />
        <div onClick={this.handleSelect}>
          {children}
        </div>
        <div
          className={clasname({
            ['beat-upload-list']: 'beat-upload-list',
          })}
        >
          {
            showUploadList
              ?
              uploadList.map(({name, status, progress,},index)=> {
                return (
                  <div className={clasname({
                    ['beat-upload-list-item']: 'beat-upload-list-item',
                    [`beat-upload-list-item-${status}`]: `${status}`,
                  })}
                  key={index}>
                    <div
                      className={clasname({
                        ['beat-upload-list-item-info']: 'beat-upload-list-item-info',
                      })}
                    >
                      <span>{name}</span>
                    </div>
                    <Progress
                      percent={progress}
                      type="line"
                    />
                  </div>
                );
              })
              : ''
          }
        </div>
      </div>
    );
    return upload;
  }
}
Upload.defaultProps = {
  directory: false, //是否上传文件夹
  onChange:()=>{},  // 上传文件改变时的状态，详见 onChange
  beforeUpload: ()=>{}, // 上传之前的钩子函数
  multiple: false, //是否允许多选
  showUploadList: true, // 是否展示上传列表
};