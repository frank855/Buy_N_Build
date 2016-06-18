
Meteor.subscribe('images');
Template.Images.helpers({
  images: ()=>{
    return Images.find({});
}
});


Template.Images.events({
  'change #img': function(event, template){
      event.preventDefault();
      FS.Utility.eachFile(event, function(file){
        Images.insert(file, function(err, fileObj){
          });
        });
        }
});
