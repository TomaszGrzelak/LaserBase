LaserBase.Mappers.REST = {
  delete: function() {},
  update: function( data ) {
    _.merge( this, data )
    this.db_instance.update_live_queries();
  },
  save: function() {
    $http({method: 'POST', url: '/'}).
    success(function(data, status, headers, config) {
      console.log( 'success' )
    }).
    error(function(data, status, headers, config) {
      console.log( 'error' )
    });
  }
}