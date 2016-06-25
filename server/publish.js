Meteor.publish('desktop', function desktopPublication() {
    return Desktop.find();
  });
Meteor.publish('images', function desktopPublication() {
      return Images.find();
  });
Meteor.publish('cpu', function cpuPublication() {
      return Cpu.find();
  });
