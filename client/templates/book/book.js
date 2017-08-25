Template.book.helpers({
    books: () => {
        // console.log(ChatUser.findOne());
        console.log(ChatUser.find());
        return ChatUser.find();
    }
});