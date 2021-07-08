import {  configure } from "vee-validate";
import  i18n  from "./i18n";

import {  extend } from "vee-validate";
import * as rules from 'vee-validate/dist/rules';
import "./vee-validate"

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule]
    })
});
configure({
  defaultMessage: (field, values) => {
    // override the field name.
    values._field_ = i18n.t(`fields.${field}`);

    return i18n.t(`validation.${values._rule_}`, values);
  }
});
