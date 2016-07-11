import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Powersupplies.html';
Meteor.subscribe('powersupplies');

Template.Powersupplies.created = function () {
 this.pagination = new Meteor.Pagination(Powersupplies, {
       sort: {
           _id: -1
       }
   });
}

Template.Powersupplies.helpers({
   templatePagination: function () {
       return Template.instance().pagination;
   },
 documents: function () {
   return Template.instance().pagination.getPage();
 }
});
