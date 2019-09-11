---
title: 大前端
---

## Hello Dr. Zoidberg

Dr. Zoidberg, that doesn't make sense. But, okay! No! The kind with looting and maybe starting a few fires! Well, then good news! It's a suppository. Hey, guess what you're accessories to. Hey, guess what you're accessories to.

## 表格

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```