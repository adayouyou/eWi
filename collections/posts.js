import { mongo } from 'meteor/mongo'
Posts = new Mongo.Collection('posts');
Posts.allow({
    insert: function() {
        // 只允许登录用户添加帖子
        return true;
    },
    update: function(){
        return true;
    }
});