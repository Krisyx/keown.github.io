window.onload = fifteen()

function fifteen()
{
    $("controls").onclick = shuffle;
    
    
    var puzzle = $("puzzle").childNodes;
    var square=$("puzzle");
    var blank = document.createElement("div");
    
    var id=1;
    var x=0;
    var y=0;
    var k=0;
    var r=3;
    
    for (var i = 3; i < puzzle.length; i=i+2)
    {
        puzzle[i].className='puzzlepiece';
        puzzle[i].id=id+'';
        id+=1;
        
    }
    
    
    puzzle[15].appendChild(blank);
    puzzle[15].id='16';
    
    for (var t = 0; t < 4; t++)
    {
        for (var l = 0; l < 4; l++)
        {
            y=100*(t);
            x=100*(l);

            $(k+"").style.top=y+'px';
            $(k+"").style.left=x+'px';
            puzzle[k].style.top=y+'px';
            puzzle[k].style.left=x+'px';
            square[k].style.top=y+'px';
            square[k].style.left=x+'px';
            this.style.top=y+'px';
            this.style.left=x+'px';
            k=k+1;
            
            puzzle[r].style.backgroundPosition=-x+"px"+" "+-y+"px";
            r=r+2;
        }
    }
  
    
    for (var d = 3; d < puzzle.length; d=d+2)
    for (var d = 0; d < puzzle.length; d=d+1)
    {
        puzzle[d].onclick = move;
        puzzle[d].onmouseover = piece_of_puzzle;
    }
    
    puzzle[15].appendChild(blank);
    puzzle[15].id='16';
   
};

function move()
{
    
    this.style.top=parseInt(this.getStyle("top"),10) + 100 + "px"; 
    this.style.left = parseInt(this.getStyle("left"),10) + 100 + "px";
    var x=this.style.top;
    var y=this.style.left;
    
   
}




function piece_of_puzzle()
{
   this.addClassName("piece_of_puzzle");
}

function shuffle()
{
        
    $("controls").textContent = "Go!";
    
    
}
