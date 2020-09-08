/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { Content } from '../../styles/configuration/Activity';
import { Container, ContentDropDownList, WrapList, Button } from '../../styles/configuration/Configuration';
import SubHeader from '../../components/SubHeader';
import DropDownList from "../../components/DropDownList";
import { FiEdit, FiTrash } from 'react-icons/fi';

let ActivityArray = [];

const Activity = () => {
	const [program, setProgram] = useState([]);
	const [goals, setGoals] = useState([]);
	const [target, setTarget] = useState([]);
	const [indicator, setIndicator] = useState();
	const [indicatorID, setIndicatorID] = useState();

	const [activity, setActivity] = useState("");
	const [newActivity, setNewActivity] = useState("");
	const [type, setType] = useState(null);


	return (
		<>
			<Container>
				<SubHeader title="Adicionar Actividade"></SubHeader>
				<ContentDropDownList>
					<WrapList>
						<DropDownList
							placeholder="Seleciona o programa"
							data={program}
							onSelected={(value, id, position) => {
								getAllGoals(id);
							}}
						/>
					</WrapList>
					<WrapList>
						<DropDownList
							placeholder="Seleciona objectivo"
							data={goals}
							onSelected={(value, id, position) => {
								getAllTargets(position);
							}}

						/>
					</WrapList>
				</ContentDropDownList>
				<ContentDropDownList>
					<WrapList>
						<DropDownList
							placeholder="Seleciona a meta"
							data={target}
							onSelected={(value, id, position) => {
								getAllIndicators(id, position);
							}}
						/>
					</WrapList>
					
					<WrapList>
						<DropDownList
							placeholder="Seleciona o indicador"
							data={indicator}
							onSelected={(value, id, position) => {
								getAllIndicators(id, position);
								setIndicatorID(id)
							}}
						/>
					</WrapList>


					<WrapList>
						<DropDownList
							placeholder="Seleciona o tipo de actividade"
							data={[
								{ option: 'DAD' },
								{ option: 'Acções Correntes' },
								{ option: 'Projectos' },

							]}
							onSelected={option => {
								setType(option);
							}}
						/>
					</WrapList>
				</ContentDropDownList>
				<ContentDropDownList>
					<Content>
						<section className="cart-section-select">
							<form onSubmit={(e) => { handleAddActivity(newActivity); e.preventDefault(); }} className="cart-input">
								<input
									type="text"
									placeholder="Insira a actividade "
									value={newActivity}
									onChange={(e) => setNewActivity(e.target.value)}
								/>
							</form>
							<div className="btn-number">
								<button onClick={() => handleAddActivity(newActivity)}>Adicionar</button>
							</div>
							<button
								type="button"
								className="button_add"
								onClick={() => handleSave(indicatorID, type, ActivityArray)}
							>
								Registar
						</button>
						</section>

						<section className="cart-section-list">
							{ActivityArray.map((value, index) => {
								return <li className="list_activity">{value}
									<button type="button" className="btnDelete" onClick={() => DeleteValues(value, index)}>
										<FiTrash color="#555" />
									</button>

									<button type="button" className="btnEdit" onClick={() => EditValues(value)}>
										<FiEdit color="#555" />
									</button>

								</li>;
							})}
						</section>
					</Content>
				</ContentDropDownList>
			</Container>

		</>
	);
};

export default Activity;
