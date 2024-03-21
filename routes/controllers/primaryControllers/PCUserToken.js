/* jshint node: true */
/* jshint esnext: true */
'use strict';

const { AxException, AxActionShowMessage, eDic, mongooseDB } = require('../../general/_general');
const userTokenSchema = require('../../schemas/userTokenSchema');
const PrimaryControllerBase = require('./PrimaryControllerBase');


class PCUserToken extends PrimaryControllerBase {

  async getByToken(token) {
    const connection = await mongooseDB.getConnection('marketplace');
    const userTokenModel = connection.model('usertoken', userTokenSchema);
    const userTokenDoc = await userTokenModel.findOne({ token: token });
    return userTokenDoc;
  }

  async save(isNew, token, userId) {
    const connection = await mongooseDB.getConnection('marketplace');
    const userTokenModel = connection.model('usertoken', userTokenSchema);

    let userTokenDoc = null;
    if (isNew) {
      const plainObject = await this.validate(token, userId);
      userTokenDoc = new userTokenModel(plainObject);
    } else {
      userTokenDoc = await userTokenModel.findOne({ token: token });
      userTokenDoc.token = token;
      userTokenDoc.createdAt = Date.now();
      await this.validate(userTokenDoc.token, userTokenDoc.userId);
    }

    const userTokenDBDoc = await userTokenDoc.save();
    return userTokenDBDoc;
  }

  async validate(token, userId) {
    const connection = await mongooseDB.getConnection('marketplace');
    const userTokenModel = connection.model('usertoken', userTokenSchema);

    let userTokenDoc = new userTokenModel({ token, userId });
    await this.validateWithSchema(userTokenDoc);
    userTokenDoc = userTokenDoc.toObject();
    return userTokenDoc;
  }

}

module.exports = PCUserToken;