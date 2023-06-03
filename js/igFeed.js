 var feed = new Instafeed({
      get: 'user',
      accessToken: 'IGQVJWaElITFJoYzllbUlIVk4zUDJ0NFR0NWlRWVFFZAGNrZAFZAxeDc3TnZADbWs3RmhyTE1DUVVoempBbC1WUENXVmlERGN4RXBtSTF1WC1oaEJtdUhOSElPSVg1bG9JZAHlsLVVOUDU0b3Vpb1N1LVJXcAZDZD',
      userId: '8459256871',
      resolution: 'standard_resolution',
      limit: 9,
      template:`<div class="igFeed-container">
      <img class="ig-feed-image" title={{caption}} src="{{image}}">
     </div>`
    });
    feed.run();
