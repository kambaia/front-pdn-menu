import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { FiUser } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import logo from '../../assets/insignia.png'



function Index() {
    return (
        <>
            <Container>
                <div className="header">
                    <div className="menu">
                        <div className="logo"><img src={logo} alt=""/></div>
                        <div className="menu_links">
                            <Link className="menu_link" to="/home/report/activity"> Reportar Actividades</Link>
                            <Link className="menu_link" to="/home/report/generate">Gerar Relatórios</Link>
                            <Link className="menu_link" to="/home/system/manager">Gestão de sistema</Link>
                        </div>
                    </div>
                    <div className="extra_links">
                        <div className="icon"  >
                            <Link to="">
                                <FiUser size={17} color="#555" className="icon_hover" />
                            </Link>
                        </div>
                        <div className="icon">
                            <Link to="/home/system/manager/configuration">
                                <FiSettings size={17} color="#555" className="icon_hover" />
                            </Link>
                        </div>
                        <div className="icon" >
                            <Link to="">
                                <FiLogOut size={17} color="#555" className="icon_hover"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
export default Index;

