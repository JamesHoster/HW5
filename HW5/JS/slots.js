
$(document).ready((function(){
    $('#Spinbtn').on("mouseover", function(){
        $('#Spinbtn').addClass('btnChange');
        $('#Spinbtn').text("SPIN NOW!");
    });
    $('#Spinbtn').on("mouseleave", function(){
        $('#Spinbtn').removeClass('btnChange');
        $('#Spinbtn').text("Spin")
    });
    
    function EndGame(){
      var msg = "Goodbye, Thanks for Playing";
      $('h1').fadeOut(2000);
      $('input').fadeOut(2000);
      $('p').fadeOut(2000);
      $('button').fadeOut(2000);
      $('#msg').text(msg)
      
  }
    
   $('#EndGame').on("click", function()
                   {
       EndGame();
   });
    
    $('#Spinbtn').click(function(){
    function RandomNum()
        {
        var RanNum = Math.floor(Math.random() * 10);
            return RanNum;
        };
    
    function GetClass(){   
  var number = 0;
 for(var counter = 0; counter <=9; counter++)   
     {
         var classCol = "";
         while(true){
        var number = RandomNum(); 
        if ( (number === 0) || (number > 3) )
            {
                continue;
            }
        if (number === 1)
            {
                classCol = "one";
                break;
            }
        if (number === 2)
            {
                classCol = "two";
                break;
            }
        if (number === 3)
            {
                classCol = "three";
                break;
                
            }
         }
         return classCol;
    }
    };
        $("input").each(function(){
            var NumResult = GetClass();
            $(this).addClass(NumResult);
        })
        
        var Win = "Congratulations, You Won!";
        var Lose = "Sorry, Try Again";
        
       if ($('#box1').css("background-color") === $('#box2').css("background-color") && $('#box1').css("background-color") === $('#box3').css("background-color"))
       {
           $('#msg').text(Win);
       }
    else 
        {
            $('#msg').text(Lose);
        }
    
        
        $('#startOver').on("click", function()
                          {
            location.reload();
        });
  

       
    });
       }));
