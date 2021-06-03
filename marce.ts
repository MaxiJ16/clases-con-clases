// crear las clases Edificio, Piso y Departamento aquí
class Departamento1 {
  nombre: string;
  constructor(nombre: string){
    this.nombre = nombre;
  }
  getName(){
    return this.nombre;
  }
}

class Piso1 {
  nombre: string;
  deptos: Departamento1[] = [];
  constructor(nombre: string){
    this.nombre = nombre;
  }
  pushDepartamento(depto: Departamento1){
    return this.deptos.push(depto);
  }
  getDepartamento():Departamento1[]{
    return this.deptos;
  }

}

class Edificio1 {
  pisos: Piso1[];
  constructor(pisos: Piso1[]){
    this.pisos = pisos;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento1){
    const pisoEncontrado = this.pisos.find( p => p.nombre == nombreDePiso);
    return pisoEncontrado.pushDepartamento(departamento);
  }
  getDepartamentosByPiso(nombreDelPiso:string):Departamento1[]{
    const pisoEncontrado = this.pisos.find( p => p.nombre == nombreDelPiso);
    return pisoEncontrado.getDepartamento();
  }
}


// no modificar este test
function testClaseEdificioMarce() {
  const unPiso = new Piso1("planta baja");
  const otroPiso = new Piso1("primer piso");
  const unEdificio = new Edificio1([unPiso, otroPiso]);
  const deptoUno = new Departamento1("depto uno");
  const deptoDos = new Departamento1("depto dos");
  const deptoTres = new Departamento1("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function mainMarce() {
  testClaseEdificioMarce();
}
mainMarce();