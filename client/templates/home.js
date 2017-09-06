Template.home.onCreated(() => {
    // 使用meteor中提供的帐户登录
    // var checkUser =ChatUser.findOne();
    // var user = checkUser && checkUser.username;
    // 以下是之前使用session登录的
    // var user = Meteor.users.find();
    var user = Session.get('USER');
    if (!user) {
        console.log(location.host + '/login');
        Router.go('login');
    }
});