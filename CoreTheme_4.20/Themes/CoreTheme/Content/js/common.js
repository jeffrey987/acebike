$(function () {
    console.log(22222)
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

    $('#flag_box').click(function () {
        $('.flag-list').slideToggle()
    })
})

