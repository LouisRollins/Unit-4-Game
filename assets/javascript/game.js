var $character = $(".character")
var player = "";
var enemy = "";

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
                var $hidden = $opponents.not(($(this)))
                $hidden.hide()

                enemy = ($(this))
                player.insertBefore($('#versus'))
                enemy.insertAfter($('#versus'))

            })


        })
        var $fightButton = $("#fight-button")
        $fightButton.on('click', function () {
            $hp = $(".hp")
            console.log(player)
            console.log(enemy);
            var playerHp = $(player).find("p").text()
            var newHp = parseInt(playerHp, 10) + 500 ;
            
            console.log(newHp)
            $(playerHp).append($(newHp).text())
        })


    })


})