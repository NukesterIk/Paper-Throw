class Drop{


    constructor(x,y,width,height){
       
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255,0,0);
        rect(pos.x+20,pos.y+20,this.width,this.height);
    }
}