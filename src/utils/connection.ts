const oracledb = require('oracledb')
const config = {
  user: 's.kokkiligadda',
  password: 'LYISdRhrzUYnRWM03hRNNPvb',
  connectString: 'oracle.cise.ufl.edu:1521/orcl'
}

export const OrclConnection = async () => {
    const conn = await oracledb.getConnection(config);
    return conn;
}