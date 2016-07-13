import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Harddrive.html';
import '../../../layout-components/Slider.html';
import '../../../layout-components/Slider.js';

Meteor.subscribe('harddrive');

Template.Harddrive.created = function () {
 this.pagination = new Meteor.Pagination(Harddrive, {
       sort: {
           dd_precio: -1
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
// Este evento lo deben añadir en sus js, basado en su template, fijense en donde esta el "form" en el html
Template.Harddrive.events({
  'submit form'(events) {
    event.preventDefault();
    var user_id= Meteor.userId();
    //Esto lo sacan del html hay un textbox que esta hidden de esta manera accesan al registro que y lo pueden insertar
    //en la coleccion cart
    var id= event.target.idp.value;
    //Todas sus colecciones deben contar con nombre y precio
    var prod_nom = Harddrive.findOne({_id:id}).dd_nombre;
    var prod_precio = Harddrive.findOne({_id:id}).dd_precio;
    Meteor.call('addcart',id,prod_nom,prod_precio,user_id); //Metodo del servidor
    cart_total(); //Función global definida en lib/functions,js todos los js la pueden llamar
  }
});
