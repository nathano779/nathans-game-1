namespace SpriteKind {
    export const point = SpriteKind.create()
    export const pluspoint = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.point, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    sprites.destroy(kase)
})
let cakey: Sprite = null
let kase: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . f f e d d f 1 4 d 4 e e f . 
    . f d d f d d d d 4 e e e f . . 
    . f b b f e e e 4 e e f . . . . 
    . f b b e d d 4 2 2 2 f . . . . 
    . . f b e d d e 4 4 4 f f . . . 
    . . . f f e e f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
music.play(music.createSong(hex`0078000408020100001c00010a006400f4016400000400000000000000000000000000050000049c000400080005080c0f141d08000c00040c0f12140c00100006080c0f12141d1000140004050c0f14140018000705080c0f141d2018001c00030c0f141c0020000805080c0f12141d2020002400030c0f14240028000805080c0f141d272a28002c00060c0f12141d242c0030000605080c0f142730003400030c0f14340038000806080c0f1214242738003c00030c0f143c00400007080c0f141d2024`), music.PlaybackMode.LoopingInBackground)
info.setScore(0)
game.onUpdateInterval(2000, function () {
    kase = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.point)
    tiles.placeOnRandomTile(kase, sprites.castle.tilePath4)
})
game.onUpdateInterval(500, function () {
    cakey = sprites.create(img`
        . . . . . . . . . . b b b . . . 
        . . . . . . . . b e e 3 3 b . . 
        . . . . . . b b e 3 2 e 3 a . . 
        . . . . b b 3 3 e 2 2 e 3 3 a . 
        . . b b 3 3 3 3 3 e e 3 3 3 a . 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
        b 3 3 3 d d d d 3 3 3 3 3 d d a 
        b b b b b b b 3 d d d d d d 3 a 
        b d 5 5 5 5 d b b b a a a a a a 
        b 3 d d 5 5 5 5 5 5 5 d d d d a 
        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
        b b b 3 d 5 5 5 5 5 5 5 d d b a 
        . . . b b b 3 d 5 5 5 5 d d 3 a 
        . . . . . . b b b b 3 d d d b a 
        . . . . . . . . . . b b b a a . 
        `, SpriteKind.pluspoint)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
})
