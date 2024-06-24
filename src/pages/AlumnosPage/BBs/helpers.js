// Lo suyo sería filtrar pasándole params al backend, pero mockApi no lo permite.
export const filterAlumnos = (alumnos = [], filters = {}) => {
  const newAlumnos = alumnos.filter((alumno) => {
    if (filters.name !== "" && !alumno.name.toLowerCase().includes(filters.name.toLocaleLowerCase())) return false
    if (filters.surname !== "" && !alumno.surname.toLowerCase().includes(filters.surname.toLocaleLowerCase()))
      return false
    if (filters.email !== "" && !alumno.email.toLowerCase().includes(filters.email.toLocaleLowerCase())) return false
    if (filters.dni !== "" && !alumno.dni.toLowerCase().includes(filters.dni.toLocaleLowerCase())) return false

    return true
  })

  return newAlumnos
}
