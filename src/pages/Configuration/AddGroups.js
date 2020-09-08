import React from "react";

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
import SubHeader from "./../../components/SubHeader";
import TableComponent from "./../../components/TableComponent"; 

class AddGroups extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Container>
                <SubHeader title="Definição de Grupos de Implementadores" />
                <ContentDropDownList>
                    <WrapList>
                        <DropDownList
                            placeholder="Programas"
                            data={this.years}
                            onSelected={dataSelected => {
                            }}
                        />
                    </WrapList>
                </ContentDropDownList>
                <BodyContent>
                    <ContentAxesFields>
                        <WrapAxesFields>
                            <InputBox
                                placeholder="Introduza o nome do grupo"
                                ref={ref => this.group = ref}
                                size={100}
                            />
                        </WrapAxesFields>
                    </ContentAxesFields>
                    <TableComponent
                        dataRows = {[]} // Array de objectos
                        dataCells = {[]} // Arrays multidimensional
                        onEdit = {() => null}
                        onDelete = {() => null}
                        showControls = { false} // Default true
                    />
                </BodyContent>
            </Container>
        )
    }
}

export default AddGroups;