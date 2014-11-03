LaserBase.Collection.prototype.where = function( search_term ) {
  var result = _.where( this.data, search_term )

  // save reference to result object
  this.db_instance.live_queries.push({
    collection: this,
    search_term: search_term,
    result: result
  })
  return result;
}