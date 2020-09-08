import React, { useState, useEffect } from "react";
import SubHeader from "../../components/SubHeader";

import { toast } from 'react-toastify';

import {
    Container,
    ContentDropDownList,
    WrapList,
    BodyContent,
    CheckBox,
    InputBox,
    Button,
    ContentAxesFields,
    WrapAxesFields
} from "../../styles/configuration/Configuration";
import DropDownList from "../../components/DropDownList";




class Quinquennium extends React.PureComponent {

  
    render() {
        const { axe, showInputAxe, componentInputs, showInputsAxes, quantity } = this.state;

        return (
            <>
                <Container>
                    <SubHeader title="Registro do Eixo" />
                    <ContentDropDownList>
                        <WrapList>
                            <DropDownList
                                placeholder="Ano de início"
                                data={this.years}
                                onSelected={dataSelected => {
                                    this.setState({ dataSelected });
                                    this.axeYear = dataSelected + quantity;
                                }}
                            />
                        </WrapList>
                        <WrapList>
                            <DropDownList
                                placeholder="Ano de encerramento"
                                data={[{ option: this.axeYear }]}
                                onSelected={axeYearSelected => this.setState({ axeYearSelected })}
                            />
                        </WrapList>
                    </ContentDropDownList>
                    <BodyContent>
                        <WrapList>
                            <CheckBox onClick={() => this.selectAxe()}>
                                <label htmlFor="checkbox" className="container">Eixo
                                    <input type="checkbox" name="axe" className="checks" checked={axe} onChange={() => null} />
                                    <span className="checkmark"></span>
                                </label>
                            </CheckBox>
                        </WrapList>

                        {
                            showInputAxe ? <WrapList>
                                <input name="number_of_axes" type="number" className="input" placeholder="Digite o número de eixos" ref={this.number_of_axes} size={30} onKeyDown={() => this._addAxeFields()} />
                                <Button size={3} onClick={() => this._addAxeFields()}>Adicionar</Button>
                            </WrapList> : null
                        }
                        {
                            showInputsAxes ?
                                <ContentAxesFields>
                                    {
                                        componentInputs.map((value, index) => {
                                            return (
                                                <WrapAxesFields>
                                                    <InputBox
                                                        placeholder={`Eixo ${index + 1}`}
                                                        name={`number_of_axes_${index}`}
                                                        ref={ref => this.number_of_axes.current[index] = ref}
                                                        size={100}
                                                    />
                                                </WrapAxesFields>
                                            )
                                        })
                                    }

                                </ContentAxesFields> : null
                        }
                    </BodyContent>
                    <section className="axeButton">
                        <Button size={1} onClick={() => this.saveAxe()}>Registar</Button>
                    </section>
                </Container>
            </>
        )
    }
}

export default Quinquennium;