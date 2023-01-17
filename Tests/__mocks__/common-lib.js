const database = require('../../DataAccess/sqlDBConnection')
const sqlDBstoredProcedures = require('../../database/sqlStoredProc')

const mockConnection = {
    connect: jest.fn().mockResolvedValue()
};

database.createConnection = jest.fn().mockResolvedValue(mockConnection);


sqlDBstoredProcedures.executeStoredProcedure = jest.fn((connection, spName) => {
    const executeSP_Metadata = require('../../Tests/UnitTestCases/DataAccess/SPMetaData/versionInfoSPoutput.json');
    switch (spName) {
        case "versionInfo":
            return executeSP_Metadata;
    }
});