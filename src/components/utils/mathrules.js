const testRegex = (value, regex) => value.toString().match(regex);
const matchrules = {
  required: {
    rule: val => testRegex(val, /.+/),
  },
  max: {
    rule: (val, maxnum) => val.length <= maxnum,
  },
};

export default {
  matchrules,
};