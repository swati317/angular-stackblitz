class HomeCtrl {
  constructor($scope, $state , BookSvc) {
    "ngInject";

    //this.name = "AngularJS";

    $scope.goTo = function() {
      $state.go('add');
    };

    $scope.result=[];

    $scope.searchByName=function(){
     // var keys=Object.keys($scope.books);
      $scope.result=$scope.books.filter(function(book){
        if(book.name.includes($scope.searchText) || book.desc.includes($scope.searchText) ||book.author.includes($scope.searchText))
        {
            return true;
          
        }
      })
      $scope.searched=true;
    }

    $scope.searched=false;
    $scope.searchText="";

    $scope.books = BookSvc.books;
  }
}

export default HomeCtrl;
