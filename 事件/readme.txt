1.DOM2级事件规定的事件流的三个阶段：捕获，目标，冒泡（IE8以及更早版本不支持DOM事件流）;

2.event.stopPropagation(); 
事件处理过程中，阻止了事件冒泡，但不会阻击默认行为（它就执行了超链接的跳转）

3.return false;
事件处理过程中，阻止了事件冒泡，也阻止了默认行为（比如刚才它就没有执行超链接的跳转）
还有一种有冒泡有关的：

4.event.preventDefault(); 
如果把它放在头部A标签的click事件中，点击“点击我”。
会发现它依次弹出：我是最里层---->我是中间层---->我是最外层，但最后却没有跳转到百度
它的作用是：事件处理过程中，不阻击事件冒泡，但阻击默认行为（它只执行所有弹框，却没有执行超链接跳转）

什么是事件委托
也就是：利用冒泡的原理，把事件加到父级上，触发执行效果。