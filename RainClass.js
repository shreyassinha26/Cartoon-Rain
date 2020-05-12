class Rain extends Base{
    constructor(){
        
        super(random(0 , 800) , random(-600 , 0) , 1 , 1 , 0 , 0.1);
        
        this.scale = random(0.1 , 1.5);
        
    }
    display(){
        
        //super.createGravity(0.8);
        
        fill("blue");
        rectMode(CENTER);
        rect(this.body.position.x , this.body.position.y  ,5*this.scale , 100*this.scale);
        if(this.body.position.y-50*this.scale>400){
            this.scale = random(0.1 , 1.5);
            
            var options = {
                'restitution' : 0,
                'friction' : 0,
    
                'density':1,
                
            }
            this.body = Bodies.rectangle( random(0 , 800)  ,  random(-600 , 0) ,5*this.scale , 100*this.scale , options);
            World.add(world , this.body);
        }
        super.display();
    }
    getPosition(){
        return this.body.position.y;
    }
}