import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './Slider.html';
//Este template llama al API de Stripe, es en su mayor parte poco de magia negra
Meteor.subscribe('cart');
Cart = new Mongo.Collection('cart');
//Magia
Template.Slider.onCreated( () => {
  cart_total();
  let template = Template.instance();
  template.selectedService  = new ReactiveVar( false );
//Magia Negra
  template.checkout = StripeCheckout.configure({
      key: Meteor.settings.public.stripe,
      image: 'imgs/computer-icon.png',
      locale: 'es',
      token( token ) {
        let service = template.selectedService.get(),
                  charge  = {
                    amount: token.amount || service.amount,
                    currency: token.currency || 'usd',
                    source: token.id,
                    description: token.description || service.description,
                    receipt_email: token.email
                  };
//Magia.com
                  Meteor.call( 'processPayment', charge, ( error, response ) => {
                      if ( error ) {
                        alert(error.reason);
                      } else {
                        alert('Compra realizada con exito!');
                        }
                          });
                          },
                          });
});

//Contacto leve con la magia negra
Template.Slider.helpers({
cartItems: ()=> {
return Cart.find({});
 },
 'set_total': function(){
  return Session.get('total');
}
});


Template.Slider.events({
  'submit form'(events) {
    event.preventDefault();
    var idc = event.target.idpc.value;
    Meteor.call('remove_cartItem', idc);
    cart_total();
    // var prod_nom=[Cart.find({_id:idc}).product_name];
    // var prod_p = [Cart.find({_id:idc}).product_price];
    // var prod_array = [];
    // var prod_desc = "";
    // for (var i = 0; i < Cart.find().count(); i++) {
    //   prod_array[i] = prod_nom[i] + " : $" + prod_p[i];
    //   prod_desc = prod_array[i] + " /// " + prod_array[i+1];
    // }
    // console.log(Cart.find({_id:idc}).product_name);
  },

  'click [data-service]' ( event, template ) {
    var ck = Session.get('total');
    if (Meteor.userId == null || ck == "0.00") {
     alert("No estas logeado o no hay nada en tu carrito de compras!");
      } else {
        var precio = Number(Session.get('total'));
        // Stripe solo acepta cantidades en centavos
        var precio_c = precio * 100;
        var pricing = {
          'stripe_checkout': {
            amount: precio_c,
            description: "Compra por stripe"
          }
        };
        //Magia
        let service = pricing[ event.target.dataset.service ];

           template.selectedService.set( service );

           template.checkout.open({
             name: 'Facturación Buy N Build',
             description: service.description,
             amount: service.amount,
           });
        }
    }



});
