import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import './Casetest.html';

Meteor.subscribe('Case');

Template.Casetest.created = function () {
 this.pagination = new Meteor.Pagination(Case, {
       sort: {
           _id: -1
       }
   });
}

Template.Casetest.helpers({
   templatePagination: function () {
       return Template.instance().pagination;
   },
 documents: function () {
   return Template.instance().pagination.getPage();
 }
});
