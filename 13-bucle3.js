const datos =[
    {
        'materia':'Programacion Web',
        'calificacion': 70
    },
    {
        'materia':'Base de datos II',
        'calificacion': 10
    },
    {
        'materia':'robotica',
        'calificacion': 10
    },
    {
        'materia':'ingles',
        'calificacion': 75
    },
    {
        'materia':'Programacion Movil',
        'calificacion': 65
    },
    {
        'materia':'Animacion digital',
        'calificacion': 50
    },
    {
        'materia':'Sistemas opertivos',
        'calificacion': 80
    },
    {
        'materia':'Electronica',
        'calificacion': 90
    },
    {
        'materia':'Iot',
        'calificacion': 40
    },
    {
        'materia':'Desarrollo de las ciencias de computacion',
        'calificacion': 70
    }
];
let materiaSeleccionada='';
const NotaAprobacion=51;
for(let i=0; i<datos.length && NotaAprobacion == '';i++){
    if(datos[i].calificacion<=NotaAprobacion){
        materiaSeleccionada=datos[i].materia
    }
}
if(materiaSeleccionada=="")
    console.log("--..")
else
    console.log("--------")