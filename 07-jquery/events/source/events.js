$(myFunction)

function myFunction() {
    /*
    $('#btn1').click(() => {
        alert('Button Clicked')
    })

    $('#btn1').on('click', () => {
        alert('Button Clicked')
    })

    $('#btn1').click(() => {
        $('.para1').hide()
    })

    $('#btn2').click(() => {
        $('.para1').show()
    })


    $('#btn1').click(() => {
        $('.para1').toggle()
    })


    $('#btn1').dblclick(() => {
        $('.para1').toggle()
    })


    // hover includes 'mouseenter' and 'mouseleave'
    $('#btn1').hover(() => {
        $('.para1').toggle()
    })


    // there are 'mousemove', 'mousedown', and 'mouseup'
    $('#btn1').on('mousedown', () => {
        $('.para1').toggle()
    })

    $('#btn1').on('mouseup', () => {
        $('.para1').toggle()
    })
    

    // there is an event parameter
    $('#btn1').click( e => {
        // alert(e.currentTarget.id)
        alert(e.currentTarget.outerHTML)
    })
    

    $(document).on('mousemove', e => {
        $('#coords').html('Coords X: ' + e.clientX + ' Y: ' + e.clientY)
    })
   
    // !!! this doesn't work in anonymous => function here
    $('input').focus(function(){
        //alert('Focus');
        $(this).css('background', 'pink');
    })
    
    $('input').blur(function(){
        //alert('Focus');
        $(this).css('background', 'white');
    });

    // use e.target in => function
    // $('input').focus( e => {
    //     //alert('Focus');
    //     $(e.target).css('background', 'pink');
    // })
    
    
    $('input').keyup(function(e){
        console.log(e.target.value)
    });
    */

    $('select#gender').change(function(e){
        alert(e.target.value);
    });
    $('#form').submit(function(e){
        e.preventDefault()
        var name = $('input#name').val();
        console.log(name);
    })
    
}