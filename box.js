class Box{
    constructor(x,y,width,height,color){

        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true})
        this.width = width
        this.height = height
        this.color = color

        World.add(world,this.body)
    }
    
    display(){
        rectMode(CENTER)
        fill(this.color)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        
    }
}