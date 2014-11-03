LaserBase.Collection.prototype.belongs_to = function( relation_name, opt ) {
  var related_collection = this.db_instance.collections[ relation_name ]

  // allows to call relationship methods directly on Resource instance
  this.Resource.prototype[opt.singular] = function() {
    return related_collection.where({ id: this[ opt.singular + '_id' ] })[0]
  }
}