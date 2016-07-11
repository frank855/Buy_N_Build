import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Cpu.html';
import './Casetest.html';
import './Tvideotest.html';

import './Ramtest.html';


Meteor.subscribe('images');
Meteor.subscribe('cpu');
Meteor.subscribe('case');
Meteor.subscribe('tvideo');

Meteor.subscribe('ram');

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

Template.Ramtest.helpers({
ram:()=>{
return Ram.find({});
}
});
