import { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import theme from "../../theme"

const Table = (props) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  })

  return (
    <DataGrid
      autoHeight
      disableColumnMenu
      disableColumnResize
      disableColumnSorting
      pageSizeOptions={[10]}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      localeText={{ MuiTablePagination: { labelRowsPerPage: "Filas por página" } }}
      {...props}
      sx={{
        ".MuiDataGrid-columnHeader": {
          backgroundColor: theme.colors.main,
          color: "white",
        },
        ".MuiDataGrid-columnHeaderTitle": {
          fontWeight: "bold",
        },
        ".MuiDataGrid-columnSeparator": {
          display: "none",
        },
        ".MuiDataGrid-footerContainer": {
          backgroundColor: "white",
        },
        ".MuiDataGrid-virtualScrollerContent": {
          backgroundColor: "white",
        },
      }}
    />
  )
}

export default Table
