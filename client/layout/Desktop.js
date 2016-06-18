import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Desktop.html';
Meteor.subscribe('desktop');

Template.Desktop.helpers({
  desktop: ()=>{
    return Desktop.find({});
}

});
