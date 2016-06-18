Meteor.publish('desktop', function desktopPublication() {
    return Desktop.find();
  });
Meteor.publish('images', function desktopPublication() {
      return Images.find();
  });
