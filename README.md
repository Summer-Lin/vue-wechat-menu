# vue-wechat-menu

## demo图片
![Image text](https://github.com/Summer-Lin/vue-wechat-menu/blob/master/src/assets/demo.png)


## 内容
  > 用vue写的一个微信公众号菜单配置
  
##框架  vue + elementUI + mockjs

## 步骤：
 1、npm install
 2、npm run dev
 3、localhost:9013


## 页面
1、PublicAccountManagement.vue
2、mock.js 模拟数据


## 注意事项：
* 1、必须按照微信公众号要求的数据格式去渲染数据
   > 链接：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141013
   
* 2、自定义菜单最多包括3个一级菜单，每个一级菜单最多包含5个二级菜单。
   一级菜单最多4个汉字，二级菜单最多7个汉字，多出来的部分将会以“...”代替。
   （PS：输入框这些没有做限制，也没有做验证）
* 3、tempObj.type：以下这4个类型的type值一定是这样，不能改变。
  > media_id：发送素材；  view：跳转链接；  click：发送关键词 ； miniprogram：小程序






## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9013
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
