(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{324:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css基础"}},[t._v("CSS基础")]),t._v(" "),a("p",[t._v("本章是CSS考点的非重难点，因此我们采用简略回答的方式进行撰写，所以不会有太多详细的解释。")]),t._v(" "),a("blockquote",[a("p",[t._v("我们约定，每个问题后我们标记『✨』的为高频面试题")])]),t._v(" "),a("h2",{attrs:{id:"css选择器的优先级是怎样的？✨"}},[t._v("CSS选择器的优先级是怎样的？✨")]),t._v(" "),a("p",[t._v("CSS选择器的优先级是：内联 > ID选择器 > 类选择器 > 标签选择器")]),t._v(" "),a("p",[t._v("到具体的计算层面，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：")]),t._v(" "),a("ul",[a("li",[t._v("A 的值等于 1 的前提是存在内联样式, 否则 A = 0;")]),t._v(" "),a("li",[t._v("B 的值等于 ID选择器 出现的次数;")]),t._v(" "),a("li",[t._v("C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;")]),t._v(" "),a("li",[t._v("D 的值等于 标签选择器 和 伪元素 出现的总次数 。")])]),t._v(" "),a("p",[t._v("就比如下面的选择器，它不存在内联样式，所以A=0,不存在id选择器B=0,存在一个类选择器C=1,存在三个标签选择器D=3，那么最终计算结果为: {0, 0, 1 ,3}")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("ul ol li .red")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("按照这个结算方式，下面的计算结果为: {0, 1, 0, 0}")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#red")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("我们的比较优先级的方式是从A到D去比较值的大小，A、B、C、D权重从左到右，依次减小。判断优先级时，从左到右，一一比较，直到比较出最大值，即可停止。")]),t._v(" "),a("p",[t._v("比如第二个例子的B与第一个例子的B相比，1>0,接下来就不需要比较了，第二个选择器的优先级更高。")]),t._v(" "),a("h2",{attrs:{id:"link和-import的区别？"}},[t._v("link和@import的区别？")]),t._v(" "),a("ul",[a("li",[t._v("link属于XHTML标签，而@import是CSS提供的。")]),t._v(" "),a("li",[t._v("页面被加载时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载。")]),t._v(" "),a("li",[t._v("import只在IE 5以上才能识别，而link是XHTML标签，无兼容问题。")]),t._v(" "),a("li",[t._v("link方式的样式权重高于@import的权重。")]),t._v(" "),a("li",[t._v("使用dom控制样式时的差别。当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的。")])]),t._v(" "),a("h2",{attrs:{id:"有哪些方式（css）可以隐藏页面元素？"}},[t._v("有哪些方式（CSS）可以隐藏页面元素？")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("opacity:0")]),t._v("：本质上是将元素的透明度将为0，就看起来隐藏了，但是依然占据空间且可以交互")]),t._v(" "),a("li",[a("code",[t._v("visibility:hidden")]),t._v(": 与上一个方法类似的效果，占据空间，但是不可以交互了")]),t._v(" "),a("li",[a("code",[t._v("overflow:hidden")]),t._v(": 这个只隐藏元素溢出的部分，但是占据空间且不可交互")]),t._v(" "),a("li",[a("code",[t._v("display:none")]),t._v(": 这个是彻底隐藏了元素，元素从文档流中消失，既不占据空间也不交互，也不影响布局")]),t._v(" "),a("li",[a("code",[t._v("z-index:-9999")]),t._v(": 原理是将层级放到底部，这样就被覆盖了，看起来隐藏了")]),t._v(" "),a("li",[a("code",[t._v("transform: scale(0,0)")]),t._v(": 平面变换，将元素缩放为0，但是依然占据空间，但不可交互")])]),t._v(" "),a("blockquote",[a("p",[t._v("还有一些靠绝对定位把元素移到可视区域外，或者用clip-path进行裁剪的操作过于Hack，就不提了。")])]),t._v(" "),a("h2",{attrs:{id:"em-px-rem区别？"}},[t._v("em\\px\\rem区别？")]),t._v(" "),a("ul",[a("li",[t._v("px：绝对单位，页面按精确像素展示。")]),t._v(" "),a("li",[t._v("em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。")]),t._v(" "),a("li",[t._v("rem：相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持")])]),t._v(" "),a("h2",{attrs:{id:"块级元素水平居中的方法？"}},[t._v("块级元素水平居中的方法？")]),t._v(" "),a("blockquote",[a("p",[t._v("如果使用Hack的话，水平居中的方法非常多，我们只介绍主流的，奇葩的见拓展阅读")])]),t._v(" "),a("p",[a("code",[t._v("margin:0 auto")]),t._v("方法")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  <div class="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"center"')]),t._v(">水平居中</div>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("flex布局，目前主流方法")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  <div class="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"center"')]),t._v(">\n      <div class="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flex-div"')]),t._v(">1</div>\n      <div class="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flex-div"')]),t._v(">2</div>\n  </div>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("table方法")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  <div class="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"center"')]),t._v(">水平居中</div>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("还有一些通过position+(margin|transform)等方法的不一样列举了，非重点没必要。")]),t._v(" "),a("blockquote",[a("p",[t._v("拓展阅读: "),a("a",{attrs:{href:"https://louiszhai.github.io/2016/03/12/css-center/",target:"_blank",rel:"noopener noreferrer"}},[t._v("16种方法实现水平居中垂直居中"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"css有几种定位方式？"}},[t._v("CSS有几种定位方式？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("static: 正常文档流定位，此时 top, right, bottom, left 和 z-index 属性无效，块级元素从上往下纵向排布，行级元素从左向右排列。")])]),t._v(" "),a("li",[a("p",[t._v("relative：相对定位，此时的『相对』是相对于正常文档流的位置。")])]),t._v(" "),a("li",[a("p",[t._v("absolute：相对于最近的非 static 定位祖先元素的偏移，来确定元素位置，比如一个绝对定位元素它的父级、和祖父级元素都为relative，它会相对他的父级而产生偏移。")])]),t._v(" "),a("li",[a("p",[t._v("fixed：指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，比如那种回到顶部的按钮一般都是用此定位方式。")])]),t._v(" "),a("li",[a("p",[t._v("sticky：粘性定位，特性近似于relative和fixed的合体，其在实际应用中的近似效果就是IOS通讯录滚动的时候的『顶屁股』。")])])]),t._v(" "),a("h2",{attrs:{id:"如何理解z-index？✨"}},[t._v("如何理解z-index？✨")]),t._v(" "),a("p",[t._v("CSS 中的z-index属性控制重叠元素的垂直叠加顺序，默认元素的z-index为0，我们可以修改z-index来控制元素的图层位置，而且z-index只能影响设置了position值的元素。")]),t._v(" "),a("p",[t._v("我们可以把视图上的元素认为是一摞书的层叠，而人眼是俯视的视角，设置z-index的位置，就如同设置某一本书在这摞书中的位置。")]),t._v(" "),a("ul",[a("li",[t._v("顶部: 最接近观察者")]),t._v(" "),a("li",[t._v("...")]),t._v(" "),a("li",[t._v("3 层")]),t._v(" "),a("li",[t._v("2 层")]),t._v(" "),a("li",[t._v("1 层")]),t._v(" "),a("li",[t._v("0 层 默认层")]),t._v(" "),a("li",[t._v("-1 层")]),t._v(" "),a("li",[t._v("-2 层")]),t._v(" "),a("li",[t._v("-3 层")]),t._v(" "),a("li",[t._v("...")]),t._v(" "),a("li",[t._v("底层: 距离观察者最远")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/282998fe2501b87e23af0fba61d9077e.png",alt:"2019-06-14-02-19-16"}})]),t._v(" "),a("h2",{attrs:{id:"如何理解层叠上下文？✨"}},[t._v("如何理解层叠上下文？✨")]),t._v(" "),a("h3",{attrs:{id:"是什么？"}},[t._v("是什么？")]),t._v(" "),a("p",[t._v("层叠上下文是HTML元素的三维概念，这些HTML元素在一条假想的相对于面向（电脑屏幕的）视窗或者网页的用户的z轴上延伸，HTML元素依据其自身属性按照优先级顺序占用层叠上下文的空间。")]),t._v(" "),a("h3",{attrs:{id:"如何产生？"}},[t._v("如何产生？")]),t._v(" "),a("p",[t._v("触发一下条件则会产生层叠上下文：")]),t._v(" "),a("ul",[a("li",[t._v("根元素 (HTML),")]),t._v(" "),a("li",[t._v('z-index 值不为 "auto"的 绝对/相对定位，')]),t._v(" "),a("li",[t._v('一个 z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素 display: flex|inline-flex，')]),t._v(" "),a("li",[t._v("opacity 属性值小于 1 的元素（参考 the specification for opacity），")]),t._v(" "),a("li",[t._v('transform 属性值不为 "none"的元素，')]),t._v(" "),a("li",[t._v('mix-blend-mode 属性值不为 "normal"的元素，')]),t._v(" "),a("li",[t._v("filter值不为“none”的元素，")]),t._v(" "),a("li",[t._v("perspective值不为“none”的元素，")]),t._v(" "),a("li",[t._v('isolation 属性被设置为 "isolate"的元素，')]),t._v(" "),a("li",[t._v("position: fixed")]),t._v(" "),a("li",[t._v("在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值（参考 这篇文章）")]),t._v(" "),a("li",[t._v('-webkit-overflow-scrolling 属性被设置 "touch"的元素')])]),t._v(" "),a("blockquote",[a("p",[t._v("拓展阅读："),a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("层叠上下文-张鑫旭"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"清除浮动有哪些方法？"}},[t._v("清除浮动有哪些方法？")]),t._v(" "),a("ul",[a("li",[t._v("空div方法："),a("code",[t._v('<div style="clear:both;"></div>')])]),t._v(" "),a("li",[t._v("Clearfix 方法：上文使用.clearfix类已经提到")]),t._v(" "),a("li",[t._v("overflow: auto或overflow: hidden方法，使用BFC")])]),t._v(" "),a("blockquote",[a("p",[t._v("在flex已经成为布局主流之后，浮动这种东西越来越少见了，毕竟它的副作用太大")])]),t._v(" "),a("h2",{attrs:{id:"你对css-sprites的理解，好处是什么？"}},[t._v("你对css sprites的理解，好处是什么？")]),t._v(" "),a("h3",{attrs:{id:"是什么-？"}},[t._v("是什么 ？")]),t._v(" "),a("p",[t._v("雪碧图也叫CSS精灵， 是一CSS图像合成技术，开发人员往往将小图标合并在一起之后的图片称作雪碧图。")]),t._v(" "),a("h3",{attrs:{id:"如何操作？"}},[t._v("如何操作？")]),t._v(" "),a("p",[t._v("使用工具（PS之类的）将多张图片打包成一张雪碧图，并为其生成合适的 CSS。\n每张图片都有相应的 CSS 类，该类定义了background-image、background-position和background-size属性。\n使用图片时，将相应的类添加到你的元素中。")]),t._v(" "),a("h3",{attrs:{id:"好处："}},[t._v("好处：")]),t._v(" "),a("ul",[a("li",[t._v("减少加载多张图片的 HTTP 请求数（一张雪碧图只需要一个请求）")]),t._v(" "),a("li",[t._v("提前加载资源")])]),t._v(" "),a("h3",{attrs:{id:"不足："}},[t._v("不足：")]),t._v(" "),a("ul",[a("li",[t._v("CSS Sprite维护成本较高，如果页面背景有少许改动，一般就要改这张合并的图片")]),t._v(" "),a("li",[t._v("加载速度优势在http2开启后荡然无存，HTTP2多路复用，多张图片也可以重复利用一个连接通道搞定")])]),t._v(" "),a("h2",{attrs:{id:"你对媒体查询的理解？"}},[t._v("你对媒体查询的理解？")]),t._v(" "),a("h3",{attrs:{id:"是什么"}},[t._v("是什么")]),t._v(" "),a("p",[t._v("媒体查询由一个可选的媒体类型和零个或多个使用媒体功能的限制了样式表范围的表达式组成，例如宽度、高度和颜色。媒体查询，添加自CSS3，允许内容的呈现针对一个特定范围的输出设备而进行裁剪，而不必改变内容本身,非常适合web网页应对不同型号的设备而做出对应的响应适配。")]),t._v(" "),a("h3",{attrs:{id:"如何使用？"}},[t._v("如何使用？")]),t._v(" "),a("p",[t._v("媒体查询包含一个可选的媒体类型和，满足CSS3规范的条件下，包含零个或多个表达式，这些表达式描述了媒体特征，最终会被解析为true或false。如果媒体查询中指定的媒体类型匹配展示文档所使用的设备类型，并且所有的表达式的值都是true，那么该媒体查询的结果为true.那么媒体查询内的样式将会生效。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- link元素中的CSS媒体查询 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("media")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(max-width: 800px)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 样式表中的CSS媒体查询 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 600px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".facet_sidebar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("blockquote",[a("p",[t._v("拓展阅读："),a("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5848612.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解CSS Media媒体查询"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"你对盒模型的理解✨"}},[t._v("你对盒模型的理解✨")]),t._v(" "),a("h3",{attrs:{id:"是什么？-2"}},[t._v("是什么？")]),t._v(" "),a("p",[t._v("当对一个文档进行布局（lay out）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）。CSS 决定这些盒子的大小、位置以及属性（例如颜色、背景、边框尺寸…）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/14650bf5fbb24066cea1dc1714d52a5b.png",alt:"2019-06-14-04-15-49"}})]),t._v(" "),a("p",[t._v("盒模型由content（内容）、padding（内边距）、border（边框）、margin（外边距）组成。")]),t._v(" "),a("h2",{attrs:{id:"标准盒模型和怪异盒模型有什么区别？✨"}},[t._v("标准盒模型和怪异盒模型有什么区别？✨")]),t._v(" "),a("p",[t._v("在W3C标准下，我们定义元素的width值即为盒模型中的content的宽度值，height值即为盒模型中的content的高度值。")]),t._v(" "),a("p",[t._v("因此，标准盒模型下：")]),t._v(" "),a("blockquote",[a("p",[t._v("元素的宽度 = margin-left + border-left + padding-left + width + padding-right + border-right + margin-right")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/232580766e15853d521a4c0bf6a5c794.png",alt:"2019-06-14-04-25-26"}})]),t._v(" "),a("p",[t._v("而IE怪异盒模型（IE8以下）width的宽度并不是content的宽度，而是border-left + padding-left + content的宽度值 + padding-right + border-right之和，height同理。")]),t._v(" "),a("p",[t._v("在怪异盒模型下：")]),t._v(" "),a("blockquote",[a("p",[t._v("元素占据的宽度 = margin-left + width + margin-right")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/e427c6d19ea6be1359bd0177d7a5b7a3.png",alt:"2019-06-14-04-25-04"}})]),t._v(" "),a("p",[t._v("虽然现代浏览器默认使用W3C的标准盒模型，但是在不少情况下怪异盒模型更好用，于是W3C在css3中加入"),a("code",[t._v("box-sizing")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box // 标准盒模型\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box // 怪异盒模型\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" padding-box // 火狐的私有模型，没人用\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("blockquote",[a("p",[t._v("拓展阅读："),a("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5202597.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解盒模型"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"谈谈对bfc的理解✨"}},[t._v("谈谈对BFC的理解✨")]),t._v(" "),a("h3",{attrs:{id:"是什么？-3"}},[t._v("是什么？")]),t._v(" "),a("p",[t._v("书面解释：BFC(Block Formatting Context)这几个英文拆解")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Block: Block在这里可以理解为Block-level Box,指的是块级盒子的标准")])]),t._v(" "),a("li",[a("p",[t._v("Formatting context：块级上下文格式化，它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用")])])]),t._v(" "),a("p",[t._v("BFC是指"),a("strong",[t._v("一个独立的渲染区域，只有Block-level Box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干")]),t._v(".")]),t._v(" "),a("p",[t._v("它的作用是在"),a("strong",[t._v("一块独立的区域，让处于BFC内部的元素与外部的元素互相隔离")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"如何形成？"}},[t._v("如何形成？")]),t._v(" "),a("p",[t._v("BFC触发条件:")]),t._v(" "),a("ul",[a("li",[t._v("根元素，即HTML元素")]),t._v(" "),a("li",[t._v("position: fixed/absolute")]),t._v(" "),a("li",[t._v("float 不为none")]),t._v(" "),a("li",[t._v("overflow不为visible")]),t._v(" "),a("li",[t._v("display的值为inline-block、table-cell、table-caption")])]),t._v(" "),a("h3",{attrs:{id:"作用是什么？"}},[t._v("作用是什么？")]),t._v(" "),a("h4",{attrs:{id:"防止margin发生重叠"}},[t._v("防止margin发生重叠")]),t._v(" "),a("h4",{attrs:{id:"两栏布局，防止文字环绕等"}},[t._v("两栏布局，防止文字环绕等")]),t._v(" "),a("h2",{attrs:{id:"为什么有时候人们用translate来改变位置而不是定位？"}},[t._v("为什么有时候人们用translate来改变位置而不是定位？")]),t._v(" "),a("p",[t._v("translate()是transform的一个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此translate()更高效，可以缩短平滑动画的绘制时间。")]),t._v(" "),a("p",[t._v("而translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发生这种情况。")]),t._v(" "),a("blockquote",[a("p",[t._v("拓展阅读:"),a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS3 3D transform变换-张鑫旭"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"伪类和伪元素的区别是什么？"}},[t._v("伪类和伪元素的区别是什么？")]),t._v(" "),a("h3",{attrs:{id:"是什么？-4"}},[t._v("是什么？")]),t._v(" "),a("p",[t._v("伪类（pseudo-class） 是一个以冒号(:)作为前缀，被添加到一个选择器末尾的关键字，当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类。")]),t._v(" "),a("p",[t._v("伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过::before来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。")]),t._v(" "),a("h3",{attrs:{id:"区别"}},[t._v("区别")]),t._v(" "),a("h2",{attrs:{id:"你对flex的理解？✨"}},[t._v("你对flex的理解？✨")]),t._v(" "),a("p",[t._v("web应用有不同设备尺寸和分辨率，这时需要响应式界面设计来满足复杂的布局需求，Flex弹性盒模型的优势在于开发人员只是声明布局应该具有的行为，而不需要给出具体的实现方式，浏览器负责完成实际布局，当布局涉及到不定宽度，分布对齐的场景时，就要优先考虑弹性盒布局")]),t._v(" "),a("p",[t._v("\b\b> 具体用法移步阮一峰的"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("flex语法"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("flex实战"),a("OutboundLink")],1),t._v("，讲得非常通俗易懂，而且我们一两句话说不清楚。")]),t._v(" "),a("h2",{attrs:{id:"关于css的动画与过渡问题"}},[t._v("关于CSS的动画与过渡问题")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5391663.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解CSS动画animation"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5347930.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解CSS过渡transition"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("参考资料：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000014801021",target:"_blank",rel:"noopener noreferrer"}},[t._v("盒模型"),a("OutboundLink")],1)])]),t._v(" "),a("hr")])},[],!1,null,null,null);e.options.__file="css.md";s.default=e.exports}}]);