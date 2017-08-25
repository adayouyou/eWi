Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: () => { return Meteor.subscribe('posts'); }
});
Router.route('/', { name: 'home' });
Router.route('/login', { name: 'login' });
Router.route('/book', {
    name: 'book',
    waitOn: () => { return Meteor.subscribe('chatuser'); }
});
Router.route('/find', { name: 'find' });
Router.route('/person', { name: 'person' });