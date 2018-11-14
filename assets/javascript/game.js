// Global variables
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
    }
]
// document.ready shorthand
$(function() {
    $("#inner-cover").fadein(12000);

});