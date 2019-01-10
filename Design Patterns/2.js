var Book = function (id, bookname, price) {
  this.id = id;
  this.bookname = bookname;
  this.price = price;
}
Book.prototype = {
  display: function() {
    console.log ('display')
  }
}
var book = new Book(10, 'js', 45);
book.display = function () {
  console.log(2)
}
var book2 = new Book(23, 'kk', 34)
console.log(book.bookname);
console.log(book2.bookname);
book.display()
book2.display()