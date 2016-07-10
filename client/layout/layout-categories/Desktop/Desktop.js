import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Desktop.html';
Meteor.subscribe('desktop');

Template.Desktop.created = function () {
 this.pagination = new Meteor.Pagination(Desktop, {
       sort: {
           _id: -1
       }
   });
}

Template.Desktop.helpers({
   templatePagination: function () {
       return Template.instance().pagination;
   },
 documents: function () {
   return Template.instance().pagination.getPage();
 }
});
