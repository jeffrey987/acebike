$(function () {   
    $('body').on('click','#gotop',function(e){
        $('html,body').animate({'scrollTop':0})
    })

    $('body').on('click','#searchIcon',function(e){

        if( $('.nav-search').hasClass('nav-search-active')){
            $('.nav-search').removeClass('nav-search-active')
            $('.nav-search').animate({'left':'0.04rem','width':'0rem'})
        }else {
            $('.nav-search').addClass('nav-search-active')
            $('.nav-search').animate({'left':'0','width':'1.2rem'})
        }
    })
	
	
	function displayBarNotification(message, messagetype, timeout) {
	    var notificationTimeout;
	
	    var messages = typeof message === 'string' ? [message] : message;
	    if (messages.length === 0)
	        return;
	
	    //types: success, error, warning
	    var cssclass = ['success', 'error', 'warning'].indexOf(messagetype) !== -1 ? messagetype : 'success';
	
	    //remove previous CSS classes and notifications
	    $('#bar-notification')
	      .removeClass('success')
	      .removeClass('error')
	      .removeClass('warning');
	    $('.modal-dialog').remove();
	
	    //add new notifications
	    var htmlcode = document.createElement('div');
	    htmlcode.classList.add('modal-dialog', cssclass);
		
		
	    //add close button for notification
	    var close = document.createElement('span');
	    close.classList.add('close');
	    close.setAttribute('title', document.getElementById('bar-notification').dataset.close);
	
	    for (var i = 0; i < messages.length; i++) {
	        var content = document.createElement('p');
	        content.classList.add('content');
	        content.innerHTML = messages[i];
	
	        htmlcode.append(content);
	    }
	    
	    htmlcode.append(close);
	
	    $('#bar-notification')
	        .append(htmlcode);
	
	    $(htmlcode)
	        .fadeIn('slow')
	        .on('mouseenter', function() {
	            clearTimeout(notificationTimeout);
	        });
	
	    //callback for notification removing
	    var removeNoteItem = function () {
	        htmlcode.remove();
	    };
	
	    $(close).on('click', function () {
	        $(htmlcode).fadeOut('slow', removeNoteItem);
	    });
	
	    //timeout (if set)
	    if (timeout > 0) {
	        notificationTimeout = setTimeout(function () {
	            $(htmlcode).fadeOut('slow', removeNoteItem);
	        }, timeout);
	    }
	}
	
})

