import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Desktop.html';
// Deben importar esto en sus js
import '../../../layout-components/Slider.html';
import '../../../layout-components/Slider.js';
// {{{-------------------------------------------}}}

// Subscripción de Paginación
Meteor.subscribe('desktop');
Template.Desktop.created = function () {
 this.pagination = new Meteor.Pagination(Desktop, {
       sort: {
        //  sorting por precio descendente
           precio: -1,
       }
   });
}

// helpers de paginación
Template.Desktop.helpers({
   templatePagination: function () {
       return Template.instance().pagination;
   },
  //  helper con la colección paginada puede llamarse como sea, solo llamenlo bn en su template
 documents: function () {
   return Template.instance().pagination.getPage();
 }
});

// Este evento lo deben añadir en sus js, basado en su template, fijense en donde esta el "form" en el html
Template.Desktop.events({
  'submit form'(events) {
    event.preventDefault();
    var user_id= Meteor.userId();
    //Esto lo sacan del html hay un textbox que esta hidden de esta manera accesan al registro que y lo pueden insertar
    //en la coleccion cart
    var id= event.target.idp.value;
    //Todas sus colecciones deben contar con nombre y precio
    var prod_nom = Desktop.findOne({_id:id}).nombre;
    var prod_precio = Desktop.findOne({_id:id}).precio;
    Meteor.call('addcart',id,prod_nom,prod_precio,user_id); //Metodo del servidor
    cart_total(); //Función global definida en lib/functions,js todos los js la pueden llamar
  }
});
