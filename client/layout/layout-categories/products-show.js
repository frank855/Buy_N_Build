import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Desktop.html';
import './Cpu.html';
import './Casetest.html';
import './Tvideotest.html';
import './Harddrive.html';
import './Powersupplies.html';
import './Motherboard.html';
Meteor.subscribe('desktop');
Meteor.subscribe('images');
Meteor.subscribe('cpu');
Meteor.subscribe('case');
Meteor.subscribe('tvideo');
Meteor.subscribe('harddrive');
Meteor.subscribe('powersupplies');
Meteor.subscribe('motherboard');

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

Template.Casetest.helpers({
  case: ()=>{
    return Case.find({});
  }
});

Template.Tvideotest.helpers({
   tvideo: ()=>{
     return TVideo.find({});
   }
 });
 
 Template.Harddrive.helpers({
   harddrive: ()=>{
     return Harddrive.find({});
 }
  
 });
 
 Template.Powersupplies.helpers({
   powersupplies: ()=>{
     return Powersupplies.find({});
 }
 
 });
 
 Template.Motherboard.helpers({
   motherboard: ()=>{
     return Motherboard.find({});
 }
 
 });

