// Global variables
charChosen = false;
playerCharacter = {};


// Characters, an array of objects containing each characters attributes and soundbytes
characters = [
    goku = {
        name: "Son Goku",
        health: 200,
        level: 10,
        damage: 2.5,
        speed: 4,
        // characterSelectSoundByte: 
        // defeatSoundByte:
        // victorySoundByte:
    },
    vegeta = {
        name: "Prince Vegeta",
        health:180,
        level:9,
        damage:2.25,
        speed:3,
        // characterSelectSoundByte:
        // defeatSoundByte:
        // victorySoundByte:
    },
    yamcha = {
        name: "Bandit Yamcha",
        health: 80,
        level:4,
        damage: 1.5,
        speed:1,
        // characterSelectSoundByte:
        // defeatSoundByte:
        // victorySoundByte:

    }

]; //not sure how to assign soundbytes or pictures to these objects
enemies = [
    frieza = {
        name: "Lord Frieza",
        health: 200,
        level: 9,
        damage: 2.4,
        speed: 4,
        image: "assets/images/friezamad.png",
        id: "frieza",
        // assets\images\friezamad.png
        // characterSelectSoundByte:
        // defeatSoundByte:
        // victorySoundByte:

    },
    android19 = {
        name: "Synthetic Human No. 19, RRA",
        health: 250,
        level: 10,
        damage: 2.5,
        speed: 5,
        image: "assets/images/android.png",
        id: 1,
        // characterSelectSoundByte:
        // defeatSoundByte:
        // victorySoundByte:

    },
    cell = {
        name: "Synthetic Human No. 19, RRA",
        health: 350,
        level: 11,
        damage: 3,
        speed: 5,
        image: "assets/images/cell.png",
        id: 2,
    }
]
// document.ready shorthand
$(function() {
    // add the title image and display it
    $("#titleImage").fadeIn(3000);


    
    
});


$("#titleImage").click(function(){
        $("#titleImage").hide(1000);
        $("#titletext h1").remove();
        $("#characterheader").show(1000);
        $("#goku").show(1000);
        $("#vegeta").show(1000);
        $("#yamcha").show(1000);

    });
$("#char1").click(function(){
    charChosen = true;
    playerCharacter = characters.goku;    
    $("#vegeta").hide(1000);
    
    $("#yamcha").hide(1000);
    gameState.gameStart();

})
$("#char2").click(function(){
    charChosen = true;
    playerCharacter = characters.vegeta;
    $("#goku").hide(1000);
    $("#yamcha").hide(1000);
    $("#vegeta").animate({ left: "0", bottom: "0"})


})
$("#char3").click(function(){
    charChosen = true;
    playerCharacter = characters.yamcha;
    $("#vegeta").hide(1000);
    $("#goku").hide(1000);
    $("#yamcha").animate({ left: "0", bottom: "0"})


})

var gameState = {
    character: playerCharacter,
    enemy: {},
    enemyNum: 0,


    gameStart: function() {
        enemyNum = 0;
        gameState.loadEnemy();

    },
    loadEnemy: function() {
        $("#characterheader").remove();

        gameState.enemy = enemies[gameState.enemyNum];
        console.log(gameState.enemy);
        var imgTag = $("<img>");
        imgTag.attr("src", gameState.enemy.image);
        imgTag.attr("id", gameState.enemy[gameState.enemy.id]);
        $("#enemyF").append(imgTag);

        
    }
    
}