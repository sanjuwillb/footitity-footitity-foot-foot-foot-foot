var i = 255
class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.Visibility = 255
    this.width = width
    this.length = length
  }
  display(){
    if (this.body.speed<5){
      super.display()
    }
    else{
     World.remove(world, this.body)
     push()
     this.Visibility = this.Visibility-5
     tint(255,this.Visibility)
     image(this.image,this.body.position.x,this.body.position.y,this.width,this.length)
     if (this.Visibility < 0){
      if (this.body.speed > 5.02){
        score1 = score1 + 5600
        this.body.speed = 5.01
      }
    }
     pop()
    }
  }
};