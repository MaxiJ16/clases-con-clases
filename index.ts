// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
  constructor(departamento:string){
    this.departamento = departamento;
  }
  departamento: string;
  getName(){
    return this.departamento;
  }
}

class Piso {
  constructor(nombreDePiso:string){
    this.nombre = nombreDePiso;
  }
  nombre: string;
  departamentos: Departamento[] = [];
  pushDepartamento(nombreDepartamento:string){
    return this.departamentos.push(new Departamento(nombreDepartamento));
  };
  getDepartamentos(){
    return this.departamentos;
  };
}

class Edificio {
  constructor(pisos: Piso[]){
    this.pisos = pisos;
  }
  pisos: Piso[];
  addDepartamentoToPiso(nombreDePiso:string, departamento: Departamento){
    return this.pisos.find(item => {
      if(item.nombre != nombreDePiso) {
        return Error;
      } return item.departamentos.push(departamento);
    })
    
  };
  getDepartamentosByPiso(nombreDePiso:string){
    const pisoQueCoincide = this.pisos.find(item => {
      if(item.nombre == nombreDePiso) {
        return item;
      }
    })
    return pisoQueCoincide.getDepartamentos();
  }

};




// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
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

function main() {
  testClaseEdificio();

  //probando departamento

  // const departamentoCinco = new Departamento("Cinco");
  // console.log(departamentoCinco);

  //probando piso

  // const pisoSeis = new Piso("Piso 6");
  // const pisoSiete = new Piso("Piso 7")
  // console.log(pisoSeis.pushDepartamento("Departamento Nuevo 28"));
  // console.log(pisoSeis.pushDepartamento("Departamento Nuevo 30"))
  // console.log(pisoSeis.getDepartamentos())

  //probando Edificio

  // const edificioOcho = new Edificio([pisoSeis, pisoSiete])
  // console.log(edificioOcho.addDepartamentoToPiso("Piso 6", departamentoCinco))
  // console.log("get", edificioOcho.getDepartamentosByPiso("Piso 7"))
  // console.log(edificioOcho.addDepartamentoToPiso("Piso 7", departamentoCinco))
 
}
main();
