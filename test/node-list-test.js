const assert = require('chai').assert;
const List = require('../lib/node-list');
const StaticNode = require('../lib/static-node');

describe('Node List', function(){
  context('with default attributes', function(){
    var nodeList = new List();

    it('should have default attributes', function(){
      assert.equal(nodeList.head, null);
      assert.equal(nodeList.direction, null);
    });
  });

  context('with set attributes', function() {
    it('allows us to set attributes', function(){
      var options = { head: new StaticNode(), direction: "right" };
      var nodeList = new List(options);
      assert.instanceOf(nodeList.head, StaticNode);
      assert.equal(nodeList.direction, "right");
    });

    it('it handles only setting certain attributes', function(){
      var direction = "right";
      var options = {};
      options.direction = direction;
      var nodeList = new List(options);
      assert.equal(nodeList.head, null);
      assert.equal(nodeList.direction, "right");
    });
  });
});
