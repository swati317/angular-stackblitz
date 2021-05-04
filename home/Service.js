class BookSvc {
  constructor($scope,$state) {
    'ngInject';

    this.books=[
      {
      name:"abcd",
      desc:"abcd desc",
      author:"abcd author"
    }
    ];

  }
}

export default BookSvc;