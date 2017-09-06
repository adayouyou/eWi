Template.login.events({
    'submit form': function(e) {
        e.preventDefault();

        // console.log(Meteor.users.findOne());

        /**
         *  以下代码为帐户存在session中的处理逻辑
         */
        var user = {
            userId: $('#userName').val(),
            password: $('#password').val()
        };
        try {
            // 校验数据库是否存在
            var search =ChatUser.findOne({'userId': user.userId,'password':user.password});
            console.log(search.userId);
            if (search.userId) {
                console.log(search.userId);
                Session.set('USER',{"userId": search.userId, "userName": search.userName});
                // Meteor.users.insert({"userId": search.userId, "userName": search.userName});
                // Session.set('USER', user);
                Router.go('home');
            } else {
                alert('您输入的账号或密码错误,请重新输入');
                $('#password').val('')
            }
        } catch (err) {
            throw new Errors(err);
        } finally {

        }
    }
});