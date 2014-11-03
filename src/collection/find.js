// Get resource with matching ID
LaserBase.Collection.prototype.find = function( id ) {
  return _.find( this.data, { id: id } )
}