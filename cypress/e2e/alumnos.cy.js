describe("Bloque de alumnos", () => {
  it("Página frontal puede ser abierta", () => {
    cy.visit("http://localhost:3000")
    cy.contains("consultar")
  })

  it("Visitar apartado de alumnos", () => {
    cy.visit("http://localhost:3000")
    cy.contains("Alumnos").click()
    cy.contains("Alumnos")
    cy.contains("Puedes filtrar por estos campos")
  })

  it("Mostrar resultados de alumnos al cargar la página", () => {
    cy.visit("http://localhost:3000/alumnos")
    cy.get(".MuiDataGrid-row[role='row']")
  })

  it("Ejecutar la búsqueda de alumnos según filtros aplicados", () => {
    cy.intercept("GET", "/api/students", {
      fixture: "alumnos.json",
    }).as("getAlumnos")

    cy.visit("http://localhost:3000/alumnos")
    cy.wait("@getAlumnos")

    cy.get('input[placeholder="Nombre"]').type("Kathryne")
    cy.get("button").contains("Buscar").click()

    cy.wait(500)

    cy.get(".MuiDataGrid-row[role='row']").should("have.length", 1)
    cy.get(".MuiDataGrid-row[role='row']").first().contains("Kathryne")
  })
})
