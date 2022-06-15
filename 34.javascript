可以通过JavaScript来表示网页与用户之间的 行为交互
JavaScript能改变HTML值、还能改变图片的src属性。还可以表单验证！

一、JavaScript的引入方式
  1.内部脚本： 将js代码定义在HTML页面中
  2.外部脚本： 将js代码定义在外部js文件中，然后引入到HTML页面中
1.内部脚本： JavaScript代码必须在<script>之间被包裹。
<script>alert()</script> 警告框
一般将js标签放在body标签下方！

2.外部标签
  定义一个js文件，比如 demo.js  里面写 alert（""）//产生警告框
  然后在目标HTML文件中 引入 <script src="文件目录地址"></script>
二、JavaScript基础语法
  1.书写语法：JavaScript与java类似 区分大小写，但是分号可有可无！！！！！！但是一般要写上
  注释与java一模一样
2.输出语句：
使用window.alert() 写入警告框
document.write() 写入HTML输出
console.log() 写入浏览器控制台
  3.变量 用var关键字 声明变量
JavaScript是一个弱类型的语言 变量可以存放不同类型的值
使用var关键字声明的变量 作用域很大 相当于是一个全局变量似的。且可以重复定义！
ECMAscript 新增let关键字：
  但是let关键字定义的变量 相当于一个局部变量 在{}里面可以访问到 外面就访问不到了，且不允许重复声明。
  还有const关键字，一个常量、只读，且一旦声明值就不能改变。

4.数据类型
主要分为 原始类型和引用类型
5中原始类型
1） number 数字  整数小数都可以
2） string 字符串 单双引都可以
3） boolean 布尔
4） null  对象为空
5） undefined   当声明的变量未初始化时 变量的默认值是undefined

可以使用typeof（变量名）查看是什么类型 
  运算符：++ --、算术运算符、关系运算符（有一个三等于 ===）、逻辑运算符、
JavaScript中的类型转换：
  1.其他类型转number：字符串（按照字符串的字面值 转为数字 如果不是数字 则转为NAN 一般使用parseInt（））、布尔（true为1 false为0）
  2.其他类型转bool：数字（0和NAN转为false 其他数字都会转为true）、 字符串（空字符串转为false、非空转为true）、null（转为false）、undefined（转为false）
流程控制语句与java中的一模一样
    函数：被设计为执行特定任务的代码块！！！
定义格式：function 方法名称（参数1，参数2，...）{要执行的代码}
调用格式： 函数名称（实际参数列表）
在js中函数调用可以传递任意个参数（但是结果会有问题）
 6.JavaScript对象！Array、String对象
1）Array
 定义： var 变量名=new Array（元素列表）； 或者 var 变量名=[元素列表]  
 push（）添加元素的方法
 splice（）删除元素的方法
2）String 
定义  直接 var str="xxx"
 JavaScript可以自定义对象！！！
  var 对象名称={属性名称：属性值1，属性名称2：属性值2，函数名称：function（形参列表）{}}
JavaScript中一些特殊对象！！！
  1.BOM： Browser Object Model 浏览器对象模型
JavaScript将浏览器的各个组成部分封装为对象
  1.window  窗口对象
    获取，直接用window 
    属性： 可以使用window对象获取其他BOM对象
    方法： alert（ 弹出一个警告框 ）、confirm（弹出一个带有确认和取消按钮的对话框）、setInterval（按照指定周期来调用函数或计算表达式 ）、setTimeout（指定时间后调用函数）
    【格式： setTimeout（function，毫秒值）、setInterval（function，毫秒值）】
  2.navigator  浏览器对象
  3.Screen 显示器屏幕
  4.History 历史记录
  5.Location  地址栏对象
BOM还有History对象和Location对象
获取： history.方法（）
方法：back（）加载history列表的前一个URL
forward（） 加载history列表的后一个URL
Location对象 
  获取：Location.方法名（）
属性：href（） 设置或返回完整的URL

DOM 文档对象模型
  将标记语言的各个组成部分封装成对象。
  1.Document 整个文本对象
  2.Element 元素对象
  3.Attribute：属性对象
  4.Text：文本对象
  5.Comment：注释对象
JavaScript可以通过DOM对HTML进行操作：操作包含：改变HTML 元素内容、改变样式、对HTMLDOM事件 作出反应、添加和删除HTML
  1.获取Element对象  通过Document对象直接获取
  2.常见HTML Element对象的使用
一、获取Element对象：
getElementById
getElementsByTagName
getElementsByName
getElementsByClassName
获取元素对象后，可以通过style属性设置css样式 也可以通过innerHTML设置元素内容  主要就是查文档
  事件监听！！！！
什么是事件？
发生在HTML元素上的事情：例如，按钮被点击、鼠标移动到元素上面、按下键盘按键
事件监听：JavaScript可以在事件被侦测到时执行某些代码 
  事件绑定：方式1： 通过HTML标签中的时间属性进行绑定
例如： <input type="button" onclick="on" value="开灯">
  function on（）{alert("我被点击了！")}
方式2：通过DOM元素属性绑定
<input type="button" id ="btn">
  document.getElementById("btn").onclick=function(){alert("我被点击了！")}
常见事件：onclick、onblur（元素失去焦点）、onfocus（元素获得焦点）、onsubmit（表单提交时触发）、onkeydown（键盘被按下）、onmouseover（鼠标在某元素之上）、onmouseout（鼠标从某元素移开）
