require = require || requirejs;

// Set the require.js configuration for your application.
require.config({
    deps: [
        "main"
    ],
    paths: {
        jade: "assets/bower/jade/runtime",
        JST: "../build/templates",
        backbone: "assets/bower/backbone/backbone",
        io: "assets/bower/socket.io-client/socket.io",
        jquery: "assets/bower/jquery/dist/jquery",
        underscore: "assets/bower/underscore/underscore",
        "leaflet-dist": "assets/bower/leaflet-dist/leaflet",
        "leaflet-bing-plugin": "assets/bower/leaflet-plugins/layer/tile/Bing",
        "leaflet-rotate-marker": "assets/bower/leaflet-plugins/layer/Marker.Rotate",
        requirejs: "assets/bower/requirejs/require",
        q: "assets/bower/q/q",
        "bootstrap-slider": "assets/bower/seiyria-bootstrap-slider/js/bootstrap-slider",
        bootstrapValidator: "assets/bower/bootstrapValidator/dist/js/bootstrapValidator",
        "bootstrap-growl": "assets/bower/bootstrap-growl/jquery.bootstrap-growl",
        routefilter: "assets/bower/routefilter/dist/backbone.routefilter.min",
        bootstrap: "assets/bower/bootstrap/dist/js/bootstrap",
        fuelux: "assets/bower/fuelux/dist/js/fuelux",
        moment: "assets/bower/moment/moment",
        "leaflet-touch-extend": "assets/leaflet-touch-extend",
        modernizr: "assets/bower/modernizr/modernizr",
        "seiyria-bootstrap-slider": "assets/bower/seiyria-bootstrap-slider/js/bootstrap-slider",
        "jquery-bridget": "assets/bower/jquery-bridget/jquery.bridget",
        "leaflet.freedraw": "assets/bower/leaflet.freedraw/dist/leaflet.freedraw",
        d3: "assets/bower/d3/d3",
        "evispa-timo-jsclipper": "assets/bower/evispa-timo-jsclipper/clipper",
        concavehull: "assets/bower/concavehull/dist/concavehull.min",
        hammerjs: "assets/bower/hammerjs/hammer",
        graham_scan: "assets/bower/graham_scan/graham_scan.min",
        angular: "assets/bower/angular/angular",
        leaflet: "assets/bower/leaflet/dist/leaflet",
        "leaflet-src": "assets/bower/leaflet/dist/leaflet-src"
    },
    shim: {
        backbone: {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        },
        "leaflet-dist": {
            exports: "L"
        }
    }
});
