FlowRouter.route('/',{
  name: 'home',
  action(){
    BlazeLayout.render('Home');
  }
});

FlowRouter.route('/login',{
  name: 'login',
  action(){
    BlazeLayout.render('MainLayout', {main:'Login'});
  }
});

FlowRouter.route('/desktop',{
  name: 'desktop',
  action(){
    BlazeLayout.render('MainLayout', {main:'Desktop'});
  }
});

FlowRouter.route('/test',{
  name: 'test',
  action(){
    BlazeLayout.render('MainLayout', {main:'BDTest'});
  }
});

FlowRouter.route('/bd-cpu',{
  name: 'bd-cpu',
  action(){
    BlazeLayout.render('MainLayout', {main:'BD_cpu'});
  }
});

FlowRouter.route('/images',{
  name: 'images',
  action(){
    BlazeLayout.render('MainLayout', {main:'Images'});
  }
});
