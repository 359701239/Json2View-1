import React, {Component} from "react";
/*
  用法
  data={
    component:'div',
    className:'class',
    conetent:{},
    }
  <Json2View >{data}</Json2View>
  父子级关系用content包含子类
  平级关系用json数组表示
 */
export default class Json2View extends Component {
  componentView = (jsonObject, index) => {
    if (jQuery.isEmptyObject(jsonObject))
      return null
    let classData = {
      ...jsonObject
    };
    delete classData.content
    delete classData.component
    return (
      <jsonObject.component key={index} {...classData}>
        {typeof jsonObject.content == 'object'
          ? this.Json2View(jsonObject.content)
          : jsonObject.content}</jsonObject.component>
    )
  }
  Json2View = (jsonData) => {
    if (jsonData instanceof Array) {
      let view = jsonData.map(this.componentView);
      return view
    } else if (jsonData instanceof Object) {
      return this.componentView(jsonData)
    } else {
      console.error('Unexpected data type:Only jsonObject/jsonArray access');
      return null
    }
  }
  render() {
    let {children} = this.props;
    return <div>
      {this.Json2View(children)}
    </div>
  }
}
