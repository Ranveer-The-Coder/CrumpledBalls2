class Dustbin {
constructor (x,y,width,height){
    var options = {
        isStatic:true
    }

    this.width = width
    this.height = height

    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)

    //this.image = loadImage("dustbingreen.png")

}

display (){

var pos = this.body.position
//imageMode(CENTER)
rectMode(CENTER)

//rect(this.image,pos.x,pos.y,this.width,this.height)
rect(pos.x,pos.y,this.width,this.height)

}

    
}