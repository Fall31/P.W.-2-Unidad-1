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
const NotaAprobacion=51;
let materiaSeleccionada='';
let i=0;
do{
    if(datos[i].calificacion>=NotaAprobacion){
        materiaSeleccionada=datos[i].materia
        break;
    }
    i++;
}while(i<datos.length && materiaSeleccionada=='')

if(materiaSeleccionada=='')
    console.log('no aprobaste las materias')
else
    console.log('la materia aprobada es: '+materiaSeleccionada)