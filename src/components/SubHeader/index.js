import React from "react";

import SubHeaderContainer from './styles';

const SubHeader = props => {
    return (
        <>
            <SubHeaderContainer>
                <div className="subheader">{props.title}</div>
            </SubHeaderContainer>
        </>
    )
}

export default SubHeader;