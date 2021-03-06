define(['backbone', 'JST'], function(Backbone, templates) {

    var SelectView = Backbone.View.extend({

        el: '#select',
        template: templates['app/Templates/Select'],
        initialize: function() {
            _.bindAll(this, 'render', 'updateMission');
            this.listenTo(this.model, 'change', this.render);
        },
        events: {
            'change #platformSelection': 'updateMission',
            'change #routineSelections': 'updateMission',
            'change #payloadSelection': 'updateMission'
        },
        render: function() {

            // Render scaffolding, filling in the gaps as provided
            this.$el.html(this.template({
                platforms: appConfig.platforms,
                currentPlatform: this.model.get('platformId'),
                currentPayload: this.model.get('payload'),
                currentMission: this.model.get('mission')
            }));
            return this;

        },
        updateMission: function() {
            var payload = '';
            if (payloadSelection = this.$el.find('#payloadSelection')[0]) {
                payload = payloadSelection.value;
            }
            this.model.set({
                platformId: this.$el.find('#platformSelection')[0].value,
                mission: this.$el.find('#routineSelection')[0].value,
                payload: payload
            });
        }
    });

    return SelectView;

});
