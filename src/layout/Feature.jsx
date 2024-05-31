import React from "react";
import { ButtonDelete, ButtonEdit } from "../components/button/Button";
import "./Feature.css";

const Delete = () => {
    return(
        <ButtonDelete/>
    );
}

const Edit = () => {
    return(
        <ButtonEdit/>
    );
}

export {Delete, Edit};