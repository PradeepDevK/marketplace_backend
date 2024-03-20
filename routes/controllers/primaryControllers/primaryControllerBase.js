/* jshint node: true */
/* jshint esnext: true */
'use strict';

const { AxException, eDic, mongooseDB, AxActionShowMessage } = require('../../general/_general');

class PrimaryControllerBase {
  constructor(userProfile) {
    this.user = { ...userProfile.user, profile: userProfile, language: userProfile.language || 'EN' }; // this is coming from legacy validator

    this.deletedStage = { 
      $match: { 
        $or: [
          { visible: { $exists: false } }, 
          { visible: true }
        ] 
      } 
    };
  }


  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  async validateWithSchema(schemaDoc) {
    const schemaErrors = await schemaDoc.validateSync();
    if (schemaErrors === undefined) return;

    const valuesRequired = [];
    for (const errorPath in schemaErrors.errors) {
      if (schemaErrors.errors[errorPath].kind === 'required') valuesRequired.push(schemaErrors.errors[errorPath].path);
    }

    if (valuesRequired.length === 1) throw new AxException(500, schemaErrors.message, [new AxActionShowMessage(`Value in field ${valuesRequired[0]} is required`)]);
    else throw new AxException(500, schemaErrors.message, [new AxActionShowMessage(`Values in fields ${valuesRequired.join(', ')} are required`)]);
  }
}

module.exports = PrimaryControllerBase;