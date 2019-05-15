var $character = $(".character")
var player = "";
var enemy = "";
var $fightLog = $("#fight-log")
var playerHp = "";
var enemyHit = ""
var playerHit = 5;

//for each character clicked on..
$character.each(function (index, character) {
    var $element = $(character)
    $element.on('click', function () {

        //move all opponents not clicked on under opponent
        var $opponents = $character.not(($(this)))
        $opponents.insertAfter($("#opponent"))
        player = $(this)
        $element.off('click')

        $opponents.each(function (index, opponent) {
            var $opponent = $(opponent)
            $opponent.off('click')

        })


        //hide unchosen fighters and move dueling fighters under match
        $opponents.each(function (index, opponent) {
            var $opponent = $(opponent)
            $opponent.on('click', function () {

                enemy = ($(this))
                player.insertBefore($('#versus'))
                enemy.insertAfter($('#versus'))

                $opponents.off('click')

            })


        })
        var $fightButton = $("#fight-button")
        var fightClick = $fightButton.on('click', function () {
            enemyHit = 7
            playerHp = $(player).find("p").text()
            enemyHp = $(enemy).find("p").text()
            var newHp = parseInt(playerHp, 10) - enemyHit ;
            var enemyNewHp = parseInt(enemyHp, 10) - playerHit;
            $(player).find("p").replaceWith("<p>" + newHp + "</p>")
            $(enemy).find("p").replaceWith("<p>" + enemyNewHp + "</p>")
            $fightLog.replaceWith("<p>You hit for " + playerHit + " HP and lost " + enemyHit + " HP!</p>")


        
            if (playerHp < 1){
                alert("You lose")
                history.go(0)
            }
        })



    })


})