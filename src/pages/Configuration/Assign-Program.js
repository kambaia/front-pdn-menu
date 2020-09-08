import React from "react";
import { Container } from "../../styles/configuration/Assign";
import SubHeader from "../../components/SubHeader";

import { FaArrowDown, FaCheck } from 'react-icons/fa';

function Objective() {
	return (
		<Container>
			<main className="main_container">
				<SubHeader title="Atribuir Programas" />

				<div className="main_content">
					<aside className="aside_left">
						<div className="program_content">
							<span>Programa 1</span>
						</div>

						<div className="program_content">
							<span>Programa 2</span>
						</div>

						<div className="program_content">
							<span>Programa 3</span>
						</div>

						<div className="program_content">
							<span>Programa 4</span>
						</div>
					</aside>

					<div className="group_container">
						<div className="list_groups">

							<div className="list_checked">
								<div className="cards">
									<div className="card_header">
										Grupo 1
                    <div className="btn_container">
											<FaArrowDown color="#555" size={13} className="icon" />

											<FaCheck color="#555" size={14} className="icon" />
										</div>
									</div>

								</div>
							</div>

							<div className="list_notChecked">
								<div className="noCheked">
									<span>Grupo 2</span>
								</div>

								<div className="noCheked">
									<span>Grupo 3</span>
								</div>

								<div className="noCheked">
									<span>Grupo 4</span>
								</div>
							</div>

						</div>

					</div>

				</div>
			</main>

		</Container>
	);
}

export default Objective;
