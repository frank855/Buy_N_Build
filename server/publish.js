new Meteor.Pagination(Desktop);
new Meteor.Pagination(Harddrive);
new Meteor.Pagination(Powersupplies);
new Meteor.Pagination(Motherboard);

Meteor.publish('images', function desktopPublication() {
      return Images.find();
  });
Meteor.publish('cpu', function cpuPublication() {
      return Cpu.find();
  });
Meteor.publish('case', function CaseP(){
  return Case.find();
  });

Meteor.publish('tvideo', function tvideoP(){
  return TVideo.find();
});


Meteor.publish('ram', function ramP() {
        return Ram.find();
    });
