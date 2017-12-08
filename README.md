# vue-money-range

A Vue component to money-range
一个金额范围插件

## 安装

```JS
npm install vue-money-range -S
```

## 使用

```js
// ES6
import vueMoneyRange from 'vue-money-range'
// require
const vueMoneyRange = require('vue-money-range')

Vue.use(vueMoneyRange)

// 作为组件的方式使用
<money-range></money-range>
```

### 配置

```html
   <money-range @valueChange='valueChange'></money-range>
```

```javascript
methods:{
    valueChange(val) {
      // 这里val有两个属性min_amount和max_amount,可在这里更改你需要传的值

    }
}
```

### Events

| name | Description   |
| :--------:   | -----  |
|    valueChange   |  金额值发生改变的时候触发
