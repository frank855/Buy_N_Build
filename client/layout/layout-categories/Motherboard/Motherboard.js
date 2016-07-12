import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Motherboard.html';
Meteor.subscribe('motherboard');

Template.Motherboard.created = function () {
 this.pagination = new Meteor.Pagination(Motherboard, {
       sort: {
           _id: -1
       }
   });
}

Template.Motherboard.helpers({
   templatePagination: function () {
       return Template.instance().pagination;
   },
 documents: function () {
   return Template.instance().pagination.getPage();
 }
});