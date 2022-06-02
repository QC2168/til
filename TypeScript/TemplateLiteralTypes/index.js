// 例如现在有一个对象
var TemplateLiteralType;
(function (TemplateLiteralType) {
    var joke = {
        name: 'joke',
        age: 18
    };
    // 现在，我们想给定一个方法，给joke传入一个on事件传入回调函数，使得他可以改动里面的属性
    var person = makeWatchedObject(joke);
    person.on('updateage', function (e) { return console.log(e); });
    person.on2('updatename', function (e) { return console.log(e); });
})(TemplateLiteralType || (TemplateLiteralType = {}));
