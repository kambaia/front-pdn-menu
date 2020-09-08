import React, { useEffect, useState } from "react";
import { Container } from "../../styles/configuration/Program";
import { ContentDropDownList, WrapList, Button, InputBox } from "../../styles/configuration/Configuration";
import SubHeader from "../../components/SubHeader";
import DropDownList from "../../components/DropDownList";

import TableComponent from "../../components/TableComponent";

let programArray = [];

const Program = () => {
	const [status, setStatus] = useState(false);
	const [axe, setAxe] = useState('')
	const [policy, setPolicy] = useState([])
	const [description, setDescription] = useState(null);
	const [policyID, setPolicyID] = useState(null);
	const [name, setName] = useState(null);

	return (
		<>
			<Container>
				<div className="content">
					<SubHeader title="Adicionar Programas"></SubHeader>
					<div>
						<ContentDropDownList>
							<WrapList>
								<DropDownList
									placeholder="Selecione o eixo"
									data={[{}]}
									onSelected={(value, id, position) => {
									
									}}
								/>
							</WrapList>
							<WrapList>
								<DropDownList
									placeholder="Selecione a política"
									data={[{}]}
									onSelected={(value, id, position) => {
									
									}}
								/>
							</WrapList>
						</ContentDropDownList>

						<div className="lessMargin">
							<ContentDropDownList>
								<WrapList>
									<div class="input-grup">
										<InputBox
											type="text"
											name="name"
											placeholder=" Ex: Programa 1 "
											value={name}
											size={50}
											onChange={e => setName(e.target.value)}
										/>
										<form className="form" >
											<InputBox
												className="input2"
												name="description"
												type="text"
												size={100}
												placeholder="Descrição do programa..."
												value={description}
												onChange={e => setDescription(e.target.value)}
											/>
										</form>
									</div>
								</WrapList>

								<WrapList >
									<div className="buttons">
										<Button
											type='button'
											className="btn-number"
										
										>
											Adicionar
									  </Button>

										<Button
											type="button"
											className="button_add"
										
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
								dataRows={programArray}
								dataCells={[
									{ cell: "Programa" },
									{ cell: "Nome" }]}
								// onEdit={() => editValues()}
								// onDelete={() => deleteValues()}
								showControls={true}
							/>
						</ContentDropDownList>
					</div>
				</div>
			</Container >
		</>
	);
};

export default Program;
