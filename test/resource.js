var assert = require("assert")
var should = require("should")
var _ = root._ = require("lodash")
var LaserBase = require('../main.js')

describe('LaserBase', function(){

  var DB = new LaserBase()

  describe('default resource', function(){
    it('should create a new resource', function(){
      var res = new LaserBase.Resource()
    })

    // TODO: use proper stubs, not some boolean var magic!
    it('should use save method coming from adapter', function(){
      var exec = false
      var mock_obj = { id:1, prop:'Foo' }
      var MyAdapter = { save: function(){ exec = true } }
      var coll = DB.create_collection('thingsss', MyAdapter)
      coll.insert(mock_obj)
      var obj = coll.find(1)
      obj.should.eql(mock_obj)
      exec.should.be.false
      obj.save()
      exec.should.be.true
    })
  })

  // describe('save', function(){
  //   it('should be an function', function(){
  //     var res = DB.users.data[0]
  //     res.save.should.be.instanceof( Function )
  //     res.save()
  //   })
  //   it('should return a promise')
  // })

  describe('update', function(){
    it('should update live queries')
    it('should return a promise')
  })

})