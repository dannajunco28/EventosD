function cambiarColor() 
{
    document.getElementById("btnHola").style.backgroundColor = "red";
}

function colorOriginal() 
{
    document.getElementById("btnHola").style.backgroundColor = "";
}

function ocultar()
{
    document.getElementById('ocultar').style.display = 'none';
    if (btnHola.textContent == "Ocultar") 
    {
        btnHola.textContent = "Mostrar";
    }
}

function mostrar()
{
    document.getElementById('ocultar').style.display = 'block';
    if (btnHola.textContent == "Mostrar")
    {
        btnHola.textContent = "Ocultar";
    }
}

function dobleFuncion()
{
    if (btnHola.textContent == "Mostrar")
    {
        mostrar();
    } else {
        ocultar();
    }
}

btnHola.addEventListener("click", dobleFuncion);
btnHola.addEventListener("mouseover", cambiarColor);
btnHola.addEventListener("mouseout", colorOriginal);

