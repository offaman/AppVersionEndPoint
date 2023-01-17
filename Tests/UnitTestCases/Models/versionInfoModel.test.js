const versionInfoModel = require('../../../models/versionInfoOutputModel')
const versionInfoModelInput = require('../Models/versionInfoModelInput.json')
const versionInfoModelExpectedOutput = require('../Models/versionInfoModelOutput.json')


test('Test Output model for versionInfo', () => {
    let result = new versionInfoModel.versionInfo(versionInfoModelInput);    
    expect(result).toEqual(versionInfoModelExpectedOutput)
});