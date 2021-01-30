class Monster
{
    constructor(x,y,r){
        
       var options= {
           isStatic:false,
           restituition:0.01,
           friction:10,
           density:1.2,
       }

       this.x = x
       this.y = y
       this.r = r
       this.image = loadImage("Monster-01.png");
       this.body = Bodies.circle(this.x,this.y,this.r/2,options);
       World.add(world,this.body);
    }
 
    display(){
        var superpos = this.body.position;
        push()
        translate(superpos.x,superpos.y);
        //strokeWeight(3)
        //fill(127,0,255);
        //ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop()  
    }
}    




