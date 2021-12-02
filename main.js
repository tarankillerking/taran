canvas=new fabric.Canvas('myCanvas')
blockimg_width=30
blockimg_height=30
player_x=10
player_y=10
var playerobject=""
var blockimgobject=""
function playername(){
fabric.Image.fromURL("player.png",function(Img){
    playerobject=Img;
    playerobject.scaleToWidth(150)
    playerobject.scaleToHeight(150)
    playerobject.set({
        top:player_y,left:player_x
    })
    canvas.add(playerobject)
})
}
function new_img(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        blockimgobject  =Img;
        blockimgobject .scaleToWidth(blockimg_width)
        blockimgobject .scaleToHeight(blockimg_height)
        blockimgobject  .set({
            top:player_y,left:player_x
        })
        canvas.add(blockimgobject)
    })
    }
    window.addEventListener("keydown",my_keydown)
    function my_keydown(e){
keyPressed=e.keyCode
console.log(keyPressed)
if (e.shiftKey==true&& keyPressed=='80') {
 console.log("p and shiftKey")
blockimg_width=blockimg_width+10
blockimg_hieght=blockimg_height+10
document.getElementById("currentwidth") .innerHTML=blockimg_width
document.getElementById("currentheight") .innerHTML=blockimg_height
}
    
    if (e.shiftKey==true&& keyPressed=='77') {
        console.log("p and shiftKey")
       blockimg_width=blockimg_width+10
       blockimg_height=blockimg_height+100
       document.getElementById("currentwidth") .innerHTML=blockimg_width
       document.getElementById("currentheight") .innerHTML=blockimg_height
       } 
       if (keyPressed=='38') {
           up()
       }
       if (keyPressed=='40') {
        down()
       }
        if (keyPressed=='37') {
            left()
        }
        if (keyPressed=='39') {
            right()
        
    }
    if (keyPressed=='87' ) {
       new_img('wall.jpg') 
    }
    if (keyPressed=='71' ) {
        new_img('ground.png') 
     }
     if (keyPressed=='76' ) {
        new_img('light_green.png') 
     }
     if (keyPressed=='84' ) {
        new_img('trunk.jpg') 
     }
     if (keyPressed=='82' ) {
        new_img('roof.jpg') 
     }
     if (keyPressed=='89' ) {
        new_img('yellow_wall.png') 
     }
     if (keyPressed=='68' ) {
        new_img('dark_green.png') 
     }
     if (keyPressed=='85' ) {
        new_img('unique.png') 
     }
     if (keyPressed=='67' ) {
        new_img('cloud.jpg') 
     }
         
     
    }
    function up() {
      if (player_y>0) {
       player_y=player_y-blockimg_height
       canvas.remove(playerobject)
       playername()   
      }  
    }  
    function down() {
        if (player_y<450) {
         player_y=player_y+blockimg_height
         canvas.remove(playerobject)
         playername()   
        }  
      }  
      function right() {
        if (player_x<900) {
         player_x=player_x+blockimg_width
         canvas.remove(playerobject)
         playername()   
        }  
      } 
      function left() {
        if (player_x>0) {
         player_x=player_x-blockimg_width
         canvas.remove(playerobject)
         playername()   
        }  
      } 
