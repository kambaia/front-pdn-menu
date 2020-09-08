import React from "react";

const PageWrap = props => {

    const {
        component,
        show
    } = props;

    return show ? component : null;
}

export default PageWrap;