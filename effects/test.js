$(function() {
    var length = document.getElementById('line-1').getTotalLength(),
        circle = document.getElementById('c1').getTotalLength(),
        $duration = 600;
    setInterval(function() {
        $('.line-1').css({
            strokeDasharray: length + ',' + length * 2,
            strokeDashoffset: length
        }).animate({
            strokeDashoffset: -length
        }, $duration, 'linear')
        //
        $('#line-1').css({
            strokeDasharray: length + ',' + length * 2,
            strokeDashoffset: -length
        }).animate({
            strokeDashoffset: length
        }, $duration, 'linear')
        $('.c1').css({ //
            strokeDasharray: circle,
            strokeDashoffset: circle
        }).delay($duration / 2).animate({
            strokeDashoffset: '0'
        }, $duration, 'linear')
    }, 3000)
    //clip-path: polygon(0% 0%,0% 80%,30% 30%,100% 80%,100% 0%);
    function step(statement,$time,cb) {
        if (statement == "on") {
            setTimeout(() => {
                $('.cover')
                    .css({ clipPath: 'polygon(0% 0%,0% 80%,30% 30%,100% 80%,100% 0%)' });
                if(cb)
                  cb()
            }, $time)
        } else {
            setTimeout(() => {
                $('.cover')
                    .css({ clipPath: 'polygon(0% 0%,0% 100%,100% 100%,100% 0%)' });
                if(cb)
                  cb()
            }, $time)
        }
    }
    step('on',1000,()=>{
      step('off',200,()=>{
        step('on',100)
      })
    })
    
})