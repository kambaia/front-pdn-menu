import React from "react";
import { TableContainer } from "./styles";
import { FiEdit, FiTrash } from "react-icons/fi";

const TableComponent = props => {

    const {
        dataCells,
        dataRows,
        onEdit,
        onDelete,
        showControls = true, // Default behavior
    } = props;

    return (
        <TableContainer>
            <div className="table">
                <div className="row header">
                    {dataCells && (
                        dataCells.map((value, index) => {
                            return (
                                <div className="cell">
                                    {value.cell}
                                </div>
                            )
                        })
                    )}
                    {showControls ?
                        <div className="cell">
                            Opções
                    </div>
                        : null}
                </div>
                {dataRows && (
                    dataRows.map((value, index) => {
                        return (
                            <div className="row" >
                                <div className="cell" data-title="Indicador">
                                    {value.rows[0].name}
                                </div>
                                { value.rows[1] !== undefined ? <div className="cell" data-title="Indicador">
                                    {value.rows[1].description }
                                </div> : null  }
                                { value.rows[2] !== undefined ? <div className="cell" data-title="Indicador">
                                    {value.rows[2].source }
                                </div> : null  }
                                { value.rows[3] !== undefined ? <div className="cell" data-title="Indicador">
                                    {value.rows[3].measure }
                                </div> : null  }
                                { value.rows[4] !== undefined ? <div className="cell" data-title="Indicador">
                                    {value.rows[4].evaluation}
                                </div> : null }
                                { value.rows[5] !== undefined ? <div className="cell" data-title="Indicador">
                                    {value.rows[5].formula}
                                </div> : null }
                                {showControls ?
                                    <div className="cell" data-title="Opções">
                                        <FiEdit className="icons" onClick={() => onEdit()} />
                                        <FiTrash className="icons" onClick={() => onDelete()} />
                                    </div>
                                    : null}
                            </ div>
                        )
                    })
                )}
            </div>
        </TableContainer >
    )
}

export default TableComponent;