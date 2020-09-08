import React, { useEffect, useState } from "react";
import { Container } from "../../styles/configuration/Policies";
import { ContentDropDownList, WrapList, Button, InputBox } from "../../styles/configuration/Configuration";
import SubHeader from "../../components/SubHeader";
import DropDownList from "../../components/DropDownList";

import TableComponent from "../../components/TableComponent";

let arrayPolicies = [];
const listEixo = [];

const Policies = () => {
  const [axe, setAxe] = useState([]);

  const [description, setDescription] = useState(null);
  const [name, setName] = useState(null);
  const [axeID, setAxeID] = useState(null);


  function handleAdddPolity(description, name) {
    
    arrayPolicies.push({
      rows: [
        { name },
        { description }
      ]
    });
    setName('');
    setDescription('');

  }
  async function handleSave(axeID, arrayPolicies) {

  }

  return (
    <>
      <Container>
        <div className="content">
          <SubHeader title="Adicionar Políticas"></SubHeader>
          <div>
            <ContentDropDownList>
              <WrapList>
                <DropDownList
                  placeholder="Seleciona o eixo"
                  data={listEixo}
                  onSelected={(dataSelected, id) => {
                    setAxeID(id);
                  }}
                />
              </WrapList>
            </ContentDropDownList>

            <div className="lessMargin">
              <ContentDropDownList >
                <WrapList >
                  <div class="input-grup">
                    <InputBox
                      type="text"
                      name="name"
                      placeholder=" Ex: Política 1 "
                      value={name}
                      size={30}
                      onChange={e => setName(e.target.value)}
                    />
                    <form className="form" onSubmit={(e) => { handleAdddPolity(description, name); e.preventDefault(); }}>
                      <InputBox
                        className="input2"
                        name="description"
                        type="text"
                        size={100}
                        placeholder="Descrição da política..."
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                      />
                    </form>
                  </div>
                </WrapList>

                <WrapList style={{flex: 0}}>
                  <div className="buttons">
                    <Button
                      type='button'
                      className="btn-number"
                      onClick={() => handleAdddPolity(name, description)}
                    >
                      Adicionar
									  </Button>

                    <Button
                      type="button"
                      className="button_add"
                      onClick={() => handleSave(axeID, arrayPolicies)}
                      style={{ marginRight: 0 }}
                    >
                      Registar
                    </Button>
                  </div>
                </WrapList>
              </ContentDropDownList>
            </div>
            <ContentDropDownList>
              <TableComponent
                dataRows={arrayPolicies}
                dataCells={[
                  { cell: "Descrição" },
                  { cell: "Política" }
                ]}
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
};

export default Policies;
