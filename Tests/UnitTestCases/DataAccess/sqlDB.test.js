const database = require('../../../DataAccess/sqlDB')
const executeSPOutput = require('../DataAccess/SPMetaData/versionInfoSPoutput.json')
const config = require('../../__mocks__/common-lib')
const service = require('../../../services/versionInfoservices')


test('Test versionInfo SQL storedProcedure ', async () => {
    var result = await database.executeStoredProcedure("versionInfo");
    expect(result).toEqual(executeSPOutput);
});


