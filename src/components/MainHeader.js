import { Header } from "semantic-ui-react";
import React from "react";

function MainHeader({ title, type = 'h1' }) {
    return (
        <Header as={type}>{title}</Header>
    );
}
export default MainHeader;