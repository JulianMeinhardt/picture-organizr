const { expect } = require('chai');
const { describe, it } = require('mocha');
const FolderModel = require('../../../../src/infrastructure/database/models/folder');

describe('Folder model', () => {
  it('should return a valid model', () => {
    const f = new FolderModel({ name: 'test-name', filepath: 'test-filepath' });
    expect(f).to.include({ name: 'test-name', filepath: 'test-filepath' });
  });
  it('should be invalid if name is empty', (done) => {
    const f = new FolderModel();

    f.validate((err) => {
      expect(err.errors.name).to.exist;
      done();
    });
  });
});
