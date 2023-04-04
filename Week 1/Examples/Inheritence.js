class Square extends Rectangle
{
    constructor(height,width)
    {
        if(height === width)
        {
            super(height,width)
        }
        else
        {
            super(width,width)
        }
    }
}
let mySquare = new Square(5,5)