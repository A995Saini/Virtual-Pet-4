class food{
    constructor
        var foodStock
        var lastFed

        ;

    
    display()
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;++){
                if(i%10==0){
                    x=80
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;

                var addFood=createButton("Add Food");
                addFood.position(500,125);

                if(addFood.mousePressed(function)){
                    foodS=foodS+1;
                    gameState=2;
                    database.ref('/').update({'gameState':gameState})
                }

                var button=createButton("Feed the dog");
                button.position(400,125);

                if(button.mousePressed(function)){
                    foodS=foodS-1;
                    gameState=1;
                    database.ref('/').update({'gameState':gameState})
                }

            