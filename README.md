# vue-scroll-to
scroll toができるカスタムディレクティブの邑楽グイン

[DEMO](https://ohagip.github.io/vue-scroll-to/)

## Install
```
npm install git+https://github.com/ohagip/vue-scroll-to.git
```
or  
`./src/vue-scroll-to.js`をコピペ

## Usage
```js
import VueScrollTo from 'vue-scroll-to'
Vue.use(VueScrollTo)
```

```vue
<button v-scroll-to="'#target'"></button>
<button v-scroll-to="{ el: '#target', offset: 100 }"></button>
<button v-scroll-to="{ el: '#target', bottom: true }"></button>
```

## Parameters
| Property | Type | Description |
|:--------:|:----:|-------------|
| targets | String &#124; Object | スクロール対象のセレクタ |
| targets.el | String | スクロール対象のセレクタ |
| targets.offset | Number | スクロール位置のオフセット |
| targets.bottom | Boolean | スクロール対象の下部にスクロール |


---
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
