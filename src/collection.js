LaserBase.Collection = function( opt ){
  this.db_instance = opt.db_instance // back-reference
  this.collection_name = opt.collection_name
  this.adapter = opt.adapter
  this.data = []
  this.Resource = function( data ){
    // copy data as own attributes
    _.merge( this, data )
  }
  this.Resource.prototype = this.adapter || LaserBase.BaseResource
  this.Resource.prototype.collection = this
}