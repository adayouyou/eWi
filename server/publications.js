
//  对于要给客户端展示的数据,在这里过滤 比如:涉及安全的敏感信息
Meteor.publish('posts', (flag)=> {
    return Posts.find({}, {fields: {
        revoke: false
    }});
    // return Posts.find({revoke: flag});
});
Meteor.publish('chatuser', ()=> {
    return ChatUser.find();
});