LaserBase.prototype.update_live_queries = function() {
  var db = this
  _.forEach( db.live_queries, function( query ) {
    query.result.length = 0 // in-place empty the array
    _.merge(
      query.result,
      _.where( query.collection.data, query.search_term )
    );
  })
}