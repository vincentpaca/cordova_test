var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        window.open('https://teamclock.payrollhero.com/', '_blank', 'location=yes');
    },
};
