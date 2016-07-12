import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import './Ramtest.html';

Meteor.subscribe('ram');

Template.Ramtest.created = function () {
 this.pagination = new Meteor.Pagination(Ram, {
       sort: {
           _id: -1
       }
   });
}

Template.Ramtest.helpers({
   templatePagination: function () {
       return Template.instance().pagination;
   },
 documents: function () {
   return Template.instance().pagination.getPage();
 }
});
