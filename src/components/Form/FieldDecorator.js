

import React from 'react';
import './index.less';
import utils from '../utils/mathrules';
export default class FieldDecorator {
  constructor() {
    this.isShowMessageInfo = false;
    this.saveRes = null;
    this.isError = false,
    this.obj = {};
  }
  validateFieldsError() {
    if(this.saveRes) {
      for (const key in this.saveRes) {
        if (this.saveRes.hasOwnProperty(key) && this.saveRes[key] === '') {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }

  }

  validateFields (fn) {
    this.isShowMessageInfo = true;
    if(this.validateFieldsError()) {
      fn(true, this.saveRes);
    } else {
      fn(false, this.saveRes);
    }

  }
  isValueEmpty(value) {
    return value === undefined || value === null ? '' : value;
  }
  isMatching(value,rules, errormessage) {
    const keyrules = Object.keys(rules);
    for(let i =0; i<keyrules.length; i++) {
      if(utils.matchrules.hasOwnProperty(keyrules[i])) {
        if(!utils.matchrules[keyrules[i]]['rule'](value, rules[keyrules[i]])) {
          return errormessage[keyrules[i]];
        }
      }
    }
  }
  message(key, parms) {
    let {rules,value,errormessage,} = parms;
    value = this.isValueEmpty(value);

    if(this.isShowMessageInfo) {
      const message = this.isMatching(value, rules[0], errormessage);


      this.obj[key] = value;
      this.saveRes = this.obj;
      return this.createErrorDom(key,message);

    }
  }
  createErrorDom(key,message) {
    return React.createElement(
      'div',
      {
        className:'beat-form-explain',
      },
      message,
    );
  }
}