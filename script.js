$(document).ready(function(){
  var postCount = 0;
  var commentTemplate = /* template html for post comments */
    '<div>' + 

      '<a href="#" class="com-block">comments </a>' + 
      '<div class="test-block">'+
        '<form onsubmit="event.preventDefault();">'+
          '<h3>Add a comment</h3>'+
    
          '<div class="form-group">'+
            '<input class="com-name" type="text"  placeholder="Name">'+'</input>'+
          '</div>'+
          '<div class="form-group">'+
            '<textarea class="com-body"   type="text"placeholder="Message"></textarea>'+
          '</div>'+

          '<button class="com-submit btn btn-primary">Submit  Comment</button>'+
        '</form>'+
      '</div>'+
    '</div>';

  var makePost = function(){ 
    postCount += 1;
    var postName = $('#name').val();
    var postTxt = $('#message').val();

    if (postName && postTxt) {
      $('.post-items').append(`<li id="post-${postCount}" class="single-post">`+ postTxt + '   posted by: ' + postName + '<a href="#" class="removeBtn" >  remove post </a>' + '<br>' + '<ul class="post-comments">' + '</  ul>' + '<br>' + commentTemplate + '</li>');
      $('.test-block').hide();
    }
  }

  var makeComment = function(postId){
    var comName = $(`#${postId}`).find('.com-name').val();
    var comBody = $(`#${postId}`).find('.com-body').val();
    // if(comName && comBody){};
    console.log('makeComment is invoked!');
      $(`#${postId}`).append('<li class="comment">' + comBody + ' - COMMENTED BY  '+ comName + '<a href="#" class="removeBtn"> remove </a>' + '</li>');
    }

  $('#submit').click(function(){
    console.log('Post Button is clicked!');
    makePost();
     });
     
  $('.post-items').on('click', '.com-submit', function(){
    var commentId = $(this).parents('.single-post').attr('id');
    console.log(commentId);
    makeComment(commentId);
    // #
  });

  $('.post-items').on('click', '.removeBtn', function(){
    $(this).parent().remove();
  })

  $('.forum-posts').on('click', '.com-block', function(){
    $(this).siblings('.test-block').toggle();
  });
      
});


