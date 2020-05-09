## 原因
目录较深 查找起来不方便 出现../../../../这种多级目录

## 缺点
会降低编译速度

## 配置webpack
```js
{
    alias: {
        '@': path.resolve('src'),
    }
}
```

## 配置tsconfig
这样vscode就可以有提示了
```jsoh
{

    "compilerOptions": {
        "baseUrl": "./", 
        "paths": {
            "@/*": ["src/*"]
        }
    }
}
```