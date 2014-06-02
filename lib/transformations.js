Application = (function() {
    function Application() {}

    return Application;

})();


Transformations = {
    application: function(application) {
        if (application instanceof Application || !application) {
            return application;
        } else {
            return new Application(application);
        }
    }
};
