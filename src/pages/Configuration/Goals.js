import React, { useEffect, useState } from "react";

import DropDownList from "../../components/DropDownList";
import { Container } from "../../styles/configuration/Configuration";
import SubHeader from "../../components/SubHeader";
import { Forms } from "../../styles/configuration/goal";
import { ContentDropDownList, WrapList } from "../../styles/configuration/Configuration";
import TableComponent from "../../components/TableComponent";

let GoalsArray = [];

const Goals = () => {

  const [program, setProgram] = useState([]);
  const [goals, setGoals] = useState([]);
  const [showFull, setShowFull] = useState([]);
  const [showTable, setShowTable] = useState("");

  const [programID, setProgramID] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const cells = [
    {
      cell: "Eixo",
    },
    {
      cell: "Política",
    },
  ];

  const cellLists = [
    {
      cell: "Objectivo",
    },
    {
      cell: "Descrição",
    }
  ];

  const rows = [
    {
      rows: [
        { name: showFull.policy && showFull.policy.axe.description },
        { description: showFull.policy && showFull.policy.description },
      ]
    },
  ]

 
  function handleAddGoals(description, name) {
    GoalsArray.push({
      rows: [
        { name: name },
        { description: description },
      ]
    });
    setDescription("");
    setName("");
  }

  async function handleSave(programID, GoalsArray) {

  }
  
  

  return (
    <>
      <Container>
        <div className="content">
          <SubHeader title="Adicionar Objectivos"></SubHeader>
          <div className="card-body">
            <ContentDropDownList>
              <WrapList>
                <DropDownList
                  placeholder="Seleciona o programa"
                  data={program}
                  onSelected={(value, id, position) => {
                    setProgramID(id)
                    setShowTable(id)
                   
                  }}

                />
              </WrapList>
            </ContentDropDownList>
            <ContentDropDownList>
              {showTable ? (
                <>
                  <TableComponent
                    dataRows={rows}
                    dataCells={cells}
                    onEdit={() => null}
                    onDelete={() => null}
                    showControls={false}
                  />
                </>
              ) : (
                  ""
                )}
            </ContentDropDownList>


            <ContentDropDownList>
              <section>
                <Forms>
                  <div class="input-grup">
                    <input
                      type="text"
                      name="name"
                      placeholder=" Ex: Objectivo 1 "
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <form
                      onSubmit={(e) => {
                        handleAddGoals(description, name);
                        e.preventDefault();
                      }}
                    >
                      <input
                        name="description"
                        type="text"
                        placeholder="Descrição do objectivo..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </form>
                  </div>
                  <div className="btn-grup">
                    <div className="btn-number">
                      <button
                        className="button-check"
                        onClick={() =>
                          handleAddGoals(description, name)
                        }
                        type="button"
                      >
                        Adicionar
                      </button>
                    </div>

                    <div className="btn-number">
                      <button
                        type="button"
                        className="button_add"
                        onClick={() => handleSave(programID, GoalsArray)}
                      >
                        Registar
                      </button>
                    </div>
                  </div>
                </Forms>
              </section>
            </ContentDropDownList>
            <ContentDropDownList>
              <TableComponent
                dataRows={GoalsArray}
                dataCells={cellLists}
                // onEdit={() => editValues()}
                // onDelete={() => deleteValues()}
                showControls={true}
              />
            </ContentDropDownList>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Goals;
