var Lab = require('lab')
  , bare = require('../lib/bare')
  , lab = exports.lab = Lab.script()
  , describe = lab.experiment
  , before = lab.before
  , it = lab.test
  , expect = Lab.expect;

describe('bare should exist and at least have a router', function () {
  it('it tests for object and functions', function (done) {

    bare.router.on('GET', '/', function() {});

    expect(bare).to.be.an('object');
    expect(bare.router._routes.get).to.be.an('array');
    expect(bare).to.have.property('router');
    expect(bare.router._routes.get[0]).to.have.property('handler');
    expect(bare.router._routes.get[0]).to.have.property('route');
    expect(bare.router.on).to.be.a('function');
    expect(bare.router.dispatch).to.be.a('function');

    done();
  })
})
