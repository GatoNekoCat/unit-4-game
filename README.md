# Dragonball RPG
A Dragon Ball themed RPG
    elements
            intro-screen
                title img display
                music player
                listener for any button press
            character-select
                3 columns of pictures
                name displayed over or under character
            battle screen
                other characters not chosen disapear and chosen character shrinks in size and moves to bottom left of screen. 
                loads enemy[0]
                enemy appears in top right of the screen with name and healthbar to his left. 
                character healthbar appears to the right along with buttons for attack, defend and charge
                text will read out the events of the battle in the bottom left 


              each turn:
                if character health is equal to or below 0 then
                    character defeat soundbyte plays
                    after soundbyte is over , display Game Over in the middle of the screen followed underneath with "Play again?" and a button to press to try again or return to the title screen.
                    after clicking the try again button the enemy taunt soundbyte will play, then once it finishes the battle will start again with the same character and enemy
                    clicking the title button will bring the title screen back up

                if enemy health is 0 or below then
                    enemy defeat soundbyte plays
                    level increases
                    new enemy function will call the next enemy and run through his initial soundbyte and display his health

                    if there are no more enemies 
                        Victory image is displayed
                        Character victory soundbyte plays
                        head-cha-la plays 
                        Title screen button is displayed which when pressed shouldn't restart the music
                    

                     
                                    
        music files-
            intro bgm
            battle bgm
            fighter select bgm
            

        Characters = an array of objects (Goku, Vegeta, Yamcha)
            name,
            health,
            level,
            damage,
            speed,
            character selected soundbyte
            defeat soundbyte
            victory soundbyte





        enemies = array of objects (Frieza, Androids, Cell)
            name,
            health,
            damage,
            speed
            battle intro soundbyte
            defeated soundbyte
            taunt soundbyte

Cha-la-head-cha-la begins playing, soft at first, and then builds to full volume

A shenron title screen comes into view saying: Press enter to play

pressing enter brings up character select:
select between goku, vegeta or yamcha

*
Goku is strongest and has best rolls

vegeta has like 50/50 shot at winning

Yamcha is the weakest and has poor rolls
*

after choosing a character there will be a soundbyte of them speaking. and the battle screen will appear.
Battle options:
    Attack - do a random amount of damage based on your character
    Defend: - take half damage from enemy attack this turn
    charge: - build up energy to do increased damage next turn

After the player chooses his move the enemy will choose a move and the game will roll to see who attacks first. 
The attack phase should trigger relavent soundbytes, and change based on whether you choose attack defend or charge. 

attack phase should last 3-5 seconds and then the player should be allowed to choose another move if he has not defeated the enemy or been defeated himself. 

the game ends if you lose to an enemy or defeat all 3 enemies in a row. 

When the game ends you are prompted to pick another character


Enemies : 
    1: Frieza
    2: Androids
    3: Cell

