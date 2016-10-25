(function() {
  angular.module('intro')
        .factory('TodoService', TodoService);

  TodoService.$inject = [];

  function TodoService(){
    var data = [
      'take a nap',
      'take another nap',
      'get some milk',
      'win the lotto'
    ];
    return {
      get: get,
      create: create,
      update: update,
      delete: remove
    };

    function get(){
      return data;
    }
    function create(description){
      data.push(description);
    }
    function update(index, newDescription){
      data.splice(index, 1, newDescription);
    }
    function remove(index){
      data.splice(index, 1);
    }
  }
}());
