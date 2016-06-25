import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Desktop.html';
import './Cpu.html';
Meteor.subscribe('desktop');
Meteor.subscribe('images');
Meteor.subscribe('cpu');


Template.Desktop.helpers({
  desktop: ()=>{
    return Desktop.find({});
}
});

Template.Cpu.helpers({
  cpu: ()=>{
    return Cpu.find({});
}
});
