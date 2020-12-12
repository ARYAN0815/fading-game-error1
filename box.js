class Box{
    constructor(x, y, width, height) {
      this.visibility=255
        var options = {
            'restitution':1,
            'friction':0.02,
            'density':0.02
                   
        }           
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         World.add(world,this.body);
         this.image=loadImage("sprites/box.png")
      
      }
      display(){console.log(this.body.speed)
        if(this.body.speed<3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(this.body.angle);
          imageMode(CENTER);
          image(this.image,0, 0, this.width, this.height);
          pop();
        }
        else{
        World.remove(world,this.body)
        push()
        this.visibility=this.visibility-5
        tint(255,this.visibility)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop()
        }
        }
        score(){
          if(this.Visiblity<0&&this.Visiblity>-1005){
          score++;
          }
           }
          };