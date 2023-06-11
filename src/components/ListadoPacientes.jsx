
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, elimimarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 ">

        {pacientes && pacientes.length 
        ?(
          <>
              <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
              <p
              className="text-xl mt-3 mb-5 text-center font-bold">
              Administra tus {''}
              <span className="text-indigo-600">Pacientes y Citas</span>
              </p>

              <div className="md:h-screen overflow-y-scroll">
                { pacientes.map( paciente => (
                    <Paciente 
                      key={paciente.id}
                      paciente={paciente}
                      setPaciente={setPaciente}
                      elimimarPaciente={elimimarPaciente}
                    />        
                  ))}
              </div>
          </>
        )  
        
        :(
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
              <p
              className="text-xl mt-3 mb-5 text-center font-bold">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600">a tu APP.</span>
              </p>
          </>

        )}

      
      
    </div>
  )
}

export default ListadoPacientes