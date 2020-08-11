var init = () => {
    //1.Tempreature

    var celcius = 12;
    var farenheit = (9/5)*celcius+32;
    alert('12 градусов по цельсию = '+farenheit+' градусов по фаренгейту');

    //2.Variables
    var admin = 'Василий';
    var name;
    name = admin;
    alert(name);

    //3.Concatenation
    alert('1000 + "108" = 1000108');

    //4.Variables_additional_homework
    var a = 10;
    var b = 20;
    a += b;
    b = a - b;
    a -= b;

    alert(a+' & '+b);
}


document.addEventListener('DOMContentLoaded',init);