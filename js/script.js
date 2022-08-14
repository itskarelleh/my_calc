$(document).ready(function() {
    $('.btn').on('click', function(){
        var value = $(this).val();
        $('#steps').append(value);
    });

    $('.bigButton[name = "equals"]').on('click', function()
    {
        var calc = $("#steps").text();
        var answer = eval(calc);
        $('#answer').text(answer);
    });

    $('button[name="clear"]').on('click', function(){
        $('#steps').text('');
        $('#answer').text('');
    });

});




