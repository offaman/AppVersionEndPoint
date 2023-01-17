const dbConnection = require('../DataAccess/sqlDBConnection');
const database = require('../database/sqlStoredProc')


module.exports.executeStoredProcedure = async (storedProcedureName) => {
    try {
        let connection = await dbConnection.createConnection();
        let result = await database.executeStoredProcedure(connection, storedProcedureName);
        return result;
    }
    catch (error) {
        console.log('error occurred while fetching items from database');
        throw error;
    }
}