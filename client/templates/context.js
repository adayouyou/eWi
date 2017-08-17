Template.context.helpers({
    posts: () => {
        return Posts.find();
    },
    isMe: (item) => {
        var name = Session.get('USER').userName;

        return item == name;
    }
});
Template.context.onCreated( () => {
    // this.user = Session.get('USER');
});
//
// Template.context.events({});
