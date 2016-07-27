/*
Copyright (c) 2015 Amar Prakash Pandey
(http://www.amarpandey.me/)
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
                                    icon: 'https://www.approveme.com/wp-content/uploads/edd/2014/07/document-activity-notifications.png'
                              });
                        }
                  });
            } else {
                  notify = new Notification('New Notifications!', {
                        body: 'Simple Desktop Notification by Amar Prakash Pandey!"',
                        icon: 'https://www.approveme.com/wp-content/uploads/edd/2014/07/document-activity-notifications.png'
                        // You Can give image Link to change notification Icon.
                  });
            }
      }
});
