/*
Copyright (c) 2015 Amar Prakash Pandey
(http://www.amarpandey.ml/)
All Rights Reserved.
*/

var dntrigger = document.getElementById('dntrigger');

dntrigger.addEventListener('click', function(e) {
      e.preventDefault();

      if (!window.Notification) {
            alert("Sorry, Notification Not supported in this Browser!");
      } else {
            if (Notification.permission === 'default') {
                  Notification.requestPermission(function(p) {
                        if (p === 'denied')
                              alert('You have denied Notification from Team Abhivyakti');
                        else {
                              notify = new Notification('New Notifications!', {
                                    body: 'Simple Desktop Notification by Amar Prakash Pandey!"',
                                    icon: 'http://urls.ml/5yc3a'
                              });
                        }
                  });
            } else {
                  notify = new Notification('New Notifications!', {
                        body: 'Simple Desktop Notification by Amar Prakash Pandey!"',
                        icon: 'http://urls.ml/5yc3a'
                        // You Can give image Link to change notification Icon.
                  });
            }
      }
});
