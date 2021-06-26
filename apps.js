const carrito = document.getElementsByClassName('carrito'),
    total = document.querySelector('.total'),
    img = document.querySelector('.img'),
    nom = document.querySelector('.nombre'),
    prec = document.querySelector('.precio'),
    elim = document.querySelector('.eliminar');

let producto = '',
    logo = '',
    arrayImg = [],
    nombre = '',
    arrayNombre = []
precio = ''
arrayPrecio = [];
boton = '',
    x = '';
eliminar = `<img src="https://e7.pngegg.com/pngimages/854/935/png-clipart-computer-icons-scalable-graphics-icon-design-delete-button-logo-sign-thumbnail.png" alt="" width="20px" height="20px">`;
arrayEliminar = [];
arrayId = [];


class Profesor {
    constructor(nombreProfesor) {
        this.nombreProfesor = nombreProfesor;
    }
}
class Carreras {
    constructor(curso, costo) {
        //this.logo =logo,
        this.curso = curso,
            this.costo = costo;
    }
}

const profesorEdgarChang = new Profesor('Edgar Chang'),
    profesorDiegoCueva = new Profesor('Diego Cueva'),
    carrerasHTML = new Carreras('HTML', 's/ 600'),
    carrerasCSS = new Carreras('CSS', 's/ 600'),
    carrerasFP = new Carreras('Fundamento programación', 's/ 600');

carrito[0].addEventListener('click', (e) => {
    let x = e.target.parentElement;
    logo = x.querySelector('img').src;
    nombre = carrerasHTML.curso;
    precio = carrerasHTML.costo;
    boton.innerHTML = eliminar;
    let idHTML = x.querySelector('button').getAttribute('data-id');
    arrayImg = [...arrayImg, `<br><img src="${logo}" style="width:50%;"/>`];
    arrayNombre = [...arrayNombre, `<br>${nombre}`];
    arrayPrecio = [...arrayPrecio, `<br>${precio}`];
    arrayEliminar = [...arrayEliminar, `<br>${eliminar}`];

    console.log(arrayEliminar);
    elim.addEventListener('click', (e) => {
        alert(`Seguro que desea borrar ${nombre}`);
    })

    img.innerHTML = `<br>${arrayImg}`;
    nom.innerHTML = `<br>${arrayNombre}`;
    prec.innerHTML = `<br>${arrayPrecio}`;
    elim.innerHTML = `<br>${arrayEliminar}`;
    total.innerHTML = `<p>Total de curso es ${arrayImg.length}</p>`;
});
carrito[1].addEventListener('click', (e) => {
    let css = e.target.parentElement;
    logo = css.querySelector('img').src;
    nombre = carrerasCSS.curso;
    precio = carrerasCSS.costo;
    boton.innerHTML = eliminar;
    arrayImg = [...arrayImg, `<br><img src="${logo}" style="width:50%;"/>`];
    arrayNombre = [...arrayNombre, `<br>${nombre}`];
    arrayPrecio = [...arrayPrecio, `<br>${precio}`];
    arrayEliminar = [...arrayEliminar, `<br>${eliminar}`];
    img.innerHTML = `<br>${arrayImg}`;
    nom.innerHTML = `<br>${arrayNombre}`;
    prec.innerHTML = `<br>${arrayPrecio}`;
    elim.innerHTML = `<br>${arrayEliminar}`;
    total.innerHTML = `<p>Total de curso es ${arrayImg.length}</p>`;
});
carrito[2].addEventListener('click', (e) => {
    let fp = e.target.parentElement;
    logo = fp.querySelector('img').src;
    nombre = carrerasFP.curso;
    precio = carrerasFP.costo;
    boton.innerHTML = eliminar;
    arrayImg = [...arrayImg, `<br><img src="${logo}" style="width:50%;"/>`];
    arrayNombre = [...arrayNombre, `<br>${nombre}`];
    arrayPrecio = [...arrayPrecio, `<br>${precio}`];
    arrayEliminar = [...arrayEliminar, `<br>${eliminar}`];
    img.innerHTML = `<br>${arrayImg}`;
    nom.innerHTML = `<br>${arrayNombre}`;
    prec.innerHTML = `<br>${arrayPrecio}`;
    elim.innerHTML = `<br>${arrayEliminar}`;
    total.innerHTML = `<p>Total de curso es ${arrayImg.length}</p>`;
});


