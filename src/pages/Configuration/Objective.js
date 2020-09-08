import React, { useEffect, useState } from "react";
import DropDownList from "../../components/DropDownList";
import { Container } from "../../styles/configuration/Activity";
import { InputBox, Button } from "../../styles/configuration/Configuration";
import SubHeader from "../../components/SubHeader";

import {
  ContentDropDownList,
  WrapList,
} from "../../styles/configuration/Configuration";
import { Forms } from "../../styles/configuration/goal";
import TableComponent from "../../components/TableComponent";


let objectiveArray = [];

const Goals = props => {

  const [program, setProgram] = useState([]);
  const [showFull, setShowFull] = useState([]);
  const [programID, setProgramID] = useState([]);
  const [indicator, setIndicator] = useState([]);
  const [showTable, setShowTable] = useState("");
  const [type, setType] = useState("");
  const [valor, setValor] = useState("");

  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");

  const cells = [
    {
      cell: "Eixo",
    },
    {
      cell: "Política",
    },
  ];

  const cellLists = [
    {
      cell: "Actividade",
    },
    {
      cell: "Tipo",
    },
    {
      cell: "Valor",
    },
  ];

  const rows = [
    {
      rows: [
        { name: showFull.policy && showFull.policy.axe.description },
        { description: showFull.policy && showFull.policy.description },
      ]
    },
  ]

  async function getAllPrograms() {

  }

  getAllPrograms();

  function handleAddActivity(type, valor, description) {
    objectiveArray.push(
      {
        rows: [
          { name: description },
          { description: type },
          { font: valor },
        ]
      }
    );
   
  }
  async function handleSave(programID, objectiveArray) {
    let arrayObjectiveToSave = [];
  }
  return (
    <>
      <Container>
      
      </Container>
    </>
  );
};

export default Goals
