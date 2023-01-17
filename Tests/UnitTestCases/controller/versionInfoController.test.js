const versionInfo = require('../../../AppVersionInfo/index')
jest.setTimeout(90000);


let mockContext = {};

test('Test versionInfo controller', async () => {
    var request = {
        method: 'GET',
        body: {}
    };
    await versionInfo(mockContext, request);
    expect(mockContext.res.status).toEqual(200);
});