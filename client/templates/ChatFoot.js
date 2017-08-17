Template.ChatFoot.helpers({});
Template.ChatFoot.events({
    'submit form': (e) => {
        e.preventDefault();
        var chatCon = $('#chatCon');
        // alert(Session.get('USER').userName);
        try {
            chatCon.val() && Posts.insert({
                userName: Session.get('USER').userName,
                message: chatCon.val()
            });
        } catch (err) {
            throw new Error(err);
        } finally {
            chatCon.val('');
        }

    }
});