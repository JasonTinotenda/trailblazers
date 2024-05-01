/* scripts.js */

  

  $(document).ready(function() {
    var currentIndex = 0;
    var images = $('.carousel img');
    var totalImages = images.length;
  
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        var translateValue = (-currentIndex * 100 / totalImages) + '%';
        $('.carousel').css({
            'transform': 'translateX(' + translateValue + ')',
            '-webkit-transform': 'translateX(' + translateValue + ')', /* For Safari */
            '-ms-transform': 'translateX(' + translateValue + ')' /* For IE */
        });
    }
  
    setInterval(nextImage, 5000); // Change image every 5 seconds
});



  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', // Display the calendar in month view by default
      events: [
        {
          title: 'Youth Conference',
          start: '2024-05-15',
          end: '2024-05-17'
        },
        {
          title: 'Workshop: Faith and Relationships',
          start: '2024-05-20T10:00:00',
          end: '2024-05-20T12:00:00'
        },
        // Add more events here
      ]
    });
    calendar.render();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Sample data for featured content (replace with actual data)
    var featuredContentData = [
      {
        title: '10 Tips for Building a Stronger Faith',
        type: 'blog',
        thumbnail: '/images/wallpaper06.jpg',
        url: 'blog1.html'
      },
      {
        title: 'Navigating Relationships: A Young Adult Perspective',
        type: 'blog',
        thumbnail: '/images/wallpaper07.jpg',
        url: 'blog2.html'
      },
      {
        title: 'The Power of Purpose: Finding Meaning in Your Career',
        type: 'video',
        thumbnail: '/images/wallpaper09.jpg',
        url: 'video1.html'
      },
      // Add more featured content items as needed
    ];
  
    // Generate HTML for featured content items
    var contentGrid = document.querySelector('.content-grid');
    featuredContentData.forEach(function(item) {
      var contentItem = document.createElement('div');
      contentItem.classList.add('content-item');
  
      var thumbnail = document.createElement('img');
      thumbnail.src = item.thumbnail;
      thumbnail.alt = item.title;
  
      var title = document.createElement('h3');
      title.textContent = item.title;
  
      var description = document.createElement('p');
      description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis mauris.';
  
      var link = document.createElement('a');
      link.href = item.url;
      if(item.type === 'blog') {
        link.textContent = 'Read More';
      } else if(item.type === 'video') {
        link.textContent = 'Watch Now';
      } else if(item.type === 'podcast') {
        link.textContent = 'Listen Now';
      }
  
      contentItem.appendChild(thumbnail);
      contentItem.appendChild(title);
      contentItem.appendChild(description);
      contentItem.appendChild(link);
  
      contentGrid.appendChild(contentItem);
    });
  });
  