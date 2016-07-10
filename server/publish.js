new Meteor.Pagination(Desktop);

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

Meteor.publish('harddrive', function harddrivePub() {
      return Harddrive.find();
  });

Meteor.publish('powersupplies', function powersuppliesPub() {
      return Powersupplies.find();
  });

Meteor.publish('motherboard', function motherboardPub() {
      return Motherboard.find();
  });


Meteor.publish('ram', function ramP() {
        return Ram.find();
    });
