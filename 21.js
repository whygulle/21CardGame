var card=document.getElementById("cards")
var total=document.getElementById("total")
var msg=document.getElementById("message")
var ctotal=document.getElementById("ctotal")
var pcards=[]
var sum=0 //player card
var sum1=0 //computer card

var won=false  //Assuming you lost the game
var game=true
var sgame=false
var player=prompt("Enter player name")
var amount=prompt("Enter the amount")

function getrandom()
{
    // Math.random() // it will give number between 0 to 0.999
   // Math.random()*13 // it will give number between 0 to 11.999
//    Math.random()*13+1 // it will give number between 0 to 12.999
// Math.floor(Math.random()*13+1) //it will give number between 0 to 13 whole no
   var random=Math.floor(Math.random()*13+1)

   if(random>10)
   {
    return 10
   }
   else if(random ==1)
   {
        return 11
   }
   else{
       return random
     }

}
function startgame()
{
    sgame=true
        var n1=getrandom()
        var n2=getrandom()
        sum=n1+n2
        pcards=[n1, n2]
        var c1=getrandom()  //for computer
        var c2=getrandom()
        sum1=c1+c2
        render()

      
}

function render()
{
    card.innerHTML="Cards : "
        for(var i=0; i<pcards.length;i++)
        {
            card.innerHTML+=pcards[i]+" "
        }
        total.innerHTML= "Total : "+ sum
        
        ctotal.innerHTML= `Computer Total : ${sum1}`

        if(sum <21)
        {
              msg.innerHTML="Do you want another card?"
        }
        else if(sum == 21 && sum1<21)
        {
            amount=amount+amount
            // msg.innerHTML="You won the game"
            msg.innerHTML=`Congrats ${player} ,you won Rs.${amount}`
            won=true
        }
        else
        {
            // msg.innerHTML="You lost the game"
            msg.innerHTML=`Sorry ${player} ,you lose Rs.${amount}`
            game=false
        }
}

function newcard()
{
    if(won==false && game==true && sgame==true)
    {
        var num=getrandom()
        pcards.push(num)
        sum +=num

        while(sum1 <17)
        {
            var cnum=getrandom()
            sum1+=cnum
        }
        render()
        if(sum>21)
        {
            winner()
        }
        
    }
    
}

function winner()
{
    if(sgame==true)
    {
        while(sum1 <17 && sum1<sum)
        {
            var cnum=getrandom()
            sum1+=cnum
        }

        ctotal.innerHTML=`Computer total : ${sum1}`

    if(sum>21 ||(sum1<=21 && sum1>sum))
    {
        // msg.innerHTML="you lost the game"
        msg.innerHTML=`Sorry ${player} ,you lose Rs.${amount} `
    }
    else if( sum1==sum )
    {
        msg.innerHTML="It is a tie"
    }
    else{
        // msg.innerHTML="You won the game"
          amount=amount+amount
            msg.innerHTML=`Congrats ${player} ,you won Rs.${amount}`
    }
    game=false
    }
   
}