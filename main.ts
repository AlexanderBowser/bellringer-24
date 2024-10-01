let sprite_x = 20
let sprite_y = 20
let distance = 20
let mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    .................cc.....
    .............cccc63c....
    ...........cc633336cc...
    ..........c6666333333c..
    ..........c6666633333c..
    .......cc.cccc666333cc..
    ......c55ccc55c66666cc..
    ......ff5ccc5ff663333c..
    ......ff5ccc5ff633333c..
    ..bbbbbbbb5555c333333c..
    .c55c555554ccccc3c45c...
    c55c55555545554cccc5c...
    ccccccccccccccccc.ccc...
    `, SpriteKind.Player)
mySprite.setPosition(sprite_x, sprite_y)
let sprite_2 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
