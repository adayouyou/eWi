Template.context.helpers({
    posts: () => {
        return Posts.find();
    },
    /**
     *  判断当前登录帐户是聊天数据中的哪个
     */
    isMe: (item) => {
        /**
         *  使用meteor提供的帐户登录
         */
        // var name = Meteor.users.findOne().username;
        /**
         *  以下代码为帐户存在session中的处理逻辑
         */
        var name = Session.get('USER').userName;

        return item == name;
    }
});