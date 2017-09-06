import * as acc from '../../utils/acc';
Template.ChatFoot.events({
    'submit form': (e) => {
        e.preventDefault();
        // 获取存在session 中当前登录用户信息
        const user = acc.getUser();
        // 获取存在session 中当前对话的对方信息
        const friend = acc.getChatWith();
        var chatCon = $('#chatCon');
        try {
            var list = Posts.findOne({"userId": user.userId, "chatWith":friend.userId});
            if (list) { // update
                chatCon.val() && Posts.update(
                    {
                        _id: list._id
                    },{
                        $push: {
                            "lists": {
                                "message": chatCon.val(),
                                "submited": new Date().getTime()
                            }
                        }
                    },
                );
            } else {  // insert
                chatCon.val() && Posts.insert({
                    "userId": user.userId,
                    "chatWith": friend.userId,
                    "lists": [{
                        message: chatCon.val(),
                        submited: new Date().getTime()
                    }]
                });
            }
        } catch (err) {
            throw new Error(err);
        } finally {
            chatCon.val('');
        }

    }
});