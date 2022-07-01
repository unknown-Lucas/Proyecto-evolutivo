export class ContactClass {
    Nombre = '';
    Apellidos = '';
    Email = '';
    Conectado = false;
    
    constructor(Nombre,Apellidos,Email,Conectado){
        this.Nombre = Nombre
        this.Apellidos = Apellidos
        this.Email = Email
        this.Conectado = Conectado
    }
}