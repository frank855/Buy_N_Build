import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Cart = new Mongo.Collection('cart');
});


Meteor.methods({
    'addcart': function(id, nom, precio, user){
      Cart.insert({
        product_id: id,
        product_name: nom,
        product_price: precio,
        user_id: user
       });
    },

    'remove_cartItem': function(id){
      Cart.remove({
        _id:id
      });
    },


    'get_cart_total': function(){
      var cart_total = [
        {$group: {_id: null, total: {$sum: "$product_price"}}}
    ];
      var result = Cart.aggregate(cart_total);
      return result;
    },

    processPayment( charge ) {
    var Stripe = StripeAPI( Meteor.settings.private.stripe);
    check( charge, {
      amount: Number,
      currency: String,
      source: String,
      description: String,
      receipt_email: String
    });

    let handleCharge = Meteor.wrapAsync( Stripe.charges.create, Stripe.charges ),
        payment      = handleCharge( charge );

    return payment;
  }
});

Meteor.publish('cart',function(){
	var currentUserId = this.userId;
	return Cart.find({user_id:currentUserId});
});
