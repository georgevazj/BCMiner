angular.module("bcminer")
    .factory("CypherResource", function($http) {
      return {
        getQuery: function(query){
          url = "http://192.168.99.100:7474/db/data/cypher/";
          return $http.post(url,'{"query": "' + query + '"}');
        }
      }
    })
