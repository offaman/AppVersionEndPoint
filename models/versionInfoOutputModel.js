const constants = require('../Utilities/constants')

module.exports.versionInfo = class {
    constructor(versionInfoOutput) {
            this.application_version = versionInfoOutput.Version+"."+versionInfoOutput.Release+'.'+versionInfoOutput.Revision;
            this.minimum_rxdb_version = versionInfoOutput.MinRxDbVersion,
            this.minimum_transdb_version = versionInfoOutput.MinTransDbVersion,
            this.release_notes_url = versionInfoOutput.ReleaseNotesUrl,
            this.build_number = versionInfoOutput.BuildNumber,
            this.file_url = versionInfoOutput.FileName + constants.API_INFO.APPLICATION_FILE_PATH,
            this.rxdb_version = [],
            this.transdb_version = []
    }
};

