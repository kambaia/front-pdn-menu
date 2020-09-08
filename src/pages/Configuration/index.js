import React, { useState, useEffect } from "react";
import { Container } from "../../styles/configuration/Assign";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import PageWrap from "../../components/PageWrap";
import Eixo from "./Quinquennium";
import { selectAxeOption } from "../../actions/configActions";
import Policies from "./Policies";
import Program from "./Program";
import Definition from "./Definition";
import Activity from "./Objective";
import Goals from './Goals';
import Indicators from './Indicators';
import AssignProgram from './Assign-Program';
import AddGroups from "./AddGroups";
import Task from "./Task"



class Configuration extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			showDefinition: false,
			showAxe: false,
			showPolicies: false,
			showProgram: false,
			showTask: false,
			showActivity: false,
			showGoals: false,
			showIndicators: false,
			showAssign: true,
			showAddGroups: false
		};
	}

	componentDidMount() {
		// ler se existe politicas
		// se sim,
		//this.props.selectAxeOption(true)
		this.checkPolicy()
	}

	async checkPolicy() {

	}
	render() {
		const {
			showAxe,
			showPolicies,
			showProgram,
			showDefinition,
			showActivity,
			showGoals,
			showIndicators,
			showAssign,
			showAddGroups,
			showTask,
		} = this.state;

		const dataSideBarWithAxe = this.props.axe_selected ? [
			{
				section: "Programação",
				menu: [
					{
						title: "Definição",
						onPress: () =>
							this.setState({
								showAxe: false,
								showPolicies: false,
								showProgram: false,
								showDefinition: true,
								showActivity: false,
								showGoals: false,
								showIndicators: false,
								showAssign: false,
								showAddGroups: false,
								showTask: false,
							}),
					},
					{
						title: "Eixo",
						onPress: () =>
							this.setState({
								showAxe: true,
								showPolicies: false,
								showProgram: false,
								showDefinition: false,
								showActivity: false,
								showGoals: false,
								showIndicators: false,
								showAssign: false,
								showAddGroups: false,
								showTask: false,
							}),
					},
					{
						title: "Políticas",
						onPress: () =>
							this.setState({
								showPolicies: true,
								showAxe: false,
								showProgram: false,
								showDefinition: false,
								showActivity: false,
								showGoals: false,
								showIndicators: false,
								showAssign: false,
								showAddGroups: false,
								showTask: false,
							}),
					},
					{
						title: "Programas",
						onPress: () =>
							this.setState({
								showProgram: true,
								showAxe: false,
								showPolicies: false,
								showDefinition: false,
								showActivity: false,
								showGoals: false,
								showIndicators: false,
								showAssign: false,
								showAddGroups: false,
								showTask: false,
							}),
					},
					{
						title: "Objectivos",
						onPress: () =>
							this.setState({
								showProgram: false,
								showAxe: false,
								showPolicies: false,
								showDefinition: false,
								showActivity: false,
								showGoals: true,
								showIndicators: false,
								showAssign: false,
								showAddGroups: false,
								showTask: false,
							}),
					},
					{
						title: "Indicadores",
						onPress: () =>
							this.setState({
								showProgram: false,
								showAxe: false,
								showPolicies: false,
								showDefinition: false,
								showActivity: false,
								showGoals: false,
								showIndicators: true,
								showAssign: false,
								showAddGroups: false,
								showTask: false,
							}),
					},
					{
						title: "Actividades",
						onPress: () =>
							this.setState({
								showProgram: false,
								showAxe: false,
								showPolicies: false,
								showDefinition: false,
								showActivity: true,
								showGoals: false,
								showIndicators: false,
								showAssign: false,
								showAddGroups: false,
								showTask: false,
							}),
					},
					{
						title: "Atribuir Programas",
						onPress: () =>
							this.setState({
								showProgram: false,
								showAxe: false,
								showPolicies: false,
								showDefinition: false,
								showActivity: false,
								showGoals: false,
								showIndicators: false,
								showAssign: true,
								showAddGroups: false,
								showTask: false,
							}),
					},
				],
			},
			{
				section: "Plano de acção",
				menu: [
					{
						title: "Tarefas",
						onPress: () =>
							this.setState({
								showAxe: false,
								showPolicies: false,
								showProgram: false,
								showDefinition: false,
								showActivity: false,
								showGoals: false,
								showIndicators: false,
								showAssign: false,
								showAddGroups: false,
								showTask: true,
							}),
					}
				]
			},
			
			{
				section: "Organização",
				menu: [
					{
						title: "Definição de Grupos",
						onPress: () =>
							this.setState({
								showAxe: false,
								showPolicies: false,
								showProgram: false,
								showDefinition: false,
								showActivity: false,
								showGoals: false,
								showIndicators: false,
								showAssign: false,
								showAddGroups: true,
								showTask: false,
							}),
					}
				]
			}
		]
			:
			[
				{
					section: "Programação",
					menu: [
						{
							title: "Definição",
							back: '#f00',
							onPress: () =>
								this.setState({
									showAxe: false,
									showPolicies: false,
									showProgram: false,
									showDefinition: true,
									showActivity: false,
									showGoals: false,
									showIndicators: false,
									showAssign: false,
									showAddGroups: false,
									showTask: false,
								}),
						},
						{
							title: "Eixo",
							back: '#f00',
							onPress: () =>
								this.setState({
									showAxe: true,
									showPolicies: false,
									showProgram: false,
									showDefinition: false,
									showActivity: false,
									showGoals: false,
									showIndicators: false,
									showAssign: false,
									showAddGroups: false,
									showTask: false,
								}),
						},
						{
							title: "Programas",
							back: '#f00',
							onPress: () =>
								this.setState({
									showProgram: true,
									showAxe: false,
									showPolicies: false,
									showDefinition: false,
									showActivity: false,
									showGoals: false,
									showIndicators: false,
									showAssign: false,
									showAddGroups: false,
									showTask: false,
								}),
						},
						{
							title: "Objectivos",
							back: '#f00',
							onPress: () =>
								this.setState({
									showProgram: false,
									showAxe: false,
									showPolicies: false,
									showDefinition: false,
									showActivity: false,
									showGoals: true,
									showIndicators: false,
									showAssign: false,
									showAddGroups: false,
									showTask: false,
								}),
						},
						{
							title: "Indicadores",
							back: '#f00',
							onPress: () =>
								this.setState({
									showProgram: false,
									showAxe: false,
									showPolicies: false,
									showDefinition: false,
									showActivity: false,
									showGoals: false,
									showIndicators: true,
									showAssign: false,
									showAddGroups: false,
									showTask: false,
								}),
						},
						{
							title: "Actividades",
							back: '#f00',
							onPress: () =>
								this.setState({
									showProgram: false,
									showAxe: false,
									showPolicies: false,
									showDefinition: false,
									showActivity: true,
									showGoals: false,
									showIndicators: false,
									showAssign: false,
									showAddGroups: false,
									showTask: false,
								}),
						},
						{
							back: '#f00',
							title: "Atribuir Programas",
							onPress: () =>
								this.setState({
									showProgram: false,
									showAxe: false,
									showPolicies: false,
									showDefinition: false,
									showActivity: false,
									showGoals: false,
									showIndicators: false,
									showAssign: true,
									showAddGroups: false,
									showTask: false,
								}),
						},
					],
				},
				{
					section: "Organização",
					menu: [
						{
							title: "Definição de Grupos",
							onPress: () =>
								this.setState({
									showAxe: false,
									showPolicies: false,
									showProgram: false,
									showDefinition: false,
									showActivity: false,
									showGoals: false,
									showIndicators: false,
									showAssign: false,
									showAddGroups: true,
									showTask: false,
								}),
						}
					]
				}
			];

		return (
			<>
				<Container>
					<div className="nav-menu">
					<Header />
					</div>
				<div className="body-main">
				<SideBar data={dataSideBarWithAxe} />
				<div className="body-goup">
					<PageWrap component={<Definition />} show={showDefinition} />
					<PageWrap
						component={<Eixo contextProps={this.props} />}
						show={showAxe}
					/>
					<PageWrap component={<Program />} show={showProgram} />
					<PageWrap component={<Policies />} show={showPolicies} />
					<PageWrap component={<Activity />} show={showActivity} />
					<PageWrap component={<Goals />} show={showGoals} />
					<PageWrap component={<Indicators />} show={showIndicators} />
					<PageWrap component={<AssignProgram />} show={showAssign} />
					<PageWrap component={<AddGroups />} show={showAddGroups} />
					<PageWrap component={<Task />} show={showTask} />
				</div>

					</div>
				</Container>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		axe_selected: state.configReducer.axe_selected,
	};
};

const actionCreators = {
	selectAxeOption,
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);
