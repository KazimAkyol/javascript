//* ======================================================
//*                    (OOP)
//* Object Oriented Programming
//* ======================================================
//* object literals

const book1 = {
  title: "karamazov kardesler",
  yazar: "dostyevski",
  year: "1980",
  ozetFunction: function () {
    return `${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmistir`;
  },
};

console.log(book1.title);
console.log(book1.ozetFunction());

const book2 = {
  title: "yaprak dökümü",
  yazar: "resat nuri",
  year: "1960",
  ozetFunction: function () {
    return `${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmistir`;
  },
};

console.log(book2.ozetFunction());

