class Game{
    constructor()
}
readState=Database.ref('gameState');
                readState.on(value,function(data)){
                    gameState=data.val();
                } 
                if(gameState!="hungry"){
                feed.hide();
                addFood.hide();
                dog.remove();
                else{
                    feed.show();
                    addFood.show();
                    dog.addImage(sadDog);
                }
                }
                function update(state){
                    database.ref('/').update({
                        gameState:state
                    });
                }

                var Bath=createButton("I want to take bath");
                Bath.position(570,120);
                if(Bath.mousePressed(function(){
                    gameState=3;
                    database.ref('/').update({'gameState':gameState});

                    if(gameState===3){
                        dog.addImage(washroom);
                        dog.scale=1;
                        milkBotltle2.visible=false;
                    }
                }


                var Bath=createButton("I want to sleep");
                Bath.position(710,125);
                if(Sleep.mousePressed(function(){
                    gameState=3;
                    database.ref('/').update({'gameState':gameState});

                    if(gameState===3){
                        dog.addImage(bedroom);
                        dog.scale=1;
                        milkBotltle2.visible=false;
                    }
                }
                

                var Bath=createButton("Lets Play");
                Bath.position(500,165);
                if(Sleep.mousePressed(function(){
                    gameState=5;
                    database.ref('/').update({'gameState':gameState});

                    if(gameState===3){
                        dog.addImage(livingroom);
                        dog.scale=1;
                        milkBotltle2.visible=false;
                    }
                }
                