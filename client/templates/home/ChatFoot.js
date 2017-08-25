Template.ChatFoot.helpers({});
Template.ChatFoot.events({
    'submit form': (e) => {
        e.preventDefault();
        var chatCon = $('#chatCon');
        try {
            chatCon.val() && Posts.insert({
                userName: Session.get('USER').userName,
                message: chatCon.val(),
                submited: new Date()
            });
        } catch (err) {
            throw new Error(err);
        } finally {
            chatCon.val('');
        }

    }
});