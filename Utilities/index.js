const constants = require('../Utilities/constants')

function getCustomResponseObject(versionInfoModel){
    customPropertyObject = {}
    allkeys = Object.keys(versionInfoModel);
    for(let key=0; key<allkeys.length; key++){
        switch(allkeys[key]){
            case constants.CUSTOM_RESPONSE_KEYS.rx_dbVersion:
                customPropertyObject.rx_dbVersion = versionInfoModel.rx_dbVersion
                break;
            case constants.CUSTOM_RESPONSE_KEYS.trans_dbVersion:
                customPropertyObject.trans_dbVersion = versionInfoModel.trans_dbVersion
                break;
            case constants.CUSTOM_RESPONSE_KEYS.name:
                customPropertyObject.name = versionInfoModel.name
                break;
        }
    }
    return customPropertyObject;
}

module.exports ={getCustomResponseObject}