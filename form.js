let tabla=[{identificacion:"123123144",nombre:"yaasi",apellido:"lince",direccion:"calle 4"
,telefono:"3452233",correo:"ylin@email.com"
},
{identificacion:"12312314",nombre:"asi",apellido:"lce",direccion:"calle 24"
,telefono:"322233",correo:"y2sn@email.com"
}
]

function cargar(){
let elemento =document.getElementById("user")
tablallena=""
for (let i = 0; i< tabla.length;i++) {
	tablallena+=`<tr><td>${tabla[i].identificacion}</td><td>${tabla[i].nombre}</td><td>${tabla[i].apellido}</td><td>${tabla[i].direccion}</td><td>${tabla[i].telefono}</td><td>${tabla[i].correo}</td></tr>`
}
elemento.innerHTML=tablallena
}
function estar(x) {
	let e = false;
	for (let i = 0; i < tabla.length; i++) {
		if (tabla[i].identificacion==x) {
			e = true;
		}
	}
	return e;
}


function registrar() {
	
	let identificacion=document.getElementById("identificacion").value
	let nombre=document.getElementById("nombre").value
	let apellido=document.getElementById("apellido").value
	let direccion=document.getElementById("direccion").value
	let telefono=document.getElementById("telefono").value
	let correo=document.getElementById("correo").value
	let elemento =document.getElementById("user")
	
     
   if (identificacion=="" || nombre=="" || apellido=="" || direccion=="" || telefono=="" || correo=="") {
    	alert("Favor llenar todos los campos");
    
     }
     else if (estar(identificacion) == true) {
        alert("identificacion ya se encuentra en registro,por favor ingresar otra identificacion");
    }
     else if (isNaN(identificacion)) {
        alert(" La identificacion no es un numero");
     }

else {
     let usertabla={identificacion,nombre,apellido,direccion,telefono,correo}
     tabla.push(usertabla)
     elemento.innerHTML+=`<tr><td>${identificacion}</td><td>${nombre}</td><td>${apellido}</td><td>${direccion}</td><td>${telefono}</td><td>${correo}</td></tr>`
}

}