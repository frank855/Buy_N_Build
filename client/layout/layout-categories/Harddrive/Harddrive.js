import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Harddrive.html';
Meteor.subscribe('harddrive');

Template.Harddrive.created = function () {
 this.pagination = new Meteor.Pagination(Harddrive, {
       sort: {
           _id: -1
       }
   });
}

Template.Harddrive.helpers({
   templatePagination: function () {
       return Template.instance().pagination;
   },
 documents: function () {
   return Template.instance().pagination.getPage();
 }
});
