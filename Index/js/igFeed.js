 var feed = new Instafeed({
      get: 'user',
      accessToken: 'IGQVJVM1NBUUFTMjJuUXBlUzh2NVJPZAWhDaTJ1aGt4LXg1UUt6blFGZAFJ5YUd3VGl1TVc4aS0xbE9xd2psZAkpfR1BWZAjlzQzNoSXEwQmxDdTRyeUZAoTkNjdVV6ZA1BGMDFoRFJGY0N5VWlIeEx2V0dpZAgZDZD',
      userId: '8459256871',
      resolution: 'standard_resolution',
      limit: 9,
      template:`<div class="igFeed-container">
      <img class="ig-feed-image" title={{caption}} src="{{image}}">
     </div>`
    });
    feed.run();
