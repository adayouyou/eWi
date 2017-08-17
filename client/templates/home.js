Template.home.onCreated(() => {
    var user = Session.get('USER');
    if (!user) {
        console.log(location.host + '/login');
        Router.go('login');
        // location.href = location.origin + '/login';
    }
});