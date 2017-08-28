Template.login.events({
    'submit form': function(e) {
        e.preventDefault();

        // console.log(Meteor.users.findOne());

        /**
         *  以下代码为帐户存在session中的处理逻辑
         */
        var user = {
            userName: $('#userName').val(),
            password: $('#password').val()
        };
        try {
            // 校验数据库是否存在
            var search =ChatUser.find({userName: user.userName});
            Session.set('USER', search);
        } catch (err) {
            throw new errors(err);
        } finally {
            Router.go('home', user)
        }
    }
});