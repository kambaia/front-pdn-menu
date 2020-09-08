import React, { useState, Fragment } from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import {
	WrapSideBar,
	Content,
	SectionBar,
	MenuContainer,
	Menu,
} from "./styles";

const SideBar = (props) => {
	const { data } = props;
	const [colorMneu, setColorMenu] = useState('');
	const [status, setStatus] = useState(false);


	const [collapse, setCollapse] = useState(null);

	return (
		<WrapSideBar>
			<Content>
				{data.map((value, index) => {
					
					return (
						<Fragment >
							<SectionBar key={index}>
								{value.section}
								{collapse ? (
									<FaMinusSquare
										onClick={() => collapseMenu(0, 1, setCollapse)}
									/>
								) : (
										<FaPlusSquare
											onClick={() => collapseMenu(0, 1, setCollapse)}
										/>
									)}
							</SectionBar>
							{value.menu.map((menu, index) => {
								console.log(menu)
								return (
									<MenuContainer
										
										onClick={(e) => {
											menu.onPress();
											switch(menu.title){
												case "Actividades":
													setStatus(true);
													if(status){
														status? e.target.style.borderBottom = "1px solid #f00": e.target.style.borderBottom = "1px solid #fff"
													}else{
														
													}
													
													break;
											
												case "Atribuir Programas":
													setStatus(true);
													if(status){
														status? e.target.style.borderBottom = "1px solid #f00": e.target.style.borderBottom = "1px solid #fff"
													}else{
														setStatus(false);
													}
													
													break;
											
													status? e.target.style.borderBottom = "1px solid #f00": e.target.style.borderBottom = "1px solid #fff"
													break;
												}
												
										}}
										key={index}
									>
										<Menu className="active">{menu.title}</Menu>
									</MenuContainer>
								);
							})}
						</Fragment>
					);
				})}
			</Content>
		</WrapSideBar>
	);
};

const collapseMenu = (pos, option, setCollapse) => {
	switch (pos) {
		case 0:
			setCollapse(0);
			break;

		default:
			break;
	}
};

export default SideBar;