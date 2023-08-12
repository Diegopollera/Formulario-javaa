class Persona{
    nombre;
    apellido;
    dni;
    edad;
    email;
    numero;
    

    
    setNombre(nombre){
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    //-
    setApellido(apellido){
        this.apellido = apellido;
    }
    getApellido() {
        return this.apellido;
    }
    //-
    setDni(dni){
        this.dni = dni;
    }
    getDni() {
        return this.dni;
    }
    //-
    setEdad(edad){
        this.edad = edad;
    }
    getEdad() {
        return this.edad;
    }
    //-
    setEmail(email){
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    //-
    setNumero(numero){
        this.numero = numero;
    }
    getNumero() {
        return this.numero;
    }
}

var persona = new Persona()

function enviar(){
    persona.setNombre(document.getElementById('nombre').value);
    persona.setApellido(document.getElementById('apellido').value);
    persona.setDni(document.getElementById('dni').value);
    persona.setEdad(document.getElementById('edad').value);
    persona.setEmail(document.getElementById('email').value);
    persona.setNumero(document.getElementById('numero').value);

    document.getElementById('form1').reset();
}

function mostrar(){
    document.getElementById('nombreMostrado').textContent = persona.getNombre();
    document.getElementById('apellidoMostrado').textContent = persona.getApellido();
    document.getElementById('dniMostrado').textContent = persona.getDni();
    document.getElementById('edadMostrado').textContent = persona.getEdad();
    document.getElementById('emailMostrado').textContent = persona.getEmail();
    document.getElementById('numeroMostrado').textContent = persona.getNumero();


    document.getElementById('datosM').style.display = 'flex';
}