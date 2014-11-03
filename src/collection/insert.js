LaserBase.Collection.prototype.insert = function( record ) {
  var collection = this;
  if ( _.isArray( record ) ) {
    _.forEach( record, function( record ){
      collection.data.push( new collection.Resource( record ) )
    })
  } else {
    collection.data.push( new collection.Resource( record ) )
  }

  this.db_instance.update_live_queries();
}