// import * as urls from '../../utils/url';
import * as acc from '../../utils/acc';
Template.context.onCreated(() => {
});
// 获取存在session 中当前登录用户信息
const user = acc.getUser();
// 获取存在session 中当前对话的对方信息
const friend = acc.getChatWith();

Template.context.helpers({
    friendName: () => {
        return friend.userName;
    },
    lists: () => {
        var arr = [];
        // 获取自己表中的聊天记录
        var list = Posts.findOne({userId: user.userId, chatWith: friend.userId}).lists;
        list.forEach((value, key) => {
            value.userId = user.userId;
            arr.push(value);
        });
        // 获取对方列表中 对方发出来的聊天信息
        var list_other = Posts.findOne({userId: friend.userId, chatWith: user.userId}).lists;
        list_other.forEach((value, key) => {
            value.userId = friend.userId;
            arr.push(value);
        });
        return arr.sort((a, b) => {
            return a.submited - b.submited;
        });
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
        return user.userId === item;
    }
});