// Main Pages
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

FlowRouter.route('/components',{
  name: 'desktop',
  action(){
    BlazeLayout.render('MainLayout', {main:'Components'});
  }
});

FlowRouter.route('/cpu',{
  name: 'cpu',
  action(){
    BlazeLayout.render('MainLayout', {main:'Cpu'});
  }
});

FlowRouter.route('/register',{
  name: 'register',
  action(){
    BlazeLayout.render('MainLayout', {main:'Register'});
  }
});

FlowRouter.route('/harddrive',{
  name: 'harddrive',
  action(){
    BlazeLayout.render('MainLayout', {main:'Harddrive'});
  }
});

FlowRouter.route('/powersupplies',{
  name: 'powersupplies',
  action(){
    BlazeLayout.render('MainLayout', {main:'Powersupplies'});
  }
});

FlowRouter.route('/motherboard',{
  name: 'motherboard',
  action(){
    BlazeLayout.render('MainLayout', {main:'Motherboard'});
  }
});
// Autoforms
FlowRouter.route('/desk_ins',{
  name: 'desk_ins',
  action(){
    BlazeLayout.render('MainLayout', {main:'Desktopbd_ins'});
  }
});

FlowRouter.route('/cpu_ins',{
  name: 'cpu_ins',
  action(){
    BlazeLayout.render('MainLayout', {main:'Cpubd_ins'});
  }
});

FlowRouter.route('/case',{
  name: 'case',
  action(){
    BlazeLayout.render('MainLayout', {main:'Case'});
  }
});

FlowRouter.route('/tvideo',{
  name:'tvideo',
  action(){
    BlazeLayout.render('MainLayout', {main:'tvideo'});
  }
});

FlowRouter.route('/hd_ins',{
  name: 'hd_ins',
  action(){
    BlazeLayout.render('MainLayout', {main:'Harddrivebd_ins'});
  }
});

FlowRouter.route('/ps_ins',{
  name: 'ps_ins',
  action(){
    BlazeLayout.render('MainLayout', {main:'Powersuppliesbd_ins'});
  }
});

FlowRouter.route('/mb_ins',{
  name: 'mb_ins',
  action(){
    BlazeLayout.render('MainLayout', {main:'Motherboardbd_ins'});
  }
});

FlowRouter.route('/ram',{
  name: 'ram',
  action(){
    BlazeLayout.render('MainLayout', {main:'Ram'});
  }
});
