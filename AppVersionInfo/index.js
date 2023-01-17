const versionInfoServices = require('../services/versionInfoservices')
const versionInfoOutputModel = require('../models/versionInfoOutputModel')

module.exports = async function (context, req) {
    try{
        let apiVersionDbResponse = await versionInfoServices.getversionInfo();
        let apiVersionInfo =  new versionInfoOutputModel.versionInfo(apiVersionDbResponse);
        context.res = {
            status: 200,
            body: apiVersionInfo
        };
    }
    catch(error){
        context.res = {
            body:"Error"
        };
    }  
}