
 var longitud ={
    XMAX:308,
    YMAX:380,
    XMIN:8,
    YMIN:80
 };

var contexto = document.getElementById("lienzo").getContext("2d");
var colorcito = "yellow";
var estado = 0;
var x, y ;

document.addEventListener("mousemove", moverMouse);
document.addEventListener("mousedown", presionarCalick);
document.addEventListener("mouseup", soltarClick);


function moverMouse(evento)
{
    if(evento.x >= longitud.XMIN && evento.x <= longitud.XMAX && evento.y >= longitud.YMIN && evento.y <= longitud.YMAX )
    {
        if(estado == 1)
        {
            dibujar(colorcito, x, y, evento.layerX, evento.layerY);
        }
        x = evento.layerX;
        y = evento.layerY;
    }
    
}

function presionarCalick(evento)
{
    if(evento.x > longitud.XMIN && evento.x < longitud.XMAX && evento.y > longitud.YMIN && evento.y < longitud.YMAX )
    {
      estado = 1;
      
    }
    
}

function soltarClick(evento)
{
        estado = 0;
}

function dibujar(color, xi, yi, xf, yf)
{
    contexto.beginPath();
    contexto.strokeStyle = color;
    contexto.lineWidth = 3;
    contexto.moveTo(xi , yi);
    contexto.lineTo(xf, yf);
    contexto.stroke();
    contexto.closePath();
}



