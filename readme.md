# Json2View

为react提供另外一套写法,用json的方式来描述一个页面,具有良好的可读性,可维护性; 甚至可以拓展为后台直出前端页面,前端只需负责component组件编写

# Usage

```
npm install json2view
```

# Old Way

```jsx
onClick=()=>{ alert('click'); }

<div classname="some-className" onClick={()=>this.onClick()}>
  <a style="{{fontWeight:'bold'}}">this is a tag</a>
</div>
```

# New Way

```jsx
onClick=()=>{ alert('click'); }

var data= {
component:'div',
onClick={()=>this.onClick()},
className:'some-className',
content:{component:'a',
        style:{fontWeight:'bold'},
        content:'this is a tag'}
}
<json2view>{data}</json2view>
```
