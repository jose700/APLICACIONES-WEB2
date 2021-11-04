
const malla = [
    {
        id: 1,
        Ti:{
            Nivel1: "Fisica, Aprendizaje a la comunicacion Humana, Metodologia de la Investigacion",
            Nivel2: "Calculo, Estructuta de Datos, Estadistica y Probabilidad",
            Nivel3: "Ecuaciones Diferenciales"

        },
        id_docentes: 1
      


    },
    {
        id: 2,
        sistemas:{
            Nivel1: "Fisica, Sistemas electricos, Laica",
            Nivel2: "Calculo, Estructuta de Datos, Estadistica y Probabilidad",
            Nivel3: "Ecuaciones Diferenciales"

        },
        id_docentes: 2

    }

]

const docentes = [
    {
        id:1,
        docentes_Ti:{
            Nivel1: "Ing Elsa",
            Nivel2: "Walter",
            Nivel3: "Alfredo"
        },
        id_silabos: 1

    },
    {
        id:2,
        docentes_sistemas:{
            Nivel1: "Hiraira",
            Nivel2: "Jhon Cevallos",
            Nivel3: "RAUL"
        },
        id_silabos: 2
    }

]
const silabos = [
    {
        id:1,
        Silabosistemas: "silaboSitemas.pdf",
        
    },
    {
        id:2,
        silaboTI: "SilaboIngTi.pdf",
        
    }

]
async function buscarMallaPorId(id){
   

        const mallas = malla.find(m=> m.id === id)
        if(!mallas){

            const e = new Error();
            e.message = "NO ENCONTRADO"
            throw e;
        }
        return mallas;
    
}

async function buscarDocentesPorId(id){
    

        const docente = docentes.find(m=> m.id === id)
        if(!docente){

            const e = new Error();
            e.message = "NO ENCONTRADO"
            throw e
        }

        return docente;

    
}
function buscarSilabosPorId(id){
    
        const silabo = silabos.find(m=> m.id === id)
        if(!silabo){
            const e = new Error();
            e.message = "NO ENCONTRADO"
            throw e
        }
        return silabo;

    

}

async function main(){

    try{
        const malla = await buscarMallaPorId(1);
        const docente = await buscarDocentesPorId(malla.id_docentes);
        const silabo = await buscarSilabosPorId(docente.id_silabos);
        console.log(malla);
        console.log(docente);
        console.log(silabo);

    }catch(err){
        console.log(err.message);
    }
 
}
main();