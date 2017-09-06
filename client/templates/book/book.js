Template.book.helpers({
    books: () => {
        return ChatUser.find();
    }
});
Template.book.events({
    'click li.list-group-item': (item) => {
        var data = item.currentTarget.title && item.currentTarget.title.split('&');
        // item.currentTarget.title  即可获取到当前点击的节点的title
        // 使用session 存储当前聊天的朋友
        Session.set('FRIEND', {'userId': data[0], 'userName': data[1]});
        Router.go('context');
    }
});