define(['backbone', 'JST', 'q', 'bootstrap', 'app'], function(Backbone, templates, Q, BS, app) {

    var GlobalGuiView = Backbone.View.extend({

        el: '#global',
        template: templates['app/Templates/GlobalGui'],
        events: {
            'click #gotoFly': 'gotoFly',
            'click #gotoHome': 'gotoHome'
        },
        render: function() {
            this.$el.html(this.template);
            this.bindGrowlNotifications();
            return this;
        },

        renderRoutineStartedModalOverride: function() {
            $('#routineStartedModalOverride').modal({
                backdrop: 'static', // forbid dismiss by click
                keyboard: false // forbid dismiss by escape
            });
        },

        renderRoutineEndedModalOverride: function() {
            $('#routineEndedModalOverride').modal({
                backdrop: 'static', // forbid dismiss by click
                keyboard: false // forbid dismiss by escape
            });
        },

        renderLostServerConnection: function() {
            $('#lostServerConnection').modal({
                backdrop: 'static', // forbid dismiss by click
                keyboard: false // forbid dismiss by escape
            });
        },

        gotoFly: function() {
            app.router.navigate('mission/fly', {
                trigger: true
            });
        },

        gotoHome: function() {
            app.router.navigate('', {
                trigger: true
            });
        },

        bindGrowlNotifications: function() {
            app.socket.on('launching', function() {
                app.growl('Launching');
            });

            app.socket.on('STATUSTEXT', function(statustext) {
                app.growl(statustext);
            });
        }

    });

    return GlobalGuiView;

});
