class Base{
    constructor(x , y , width , height , angle , gravity)
    {
        var options = {
            'restitution' : 0,
            'friction' : 0,

            'density':1,
            'angle':angle
        }
        this.body = Bodies.rectangle(x , y , width , height , options);
        
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.gravity = gravity;

        World.add(world , this.body);
    }
    display()
    {
        this.createGravity(this.gravity);
        var pos = this.body.position;
        
        rectMode(CENTER);
        rect(this.body.position.x , this.body.position.y  , this.width , this.height);
        
       
    }
    createGravity(gravity)
    {
        this.body.position.y = this.body.position.y;
    }
}