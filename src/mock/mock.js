import Mock from 'mockjs';

// 素材内容
export var tableData = Mock.mock('/api/data',
  [{
    name: 'Vue',
  }, {
    name: 'angular',
  },{
    name: 'react',
  },
  ]
  );

// 配置菜单
export var menu = Mock.mock('/api/menu',
  {
  // 一级菜单
  button:[
    {
      //type: "click",
      name: "菜单1",
      // key: "menu1",关键词
      //url: "",//跳转链接
      //media_id:"",//素材名称--图文消息
      sub_button: [
        {
         //type: "",//media_id:素材内容; view:跳转链接
          name: "子菜单1",
         // url: "",//跳转链接
         // media_id:"",//素材名称--图文消息
        },
      ]
    }
  ]
}
);


