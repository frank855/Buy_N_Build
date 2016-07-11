new Meteor.Pagination(Desktop);
new Meteor.Pagination(Harddrive);
new Meteor.Pagination(Powersupplies);
new Meteor.Pagination(Motherboard);
new Meteor.Pagination(Case);
new Meteor.Pagination(TVideo);
new Meteor.Pagination(Ram);

Meteor.publish('images', function desktopPublication() {
      return Images.find();
  });

Meteor.publish('cpu', function cpuPublication() {
      return Cpu.find();
  });
