在写组件之前，首先需要一个 `Icon` 组件，方便使用 `svg` 的图标

## 期望使用方式

```tsx
<Icon name="xxx" color="#fff" size="16"></Icon>
```

## SVG Sprites

简单来说，就是把好多 svg 放到一个大的 svg 中，然后通过某种方法获取到某个 svg

## svg-sprite-loader

```
npm i svg-sprite-loader -D
```

## 配置 webpack

匹配 svg 走 svg-sprite-loader

```js
{
  test: /\.svg$/,
  loader: 'svg-sprite-loader'
}
```

## 组件实现

确定使用哪个 svg 就是设置 use-xlinkHref，所以思路就很明确了

```tsx
<svg className="icon" width={size} height={size} onClick={onClick} fill={color}>
  <use xlinkHref={`#${name}`}></use>
</svg>
```

## 导入 svg

只有导入了 svg，才能被 use 找到，一个一个的导入是一件很费时间的事情，我们来时先一个统一导入

```js
// 导入所有
let importAll = (requireContext) =>
  requireContext.keys().forEach(requireContext)
try {
  // requireContext.keys() 符合的相对路径
  importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {
  console.log(error)
}
```

## 解决 fill 的 bug

当 svg 中设置了 fill，就会导致外层的 fill 失效，借用 svgo-loader 将 svg 中的 fill 去掉

## svgo-loader

```
npm i svgo-loader -D
```

## 配置 webpack

```js
{
  test: /\.svg$/,
  use: [
    { loader: 'svg-sprite-loader' },
    {
      loader: 'svgo-loader',
      options: {
        plugins: [
          {
            removeAttrs: {
              attrs: 'fill',
            },
          },
        ],
      },
    },
  ],
}
```

## 资料

- [未来必热：SVG Sprites 技术介绍](https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/)

- [懒人神器：svg-sprite-loader 实现自己的 Icon 组件](https://segmentfault.com/a/1190000015367490)

- [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)

- [svgo-loader](https://github.com/JetBrains/svg-sprite-loader)

- [require-context](https://webpack.js.org/guides/dependency-management/#require-context)
