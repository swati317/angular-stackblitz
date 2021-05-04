class AddCtrl {
  constructor($scope,$state) {
    'ngInject';

    $scope.bookname = "a";
    $scope.desc = "a";
    $scope.author = "a";

    $scope.addBook = function() {
      $scope.books.push({
        name: $scope.bookname,
        desc: $scope.desc,
        author: $scope.author
      });
      $scope.searched=false;
    };
  }
}

export default AddCtrl;