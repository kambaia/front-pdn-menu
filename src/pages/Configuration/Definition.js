import React, { useState, useEffect } from 'react'
import SubHeader from '../../components/SubHeader'
import { Texto } from "../../styles/configuration/Definition";
import { Container, InputBox, Button } from "../../styles/configuration/Configuration";
import { toast } from "react-toastify";


async function checkEnd() {

}

async function saveDuration(qtd, setQtd) {

   
}

function Definition() {

    checkEnd();
    const [qtd, setQtd] = useState('');
    return (
        <>
            <Container>
                <SubHeader title="Definição" />

                <section className="items">
                    <Texto>
                        Bem-Vindo a painel de definição do tempo de duração do PDN.
                        Exemplo: 3 anos equivalente ao triênio, 5 anos equivalente ao quinquênio.
                    </Texto>
                    <InputBox
                        id="duration"
                        type="number"
                        size={30}
                        placeholder="Insira a duração"
                        onChange={(e) => setQtd(e.target.value)}
                        value={qtd}
                    />
                    <Button type="button" onClick={() => saveDuration(qtd, setQtd)}> Registrar </Button>
                </section>

            </Container>
        </>
    )
}




export default Definition