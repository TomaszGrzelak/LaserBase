LaserBase.Collection = function( opt ){
  this.db_instance = opt.db_instance // back-reference
  this.collection_name = opt.collection_name
  this.mapper = opt.mapper
  this.data = []
  this.Resource = function( obj_properties ){
    // copy data as own attributes
    _.merge( this, obj_properties )
  }
  this.Resource.prototype = opt.mapper || LaserBase.Mappers.REST
  this.Resource.prototype.collection = this
}