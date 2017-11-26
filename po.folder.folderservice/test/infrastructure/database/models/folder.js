const { expect } = require('chai');
const { describe, it } = require('mocha');
const Folder = require('../../../../src/infrastructure/database/models/folder');

describe('Folder model', () => {
  it();
  it('should be invalid if name is empty', (done) => {
    const f = new Folder();

    f.validate((err) => {
      expect(err.errors.name).to.exist;
      done();
    });
  });
});
