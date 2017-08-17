Template.login.onCreated(() => {
    this.users = {};
});

Template.login.helpers({
    users() {
        return Template.instance().users.get();
    },
});
Template.login.events({
    'submit form': function(e) {
        e.preventDefault();

        var user = {
            userName: $('#userName').val(),
            password: $('#password').val()
        };
        try {
            Session.set('USER', user);
        } catch (err) {
            throw new errors(err);
        } finally {
            Router.go('home', user)
        }
    }
});