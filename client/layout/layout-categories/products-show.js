import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Cpu.html';


Meteor.subscribe('images');
Meteor.subscribe('cpu');

Template.Cpu.helpers({
  cpu: ()=>{
    return Cpu.find({});
}
});
