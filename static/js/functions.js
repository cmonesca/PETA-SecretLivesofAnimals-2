// turn.js options

$(window).ready(function() {
  $('#petaBook').turn({
    // display: 'double',
    width: '1025px',
    height: '524px',
    elevation: 50,
    acceleration: true,
    gradients: true,
    autoCenter: false,
    duration: 1000,
    pages: 19,
    when: {
      turning: function(e, page) {
        if(page>1) {
          $('#petaBookBg').addClass('peta-book-bg');
          $('#soundBar').addClass('margin-left');
          $('.container').addClass('changed');
        } else {
          $('#petaBookBg').removeClass('peta-book-bg');
          $('#soundBar').removeClass('margin-left');
          $('.container').removeClass('changed');
        }
        if(page!==1) {
          $('#introText').addClass('display-none');
        } else {
          $('#introText').removeClass('display-none');
        }
      }
    }
  });

  // Sound Bar
  var rabbit = new Audio("static/audio/rabbit.m4a");
  var dolphin = new Audio("static/audio/dolphin.m4a");
  var pig = new Audio("static/audio/pig.m4a");
  var goose = new Audio("static/audio/goose.m4a");
  var deer = new Audio("static/audio/deer.m4a");
  var mice = new Audio("static/audio/mice.m4a");
  var isPlaying = false;

  $('#rabbitSound').click(function(){
    if (rabbit.paused) {
      rabbit.play();
    } else {
      rabbit.pause();
    }
  })

  $('#dolphinSound').click(function(){
    if (dolphin.paused) {
      dolphin.play();
    } else {
      dolphin.pause();
    }
  })

  $('#pigSound').click(function(){
    if (pig.paused) {
      pig.play();
    } else {
      pig.pause();
    }
  })

  $('#gooseSound').click(function(){
    if (goose.paused) {
      goose.play();
    } else {
      goose.pause();
    }
  })

  $('#deerSound').click(function(){
    if (deer.paused) {
      deer.play();
    } else {
      deer.pause();
    }
  })

  $('#miceSound').click(function(){
    if (mice.paused) {
      mice.play();
    } else {
      mice.pause();
    }
  })

  introJs().start();

});

// allows keyboard arrows to turn pages
$(window).bind('keydown', function(e) {
  if (e.keyCode==37)
  $('#petaBook').turn('previous');
  else if (e.keyCode==39)
  $('#petaBook').turn('next');
});
