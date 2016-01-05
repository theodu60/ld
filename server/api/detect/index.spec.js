'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var detectCtrlStub = {
  index: 'detectCtrl.index',
  show: 'detectCtrl.show',
  create: 'detectCtrl.create',
  update: 'detectCtrl.update',
  destroy: 'detectCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var detectIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './detect.controller': detectCtrlStub
});

describe('Detect API Router:', function() {

  it('should return an express router instance', function() {
    detectIndex.should.equal(routerStub);
  });

  describe('GET /api/detects', function() {

    it('should route to detect.controller.index', function() {
      routerStub.get
        .withArgs('/', 'detectCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/detects/:id', function() {

    it('should route to detect.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'detectCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/detects', function() {

    it('should route to detect.controller.create', function() {
      routerStub.post
        .withArgs('/', 'detectCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/detects/:id', function() {

    it('should route to detect.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'detectCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/detects/:id', function() {

    it('should route to detect.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'detectCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/detects/:id', function() {

    it('should route to detect.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'detectCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
