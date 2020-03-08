Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){},
    onTap: function(){
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', "我是子传父的参数")
    }
  },
  lifetimes:{
    lifetimes: {
      attached: function() {
        // 在组件实例进入页面节点树时执行
        console.log('组件进入')
      },
      detached: function() {
        // 在组件实例被从页面节点树移除时执行
        console.log('组件移除')
      },
      ready:function(){
        console.log('ready')
      },
      pageLifetimes: {
        show: function() {
          // 页面被展示
          console.log('页面被展示')
        },
        hide: function() {
          // 页面被隐藏
          console.log('')
        },
        resize: function(size) {
          // 页面尺寸变化
        }
      }
    },
    // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
    attached: function() {
      console.log('组件进入')
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log('组件移除')
    },
  }
})