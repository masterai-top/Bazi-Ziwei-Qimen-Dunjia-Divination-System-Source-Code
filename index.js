const page2 = {
  key: 'page2',
  template: '#main'
};

const page1 = {
  key: 'page1',
  template: '#main',
  methods: {
    push() {
      this.$emit('push-page', page2);
    }
  }
};

new Vue({
  el: '#app',
  template: '#main',
  data() {
    return {
      pageStack: [page1]
    };
  }
});

/*
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
*/