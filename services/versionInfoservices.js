const sqlDB = require('../DataAccess/sqlDB')
const constants = require('../Utilities/constants')

module.exports.getversionInfo = async function(){
    let versionInfoData = await sqlDB.executeStoredProcedure(constants.STORED_PROCEDURES.getVersionInfo);
    return versionInfoData[0];
}