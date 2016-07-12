//Settea el total para mandarselo a Stripe
  cart_total=function(){
    Meteor.call('get_cart_total', function(err, data) {
      if (err)
        console.log(err);
        var tot = JSON.stringify(data, ['total']);
        var totsubs= tot.substring(10, tot.length -2);
        var tot_n=Number(totsubs);
        var tot_n_r = Math.round(tot_n * 100) / 100
        //Chequeo si el total del carrito es un valor ilegal, ocurre cuando se cierra la pagina
        if (isNaN(tot_n_r)==true) {
        //Numero aceptable para el html
        Session.set('total', "0.00");
      }else {
        Session.set('total', tot_n_r);
      }
    });
  }
