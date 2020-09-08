import React, { useState, useEffect } from 'react'
import SubHeader from '../../components/SubHeader'
import { ContentDropDownList, WrapList } from "../../styles/configuration/Configuration";
import { InputBox, Button } from "../../styles/configuration/Configuration";
import { Container } from "../../styles/configuration/Indicators";
import { FiEdit, FiTrash } from 'react-icons/fi';
import TableComponent from "../../components/TableComponent";
import DropDownList from '../../components/DropDownList';


let IndicatorArray = [];



const Indicators = () => {
	const [description, setDescription] = useState("");
	const [name, setName] = useState("");
	const [measure, setMeasure] = useState("");
	const [evaluation, setEvaluation] = useState(null);
	const [source, setSource] = useState("");
	const [formula, setFormula] = useState("");

	const [program, setProgram] = useState([]);
	const [goals, setGoals] = useState([]);
	const [goalsID, setGoalsID] = useState();
	const [showTable, setShowTable] = useState("");
	const [showProgram, setShowProgram] = useState("");

	async function getGoalsFromProgram(id) {
		
	}


	async function handleSave(goalsID, indicator_array) {
		
		
	} 


	const cells = [
		{cell: "Eixo"},
		{cell: "Política"}];

	const cellLists = [
		{cell: "Nome"},
		{cell: "Descrição"},
		{cell: "Fonte"},
		{cell: "Unidade de medida"},
		{cell: "Frequência de avalição"},
		{cell: "Fórmula"}];

	const rows = [
		{
			rows: [
				{ name: showProgram.policy && showProgram.policy.axe.description },
				{ description: showProgram.policy && showProgram.policy.description }
			]
		},
	]

	function handleAddIndicator(name, source, measure, evaluation, formula, description) {
		IndicatorArray.push(
			{
				rows: [
					{ name: name },
					{ description: description },
					{source: source},
					{ measure: measure },
					{ evaluation: evaluation },
					{formula: formula}
				]
			}
		);
		setName("");
		setSource("");
		setMeasure("");
		setEvaluation("");
		setFormula("");
		setDescription("");
	}

	return (
		<>
			<Container>
			<div className="content">
				<SubHeader title="Adicionar Indicadores" />
				<div>
					<ContentDropDownList>
						<WrapList>
							<DropDownList
								placeholder="Seleciona o programa"
								data={program}
								onSelected={(value, id, position) => {
									getGoalsFromProgram(id)
									/* setShowTable(id)
									handleSearchProgram(id).then((data) => {
										setShowProgram(data)
									}) */
								}}
							/>
						</WrapList>
						<WrapList>
							<DropDownList
								placeholder="Seleciona o Objectivo"
								data={[{}]}
								onSelected={(value, id, position) => {
									
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

					<div className="lessMargin">
						<ContentDropDownList>
							<WrapList>
								<InputBox
									className="cart"
									name="name"
									type="text"
									size={100}
									placeholder="Nome do indicador"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</WrapList>

							<WrapList>
								<InputBox
									type="text"
									name="source"
									size={100}
									placeholder="Fonte"
									value={source}
									onChange={(e) => setSource(e.target.value)}
								/>
							</WrapList>

						</ContentDropDownList>
					</div>

					<div className="lessMargin">
						<ContentDropDownList>
							<WrapList>
								<InputBox
									type="search"
									name="measure"
									placeholder="Selecionar a medida"
									list="measure"
									size={49}
									value={measure}
									onChange={(e) => setMeasure(e.target.value)}
								/>
								<datalist id="measure">
									<option>Numero</option>
									<option>Percentagem</option>
								</datalist>

								<InputBox
									type="search"
									name="evaluation"
									placeholder="Frequência  de avaliação"
									size={49}
									list="evaluation"
									value={evaluation}
									onChange={(e) => setEvaluation(e.target.value)}
									style={{ marginLeft: 5 }}
								/>
								<datalist id="evaluation">
									<option>Anual</option>
									<option>Trimestral</option>
									<option>Quinquennal</option>
								</datalist>
							</WrapList>

							<WrapList>
								<InputBox
									type="text"
									name="formula"
									size={100}
									placeholder="Fórmula"
									value={formula}
									onChange={(e) => setFormula(e.target.value)}
								/>
							</WrapList>

						</ContentDropDownList>
					</div>

					<div className="lessMargin">
						<ContentDropDownList>

							<WrapList>
								<InputBox
									type="text"
									name="description"
									size={100}
									placeholder="Descrição"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</WrapList>
							
							<WrapList>
								<div className="buttons">
									<Button
										type='button'
										className="btn-number"
										onClick={() => handleAddIndicator(name, source, measure, evaluation, formula, description)}
									>
										Adicionar
									</Button>

									<Button
										type="button"
										className="button_add"
										onClick={() => handleSave(goalsID, IndicatorArray)}
										style={{marginRight: 0}}>
										Registar
                          			</Button>
								</div>
							</WrapList>

						</ContentDropDownList>
					</div>
					<ContentDropDownList>
                            <TableComponent
                                dataRows={IndicatorArray}
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
};


export default Indicators