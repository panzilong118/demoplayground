/*
  20行代码实现JavaScript模板引擎
  https://juejin.im/post/59663eaa6fb9a06ba73d4c35
*/

/*
  简单的模版 实现思路
  1.正则匹配
  2.然后使用RegExp.prototype.exec()方法, 将所有匹配的字符串存进一个数组中.
  3.使用while循环，处理所有匹配项
  4.用真实的数据取代占位符. 最简单的方式是使用String.prototype.replace()方法实现
*/
// var TemplateEngine = function(tpl, data) {
//     // magic here ...
//     var re = /<%([^%>]+)?%>/g,
//         match;
//     while(match = re.exec(tpl)) {
//         tpl = tpl.replace(match[0], data[match[1]])
//     }
//     return tpl;
// }
// var template = '<p>Hello, my name is <%name%>. I\'m <%age%> years old.</p>';
// console.log(TemplateEngine(template, {
//     name: "Krasimir",
//     age: 29
// }));

/*
  更复杂的多层嵌套对象 实现思路
  1.使用new Function()语法, 构造函数
  2.思考如何构建我们所需的函数体
  3.不要将所有内容添加到数组中, 而只将所需的内容添加, 最后合并数组
  4.The code variable holds the body of the function.
  It starts with definition of the array.
  As I said, cursor shows us where in the template we are.
  We need such a variable to go through the whole string and skip the data blocks
  5.An additional add function is created.
  It's job is to append lines to the code variable.
  6.this.name和this.profile.age不应该被双引号引起.
  可以这样改进add函数来解决这个问题，增加条件字段
  7.然后我们需要做的就是创建这个函数并执行. 在TemplateEngine函数中不返回tpl, 而是返回我们动态创建的函数
  不要在函数中直接传入参数, 利用apply方法调用该函数并传入参数.
  这样才会创建正确的作用域, this.name才可正确执行, 此时this指向data对象.
*/

// var TemplateEngine = function(tpl, data) {
//     // magic here ...
//     var re = /<%([^%>]+)?%>/g,
//         code = 'var r=[];\n',
//         cursor = 0,
//         match;
//     var add = function(line, js) {
//         js ? code += 'r.push(' + line + ');\n' :
//         code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
//     }
//     while(match = re.exec(tpl)) {
//         add(tpl.slice(cursor, match.index));
//         add(match[1], true); // <-- say that this is actually valid js
//         cursor = match.index + match[0].length;
//     }
//     add(tpl.substr(cursor, tpl.length - cursor));
//     code += 'return r.join("");'; // <-- return the result
//     console.log(code);
//     return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
// }
// var template = '<p>Hello, my name is <%this.name%>. I\'m <%this.profile.age%> years old.</p>';
// var res = TemplateEngine(template, {
//     name: "Krasimir",
//     profile: { age: 29 }
// });

// 思路3
// const skills = ['html', 'css', 'js'];
// var r = [];
// r.push('My skills:');
// for(var index in skills) {
//   r.push('<a href="">');
//   r.push(skills[index]);
//   r.push('</a>');
// }
// const res = r.join('');

// 思路1
// Function 构造函数
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function

/*
  增加 if/else声明以及循环 思路
  1.包含for循环的那行代码不应该被添加到数组中
  2.增加正则表达式判断for | if | else 等
  3.匹配后进行条件判断
*/

var TemplateEngine = function(tpl, data) {
    // magic here ...
    var re = /<%([^%>]+)?%>/g,
        reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
        code = 'var r=[];\n',
        cursor = 0,
        match;
    var add = function(line, js) {
        js ? code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n' :
        code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
    }
    while(match = re.exec(tpl)) {
        add(tpl.slice(cursor, match.index));
        add(match[1], true); // <-- say that this is actually valid js
        cursor = match.index + match[0].length;
    }
    add(tpl.substr(cursor, tpl.length - cursor));
    code += 'return r.join("");'; // <-- return the result
    console.log(code);
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
}
// var template =
//   'My skills:' +
//   '<%for(var index in this.skills) {%>' +
//   '<a href="#"><%this.skills[index]%></a>' +
//   '<%}%>';
// var res = TemplateEngine(template, {
//     skills: ["js", "html", "css"]
// });

var template =
  'My skills:' +
  '<%if(this.showSkills) {%>' +
      '<%for(var index in this.skills) {%>' +
      '<a href="#"><%this.skills[index]%></a>' +
      '<%}%>' +
  '<%} else {%>' +
      '<p>none</p>' +
  '<%}%>';
var res = TemplateEngine(template, {
    skills: ["js", "html", "css"],
    showSkills: false
});
