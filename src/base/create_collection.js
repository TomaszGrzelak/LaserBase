LaserBase.prototype.create_collection = function( collection_name, mapper ){
  this.collections[ collection_name ] = new LaserBase.Collection({
    collection_name: collection_name,
    db_instance: this,
    mapper: mapper
  });
  // create shorthand access
  this[ collection_name ] = this.collections[ collection_name ]
  return this.collections[ collection_name ]
}