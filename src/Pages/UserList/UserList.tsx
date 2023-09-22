import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Table,
  TableBox,
  TableContainer,
  TableRow,
  TableHeader,
  TableCell,
  ContainerActions,
  NoDataMessage,
  Paginator,
} from "./styles";

export function UserListPage() {
  const [actualPage, setActualPage] = useState(1);
  const headers = [
    "PrimerNombre",
    "PrimerApellido",
    "SegundoApellido",
    "Celular",
    "Perfil",
  ];

  const data: { [key: string]: string | number | boolean }[] = [
    {
      id: 1,
      PrimerNombre: "Fabian",
      PrimerApellido: "Cardenas",
      SegundoApellido: "Colorado",
      Celular: "3154879658",
      Perfil: "Cleaner",
      status: true,
    },
    {
      id: 2,
      PrimerNombre: "Camilo",
      PrimerApellido: "Quijano",
      SegundoApellido: "Contreras",
      Celular: "3154789652",
      Perfil: "Cleaner",
      status: true,
    },
    {
      id: 3,
      PrimerNombre: "Freddy",
      PrimerApellido: "Arcila",
      SegundoApellido: "Sierra",
      Celular: "3598741458",
      Perfil: "Cleaner",
      status: true,
    },
    {
      id: 4,
      PrimerNombre: "Felipe",
      PrimerApellido: "Torres",
      SegundoApellido: "Muñoz",
      Celular: "3124516895",
      Perfil: "Cleaner",
      status: true,
    },
  ];

  const actions = {
    delete: false,
    edit: true,
    view: true,
    status: false,
    add: false,
    substract: false,
  };

  const totalPages = 3;

  const handleBack = () => {
    setActualPage(actualPage - 1);
  };

  const handleNext = () => {
    setActualPage(actualPage + 1);
  };

  const handleAction = (action: string, item: any) => {
    console.log("click action");
  };
  const viewId = false;
  const viewStatus = false;

  let keys = Object.keys(data[0] || {}).filter(
    (item) => item !== "select" && item !== "notSelect" && item !== "alarm"
  );
  if (!viewId) keys = keys.filter((item) => item !== "id");
  if (!viewStatus) keys = keys.filter((item) => item !== "status");

  return (
    <TableBox>
      <TableContainer>
        <div style={{ overflowX: "auto", paddingBottom: "10px" }}>
          {data && data.length > 0 ? (
            <Table>
              <TableRow height={"40px"}>
                {headers.map((header: any, i: number) => (
                  <TableHeader
                    key={i}
                    headersLength={headers.length}
                    height={"40px"}
                    color={""}
                    colorText={""}
                    positionHeader={""}
                    border={""}
                  >
                    <div className="div-th">{header}</div>
                  </TableHeader>
                ))}
              </TableRow>

              {data.map((item, i) => (
                <TableRow key={i} height={"40px"}>
                  {keys.map((key, y) => (
                    <TableCell
                      key={y}
                      headersLength={headers.length}
                      height={"40px"}
                      border={""}
                      positionCells={""}
                    >
                      <div className="div-td">{item[key]}</div>
                    </TableCell>
                  ))}
                  <ContainerActions>
                    {actions.add && (
                      <div className="container-icon">
                        <button
                          className="icon-add"
                          style={{ transform: "scale(0.8)" }}
                          onClick={() => handleAction("add", item)}
                          disabled={!item.status}
                        >
                          <span className="material-icons-outlined">add</span>
                        </button>
                      </div>
                    )}
                    {actions.substract && (
                      <div className="container-icon">
                        <button
                          className="icon-subs"
                          style={{ transform: "scale(0.8)" }}
                          onClick={() => handleAction("substrac", item)}
                          disabled={!item.status}
                        >
                          <span className="material-icons-outlined">
                            remove
                          </span>
                        </button>
                      </div>
                    )}
                    {actions.view && (
                      <div className="container-icon">
                        <button
                          className="icon"
                          style={{ transform: "scale(0.8)" }}
                          onClick={() => handleAction("view", item)}
                        >
                          <span>visibility</span>
                        </button>
                      </div>
                    )}
                    {actions.edit && (
                      <div className="container-icon">
                        <button
                          className="icon"
                          style={{ transform: "scale(0.8)" }}
                          onClick={() => handleAction("edit", item)}
                          disabled={!item.status}
                        >
                          <span className="material-icons-outlined">edit</span>
                        </button>
                      </div>
                    )}
                    {actions.status && (
                      <div className="container-icon">
                        <label className="container-switch">
                          <input
                            type="checkbox"
                            checked={Boolean(item.status)}
                            onChange={() => handleAction("status", item)}
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    )}
                    {actions.delete && (
                      <div className="container-icon">
                        <button
                          className="icon"
                          style={{ transform: "scale(0.8)" }}
                          onClick={() => handleAction("delete", item)}
                          disabled={!item.status}
                        >
                          <span className="material-icons-outlined">
                            delete
                          </span>
                        </button>
                      </div>
                    )}
                  </ContainerActions>
                </TableRow>
              ))}
            </Table>
          ) : (
            <NoDataMessage>No se encontraron datos relacionados</NoDataMessage>
          )}
          (
          <Paginator>
            <span
              className={`material-icons ${actualPage === 1 ? "disabled" : ""}`}
              onClick={handleBack}
            >
              arrow_circle_left
            </span>
            <h3>{`Página ${actualPage} de ${totalPages}`}</h3>
            <span
              className={`material-icons ${
                actualPage >= totalPages ? "disabled" : ""
              }`}
              onClick={handleNext}
            >
              arrow_circle_right
            </span>
          </Paginator>
          )
        </div>
      </TableContainer>
    </TableBox>
  );
}
