
const usuarios = [
    { id: 1, nombre: 'Jose Cartes', telefono: 11111, edad: 25 },
    { id: 2, nombre: 'Pedro Gomez', telefono: 22222, edad: 44 },
    { id: 3, nombre: 'Maria Lara', telefono: 33333, edad: 79 },
    { id: 4, nombre: 'David Perez', telefono: 44444, edad: 12 },
    { id: 5, nombre: 'Camilo Silva', telefono: 55555, edad: 51 },
    { id: 6, nombre: 'Javiera Alarcon', telefono: 66666, edad: 64 }
]

const atenciones = [
    { id: 1, fecha: '25-06-2020', id_usuario: 2 },
    { id: 2, fecha: '12-03-2018', id_usuario: 6 },
    { id: 3, fecha: '09-10-2014', id_usuario: 2 },
    { id: 4, fecha: '30-01-2010', id_usuario: 1 },
    { id: 5, fecha: '15-12-2018', id_usuario: 4 },
    { id: 6, fecha: '20-07-2019', id_usuario: 5 },
    { id: 7, fecha: '12-12-2021', id_usuario: 3 },
    { id: 8, fecha: '12-01-2022', id_usuario: 3 },
    { id: 9, fecha: '12-01-2011', id_usuario: 1 },
    { id: 10, fecha: '18-09-2018', id_usuario: 2 },
    { id: 11, fecha: '01-06-2022', id_usuario: 3 }
]

  // concatenar id_usuario y usuario
  const aConcatData = usuarios.map(usuario => {
    const atencionesUsuario = atenciones.filter(atencion => atencion.id_usuario === usuario.id)
    return {
        ...usuario,
        atenciones: atencionesUsuario
    }
})
//console.table(aConcatData);


const aCantidadAtenciones = aConcatData.map(usuario => {
    return {
        ...usuario,
        cantidadAtenciones: usuario.atenciones.length
       
    }
        //obtener cantidad de atenciones por usuario
    
})
    // console.table(aCantidadAtenciones);







// No modificar los arreglos existentes.
// No usar librerÃ­as externas
// Ocupar ECMAScript 6+

// Ordenar de forma descendente los usuarios segÃºn su edad, mostrando solo el nombre
// Respuesta:

function nombres_usuarios_ordenados_edad_descend (){
    return usuarios.sort(function(a,b){
        return b.edad - a.edad
    }).map(function(usuario){
        return usuario.nombre
    })
}

console.log(`Usuarios ordenados por edad descendente:`);
 console.table(nombres_usuarios_ordenados_edad_descend());



// Obtener la cantidad de atenciones del usuario con mÃ¡s atenciones.
// Respuesta:
    
    const usuarioMasAtenciones  = aCantidadAtenciones.reduce((a, b) => {
        return a.cantidadAtenciones > b.cantidadAtenciones ? a : b

    })

    console.log(`El usuario con mas atenciones es ${usuarioMasAtenciones.nombre} y tiene ${usuarioMasAtenciones.cantidadAtenciones} atenciones`)
    console.table(usuarioMasAtenciones);






// Obtener el nombre del(los) usuario(s) con mÃ¡s atenciones.
// Respuesta:

const usuariosMasAtenciones = aCantidadAtenciones.filter(usuario => usuario.cantidadAtenciones === usuarioMasAtenciones.cantidadAtenciones)
   //  console.table(usuariosMasAtenciones.map(usuario => usuario.nombre));


         //obtener fechas de atenciones y telefono de usuario.
  const aFechasAtenciones = aConcatData.map(usuario => {
      return {
          ...usuario,
          fechasAtenciones: usuario.atenciones.map(atencion => atencion.fecha)
      }
  })
  const aMayorCantidadAtenciones = aCantidadAtenciones.reduce((a, b) => {
      return a.cantidadAtenciones > b.cantidadAtenciones ? a : b
  })              
  const aCantidadAtencionesData = aCantidadAtenciones.filter(usuario => usuario.cantidadAtenciones === aMayorCantidadAtenciones.cantidadAtenciones)
  console.log(`La mayor cantidad de atenciones son: ${usuarioMasAtenciones.cantidadAtenciones}`)
  console.table(aCantidadAtencionesData);


