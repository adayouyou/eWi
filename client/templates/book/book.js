Template.book.helpers({
    books: () => {
        return ChatUser.find();
    }
});
Template.book.events({
    'click li.list-group-item': (item) => {
        var data = item.currentTarget.title && item.currentTarget.title.split('&');
        console.log(data);
        // item.currentTarget.title  即可获取到当前点击的节点的title
        location.href = location.origin + `/context?userId=${data[0]}&friendName=${data[1]}`;
    }
});