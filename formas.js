
    function areaQuadrat(){

        let lado=parseInt(prompt("¿Cuánto mide el lado de tu cuadrado?"));
        let area=lado*lado;

        document.getElementById("imprimir").innerHTML="El área de tu cuadrado es de "+area+"cm";
    }

    function areaTriangle(){
        
        let base=parseInt(prompt("Cuánto mide la base de tu triangulo?"));
        let altura=parseInt(prompt("Cuánto mide tu la altura de tu triangulo?"));
        let area=(base*altura)/2;

        document.getElementById("imprimir").innerHTML="El área de tu triángulo es de "+area+"cm";
    }

    function areaRectangle() {

        let ladoLargo=parseInt(prompt("Cuánto mide el lado más largo de tu rectángulo?"));
        let ladoCorto=parseInt(prompt("Cuánto mide el lado más corto de tu rectángulo?"));
        let area=ladoLargo*ladoCorto;

        document.getElementById("imprimir").innerHTML="El área de tu rectángulo es de "+area+"cm";
    }

    function areaCercle() {

        let radio=parseInt(prompt("Cuánto mide el radio de tu círculo?"));
        const pi=3.14;
        let area=pi*(radio*radio);

        document.getElementById("imprimir").innerHTML="El área de tu círculo es de "+area+"cm";
    }