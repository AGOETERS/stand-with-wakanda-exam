function chrctnamor () {
    Namor2 = sprites.create(assets.image`namor`, SpriteKind.Enemy)
    Namor2.setPosition(randint(0, 10), randint(0, 10))
}
function chrct_okye () {
    Okoye = sprites.create(assets.image`okoye`, SpriteKind.Guard)
    controller.moveSprite(Okoye, -68, -58)
}
function chrct_shuri () {
    Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
    Shuri.setPosition(78, 100)
    controller.moveSprite(Shuri)
}
sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Namor2.setPosition(148, 2)
})
info.onScore(20, function () {
    scene.setBackgroundImage(assets.image`boston-bridge`)
    game.over(true)
    effects.confetti.startScreenEffect()
    game.showLongText("\"We are safe!\"", DialogLayout.Bottom)
    Shuri.sayText("WAKANDA FOREVER", 5000, false)
})
function Riri () {
    Riri2 = sprites.create(assets.image`riri`, SpriteKind.Guard)
    controller.moveSprite(Riri2, 34, -53)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Namor2.setPosition(148, 2)
})
let Riri2: Sprite = null
let Okoye: Sprite = null
let Shuri: Sprite = null
let Namor2: Sprite = null
chrctnamor()
chrct_shuri()
Riri()
chrct_okye()
game.showLongText("\"Help Shuri, Okoye and Riri escape Namor\"", DialogLayout.Full)
game.showLongText("\"When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points!\"", DialogLayout.Full)
game.showLongText("\"Earn 20 points to win and to stay alive you must jeep your heart(s)2", DialogLayout.Full)
info.setLife(2)
Namor2.follow(Shuri, 30)
Shuri.setStayInScreen(true)
scene.setBackgroundImage(assets.image`wakanda`)
