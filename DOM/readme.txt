1.document.getElementById()    根据Id获取元素节点
2.document.getElementsByName()    根据name获取元素节点
3.document.getElementsByTagName()    根据HTML标签名获取元素节点，注意getElements***的选择器返回的是一个NodeList对象，能根据索引号选择其中1个，可以遍历输出
4.document.getElementsByClassName()    根据class获取元素节点
5.document.querySelector()    //根据CSS选择器的规则，返回第一个匹配到的元素
6.document.querySelectorAll()
7.parentNode    获取该节点的父节点    
8.childNodes    获取该节点的子节点数组
9.firstChild    获取该节点的第一个子节点
10.lastChild    获取该节点的最后一个子节点
11.nextSibling    获取该节点的下一个兄弟元素
12.previoursSibling    获取该节点的上一个兄弟元素
13.nodeType    节点的类型，9代表Document节点，1代表Element节点，3代表Text节点，8代表Comment节点，11代表DocumentFragment节点
14.nodeVlue    Text节点或Comment节点的文本内容
15.nodeName    元素的标签名(如P,SPAN,#text(文本节点),DIV)，以大写形式表示
16.firstElementChild        第一个子元素节点
17.lastElementChild        最后一个子元素节点
18.nextElementSibling        下一个兄弟元素节点
19.previousElementSibling    前一个兄弟元素节点
20.childElementCount        子元素节点个数量
21.getAttribute();    //注意这两个方法是不必理会javascript保留字的，HTML属性是什么就怎么写。
22.setAttribute();
23.attributes属性  非Element对象返回null，Element一半返回Attr对象。Attr对象是一个特殊的Node,通过name与value获取属性名称与值。
24.innerText、textContent    innerText与textContent的区别，当文本为空时，innerText是""，而textContent是undefined
25.document.createTextNode()    创建一个文本节点
26.document.createElement()    创建一个元素节点
27.appendChild()    //将一个节点插入到调用节点的最后面
28.insertBefore()    //接受两个参数，第一个为待插入的节点，第二个指明在哪个节点前面，如果不传入第二个参数，则跟appendChild一样，放在最后。
29.removeChild();    由父元素调用，删除一个子节点。注意是直接父元素调用，删除直接子元素才有效，删除孙子元素就没有效果了。
30.replaceChild()    //删除一个子节点，并用一个新节点代替它，第一个参数为新建的节点，第二个节点为被替换的节点