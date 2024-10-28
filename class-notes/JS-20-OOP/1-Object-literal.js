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
    return `${this.title} kitabini {this.year} yilinda ${this.yazar} yazmistir`;
  },
};
