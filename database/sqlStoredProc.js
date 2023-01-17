async function executeStoredProcedure(connection,spName){
    try{
        let request = connection.request();
        let result = await request.execute(spName);
        return result.recordsets[0];
    }catch(err){
        throw err;
    }
}

module.exports = {executeStoredProcedure}