require('dotenv').config();
const { dbConnection } = require('../../src/database/config');

before(async () => {
   await dbConnection();
});