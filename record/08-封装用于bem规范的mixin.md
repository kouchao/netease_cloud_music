bem 是一种 css 的规范 好处就是很明确的表示出类的意图 坏处就是长，封装时为了更好地生成符合 bem 规范的类名。

## mixin

混合指令的用法是在 @mixin 后添加名称与样式，用于定义可重复使用的样式，避免了使用无语意的 class

## include

使用 @include 指令引用混合样式，格式是在其后添加混合名称，以及需要的参数（可选）

## at-root

@at-root 在文档的根目录下发出一个或多个规则，而不是嵌套在其父选择器下。它可以与单个内联选择器一起使用

## 期望

```scss
/* scss */
@include b(block) {
  background: red;
  @include e(header) {
    font-size: 14px;
    @include m(css) {
      font-size: 18px;
    }
  }
}

/* css */
.block {
  background: red;
}

.block__header {
  font-size: 14px;
}

.block__header--m {
  font-size: 18px;
}
```

## 思路

```scss
// element分隔符
$elementSeparator: '__';
// modifier分隔符
$modifierSeparator: '--';

// 将block传进来 形如 .block {}
@mixin b($block) {
  .#{$block} {
    @content;
  }
}

// 将element传进来  要拼接父类名 + element分隔符 + element 形如 .parent__element {} 并且要放到根目录下 而不是父级下面
@mixin e($element) {
  @at-root {
    #{&}#{$elementSeparator + $element} {
      @content;
    }
  }
}

// 将modifier传进来  要拼接父类名 + modifier分隔符 + modifier 形如 .parent--modifier {} 并且要放到根目录下 而不是父级下面
@mixin m($modifier) {
  @at-root {
    #{&}#{$modifierSeparator + $modifier} {
      @content;
    }
  }
}
```

## 解决逆向嵌套问题

```scss
@include b(block) {
  background: red;
  @include m(modifier) {
    color: blue;
    @include e(subelement) {
      background: gray;
    }
  }
}

// css
.block {
  background: red;
}
.block--modifier {
  color: blue;
}

// 注意此处 期望是.block--modifier .block__subelement {}
.block--modifier__subelement {
  background: gray;
}
```

## 根据分隔符判断，决定是嵌套 还是标准的 bem

```scss
// 如果是modifier分隔符 则是嵌套 否则就是bem
@function containsModifier($selector) {
  $selector: selectorToString($selector);
  // 匹配字符串
  @if str-index($selector, $modifierSeparator) {
    @return true;
  } @else {
    @return false;
  }
}

@function selectorToString($selector) {
  // 转成字符串
  $selector: inspect($selector);
  // 截取字符串 第二个倒着取两个
  $selector: str-slice($selector, 2, -2);
  @return $selector;
}

// 获取block
@function getBlock($selector) {
  $selector: selectorToString($selector);
  $modifierStart: str-index($selector, $modifierSeparator) - 1;
  @return str-slice($selector, 0, $modifierStart);
}

@mixin e($element) {
  $selector: &;
  @if containsModifier($selector) {
    // 嵌套的情况
    $block: getBlock($selector);
    @at-root {
      #{$selector} {
        #{$block + $elementSeparator + $element} {
          @content;
        }
      }
    }
  } @else {
    // 标准的bem
    @at-root {
      #{$selector + $elementSeparator + $element} {
        @content;
      }
    }
  }
}
```

## 资料

- [bem 规范](https://bemcss.com/)

- [Sass 中文网
  ](https://www.sass.hk/)

- [BEM 在 Sass3.4 中的提升](https://www.w3cplus.com/preprocessor/pushing-bem-to-the-next-level-with-sass-3-4.html)

- [Sass String(字符串) 函数](https://www.runoob.com/sass/sass-string-func.html)
