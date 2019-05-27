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
  <InfoIcon || UpIcon || DownIcon  /> 添加属性  style
```
