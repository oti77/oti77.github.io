import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("tlo","kartka.png")
loadSprite("balwan","balwan.png")

loadSound("muzyka","merry.mp3")


// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("tlo"),
    pos(0,0)
])

add([
    rect(667,10),
    color(255,255,255),
    outline(5),
    pos(0,300),
    area(),
    solid()
])

const balwan = add([sprite("balwan"), pos(300,180),
    area(),
    body()])


// onUpdate(()=>{



//     if(balwan.pos.x<600)  balwan.pos.x =balwan.pos.x +1
//     if(balwan.pos.y>120)  balwan.pos.y =balwan.pos.y -1
// })


onKeyPress('space', ()=>{ 
    balwan.jump()
    play("muzyka")
})          

onTouchStart((id, pos)=>{ 
    balwan.jump()
    play("muzyka")
})    