LaserBase.Collection.prototype.has_many = function( relation_name, opt ) {
  var related_collection = this.db_instance.collections[ relation_name ]

  // allows to call relationship methods directly on Resource instance
  this.Resource.prototype[relation_name] = function() {
    var search_query = {}
    search_query[ opt.fkey ] = this.id
    return related_collection.where( search_query )
  }
}