// Obtener el(los) nÃºmero de telÃ©fono de(los) usuario(s) que tienen mÃ¡s de una atenciÃ³n en el mismo aÃ±o.
// Respuesta:

          // obtener atenciones usuarios
          const aAtencionesUsuarios = aConcatData.map(usuario => {
            return usuario.atenciones
        })
        // seleccionar y mostrar las primeras atenciones por fecha de atenciones 
        const aAtencionesUsuariosFiltradas = aAtencionesUsuarios.map(atenciones => {
            return atenciones.filter(atencion => atencion.fecha > '01-01-2020')
        })
        //obtener las fechas mas temprana de las atenciones
        const aFechasMasTemprana = aAtencionesUsuariosFiltradas.map(atenciones => {
            return atenciones.reduce((fechaMasTemprana, atencion) => {
                return fechaMasTemprana < atencion.fecha ? fechaMasTemprana : atencion.fecha
            }, '01-01-2020')
        })
        // obtener los usuarios que tienen mas de una atencion
        const aUsuariosConMasDeUnaAtencion = aConcatData.filter(usuario => {
            return usuario.atenciones.length > 1
        })
        // obtener telefono y nombre de estos usuarios que tienen mas de una atencion
        const aUsuariosConMasDeUnaAtencionFiltrados = aUsuariosConMasDeUnaAtencion.map(usuario => {
            return {
                nombre: usuario.nombre,  //opcional
                telefono: usuario.telefono
            }
        })
        console.log(`Los usuarios con mas de una atencion son:`)
        console.table(aUsuariosConMasDeUnaAtencionFiltrados);
       
        // obtener fecha mas temprana de las atenciones
        const aFechasMasTempranaFiltradas = aFechasMasTemprana.map(fechaMasTemprana => {
            return fechaMasTemprana.split('-')
        })
        
        // obtener el año de la fecha mas temprana
        const aAniosFechasMasTemprana = aFechasMasTempranaFiltradas.map(fechaMasTemprana => {
            return fechaMasTemprana[0]
        })
        // obtener los usuarios que tienen mas de una atencion en el mismo año
        const aUsuariosConMasDeUnaAtencionEnElMismoAnio = aUsuariosConMasDeUnaAtencion.filter(usuario => {
            return usuario.atenciones.some(atencion => {
                return atencion.fecha.split('-')[0] === aAniosFechasMasTemprana[0]
            })
        })
        // obtener telefono y nombre de estos usuarios que tienen mas de una atencion en el mismo año
        const aUsuariosConMasDeUnaAtencionEnElMismoAnioFiltrados = aUsuariosConMasDeUnaAtencionEnElMismoAnio.map(usuario => {
            return {
                nombre: usuario.nombre,  //opcional
                telefono: usuario.telefono
            }
        }
        )
        console.log(`Los usuarios con mas de una atencion en el mismo año son:`)
        console.table(aUsuariosConMasDeUnaAtencionEnElMismoAnioFiltrados);
        


// Obtener usuarios ordenados de forma ascendente en base a la fecha de su primera atenciÃ³n, mostrando el id.
// Respuesta:

         //obtener primera atencion de cada usuarios.
        const aFirstAtencion = aConcatData.map(usuario => {
            const firstAtencion = usuario.atenciones[0]
            return {
                ...usuario,
                firstAtencion
            }
        })
        // ordenar por primera atencion de cada usuarios
        const aOrdenar = aFirstAtencion.sort((a, b) => {
            return a.firstAtencion.fecha > b.firstAtencion.fecha ? 1 : -1
        })
        // mostrar y listar todas las atenciones con sus usuarios.
            const aAtenciones = aConcatData.map(usuario => {
                const atencionesUsuario = usuario.atenciones.map(atencion => {
                    return {
                        ...atencion,
                        usuario: usuario.nombre
                    }
                })
                return atencionesUsuario
            })                
              const aFlatten = aAtenciones.flat()
    
            const aFirstAtencionUsuario = aConcatData.map(usuario => {
                const firstAtencion = usuario.atenciones[0]
                return {
                    ...usuario,
                    firstAtencion
                }
            })
            const aFirstAtencionUsuarioFlatten = aFirstAtencionUsuario.flat()
            const aOrdenarFecha = aFirstAtencionUsuarioFlatten.sort((a, b) => {
                return a.firstAtencion.fecha > b.firstAtencion.fecha ? 1 : -1
            })
            const aFechas = aOrdenarFecha.map(usuario => {
                const fecha = usuario.firstAtencion.fecha
                return {
                    ...usuario,
                    fecha
                }
            })
            // mostras solamente la tabla fechas
            const aFechasTabla = aFechas.map(usuario => {
                const fecha = usuario.fecha
                return {
                    
                    fecha
                }
            })
                  const toDate = (aFechas) => {
                    const [day, month, year] = aFechas.split("-")
                    return new Date(year, month - 1, day)
                    }
                    const aFechasDate = aFechas.map(usuario => {
                        const fecha = usuario.fecha
                        const date = toDate(fecha)
                        return {
                            ...usuario,
                            date
                        }
                    })

                  // ordenar por fecha ascendente
                    const aOrdenarFechaAsc = aFechasDate.sort((a, b) => {
                        return a.date > b.date ? 1 : -1
                    })
                    console.log(`Los usuarios ordenados por fecha de su primera atencion son ascendente son:`)
                    console.table(aOrdenarFechaAsc);

            


