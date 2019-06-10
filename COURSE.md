Button组件 说明
``` 
   <Button
      type, // 类型
      children,  // 文本内容
      disabled,  // 是否可点击
      onClick,   // 点击事件
   >
   按钮
   </Button>

```

Modal组件 说明
``` 
   <Modal
      title, // modal 标题
      children,  // 子元素内容
      okText,  // 确认按钮文案
      cancelText, // 取消按钮文案

      content, // 静态方法内容
      isStatic, // 是否静态方法
   >
   <div>弹出框</div>
   </Modal>

   Modal.warning()静态方法

```
Carousel组件 说明
``` 
   <Carousel
      autoplay, // 是否自动播放
      children, // 每一屏内容
      dots,  // 是否显示面板指示点
      style={{'height':200,'width':400}}, // 控制大小
   >
     <div>1</div>
     <div>2</div>
     <div>3</div>
     <div>4</div
   </Carousel>

```
Input组件 说明
``` 
   <Input
      placeholder, // 描述
      type,  // 可替换元素的类型
      size, // 大小
      style, // 自定义的样式
      disabled, // 是否禁用
      allowClear, // 允许手动清除
   />

```
TextArea组件 说明
``` 
   <TextArea
      rows,
      autosize={{ minRows: 2, maxRows: 6 }}  // 大小
   />

```
InfoIcon ,UpIcon,DownIcon

```
  <InfoIcon || UpIcon || DownIcon || CloseIcon /> 添加属性  style
```

Progress组件 说明

```
  <Input
      percent: 0,    // 进度条的进度
      status: 'normal',  // exception   success
      type: 'line',   // 圆形  ||   线性
      width: 150, // 环形进度条 svg 的宽度
   />
```


Upload组件 说明

```
  <Upload
     directory: false, //是否上传文件夹
     onChange:()=>{},  // 上传文件改变时的状态，详见 onChange
     beforeUpload: ()=>{}, // 上传之前的钩子函数
     multiple: false, //是否允许多选
     showUploadList: true, // 是否展示上传列表
     accept,  // 支持类型
   />
```

Spin组件 说明

```
  <Spin
     tip: 'XXX' //自定义文案
   />
```


Form验证组件 说明
```
  <Form>
  <Input placeholder="Usersex" name="inputsex" value={this.state.inputsexvalue} onChange={this.handleSexInputValue}/>
    {
      that.getFieldDecorator.message('inputsex',{  // key值 区分多个input
        rules: [   //  校验规则
          { 
            required: true,
            max: 6,
          }
        ],
        value: this.state.inputsexvalue,  // vlaue值
        errormessage: {    //    校验规则的errormessage描述
          required: '不能为空'
          max: '不能大于6个字符',
        }
      })
    }
   </Form>
```


Select组件 说明
```
   <Select defaultValue="lucy" allowClear style={{ width: 120 }}>  默认选择项   allowClear是否能清除   disabled是否禁用 
        <Option value="jack">Jack</Option>    style自定义
        <Option value="lucy">Lucy</Option>
        <Option value="lucy2">Lucy2</Option>
        <Option value="lucy3">Lucy3</Option>
      </Select>
```
