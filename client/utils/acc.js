/**
 * Created by apple on 17/9/4.
 */
// 获取存在session 中当前登录用户信息
export function getUser() {
    let user = Session.get('USER');

    !user && Router.go('login');
    !user && alert('登录态失效,请重新登录');
    return user;
}
// 获取存在session 中当前对话的对方信息
export function getChatWith() {
    let friend = Session.get('FRIEND');

    !friend && Router.go('login');
    !friend && alert('发生未知错误');
    return friend;
}
