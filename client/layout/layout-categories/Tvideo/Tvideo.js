import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import './Tvideotest.html';

Meteor.subscribe('tvideo');

Template.Tvideotest.created = function () {
 this.pagination = new Meteor.Pagination(TVideo, {
       sort: {
           _id: -1
       }
   });
}

Template.Tvideotest.helpers({
   templatePagination: function () {
       return Template.instance().pagination;
   },
 documents: function () {
   return Template.instance().pagination.getPage();
 }
});
