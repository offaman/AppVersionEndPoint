const database = require('../../../DataAccess/sqlDB')
const executeSPOutput = require('../DataAccess/SPMetaData/versionInfoSPoutput.json')
const config = require('../../__mocks__/common-lib')
const service = require('../../../services/versionInfoservices')



test('Test service for versionInfo', async () => {
    await expect(service.getversionInfo()).resolves.toBe();
});