
import React, { useState, useEffect } from 'react'
import SubHeader from '../../components/SubHeader'
import { ContentDropDownList, WrapList } from "../../styles/configuration/Configuration";
import { InputBox, Button } from "../../styles/configuration/Configuration";
import { Container } from "../../styles/configuration/Indicators";
import DropDownList from '../../components/DropDownList';
import TableComponent from "../../components/TableComponent";

let taskArray = [];

const Task = () => {

    const [newGools, setNewGoals] = useState("");
    const [task, setTask] = useState("");

    const [program, setProgram] = useState([]);
    const [goals, setGoals] = useState([]);
    const [indicator, setIndicator] = useState([]);
    const [activity, setActivity] = useState([]); 

    const [showTable, setShowTable] = useState("");
    const [showProgram, setShowProgram] = useState("");
    const [valor, setValor] = useState("");


    const cells = [
        { cell: "Eixo" },
        { cell: "Politica" }];

    const cellLists = [
        { cell: "Tarefa" },
        { cell: "Valor Anual" }];

    const rows = [
        {
            rows: [
                { name: showProgram.policy && showProgram.policy.axe.description },
                { description: showProgram.policy && showProgram.policy.description },
            ]
        },
    ]

    async function handleGetGoals(program_id) {

    }

    async function handleGetIndicators(goal_id) {

    }

    async function handleGetActivity(indicator_id) {

       
    }

    function handleAddTask(task, valor) {
      

    }

    return (
        <>
            <Container>
                <div className="content">
                    <SubHeader title="Adicionar Tarefas" />
                    <ContentDropDownList>
                        <WrapList>
                            <DropDownList
                                placeholder="Seleciona o programa"
                                data={program}
                                onSelected={(value, id, position) => {
                                  
                                }}
                            />
                        </WrapList>
                        <WrapList>
                            <DropDownList
                                placeholder="Seleciona o objectivo"
                                data={goals}
                                onSelected={(value, id, position) => {
                                   
                                }}
                            />
                        </WrapList>
                        <WrapList>
                            <DropDownList
                                placeholder="Seleciona o indicador"
                                data={indicator}
                                onSelected={(value, id, position) => {
                                   
                                }}

                            />
                        </WrapList>
                        <WrapList>
                            <DropDownList
                                placeholder="Seleciona a actividade"
                                data={activity}
                                onSelected={(value, id, position) => {
                                  
                                }}
                            />
                        </WrapList>
                        {/* <WrapList>
                            <DropDownList
                                placeholder="Seleciona o Objectivo"
                                data={target}
                                onSelected={(value, id, position) => {
                                    setTargetID(id)
                                }}
                            />
                        </WrapList> */}

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
                        <WrapList>
                            <InputBox
                                placeholder="Insira o objectivo anual"
                                value={newGools}
                                onChange={(e) => setNewGoals(e.target.value)}
                                size={100}
                            />
                        </WrapList>
                        <WrapList>
                            <InputBox
                                placeholder="Insira o valor anual da tarefa"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                                size={100}
                            />
                        </WrapList>
                    </ContentDropDownList>
                    <div className="lessMargin">
                        <ContentDropDownList>

                            <WrapList>
                                <InputBox
                                    type="text"
                                    name="tarefa"
                                    size={100}
                                    placeholder="Insira a tarefa"
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                />
                            </WrapList>

                            <WrapList>
                                <div className="buttons">
                                    <Button
                                        type='button'
                                        className="btn-number"
                                        onClick={() => handleAddTask(task, valor)}
                                    >
                                        Adicionar
									</Button>

                                    <Button
                                        type="button"
                                        className="button_add"
/*                                         onClick={() => handleSave(targetID, IndicatorArray)}
 */                                        style={{ marginRight: 0 }}>
                                        Registar
                          			</Button>
                                </div>
                            </WrapList>
                        </ContentDropDownList>
                    </div>
                    <ContentDropDownList>
                        <TableComponent
                            dataRows={[]}
                            dataCells={cellLists}
                            // onEdit={() => editValues()}
                            // onDelete={() => deleteValues()}
                            showControls={true}
                        />
                    </ContentDropDownList>
                </div>
            </Container>
        </>
    );
};

export default Task;
