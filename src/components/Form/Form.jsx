import { useState } from "react";
import TotalMoney from "../TotalMoney/TotalMoney.jsx";

import "./Form.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("Selecione");

  return (
    <section className="firstColumnPage">
      <form className="recordForm">
        <div className="descriptionBox">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            id="description"
            maxLength="60"
            placeholder="Digite aqui sua descrição"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <p>Ex: Compra de sorvete no parque</p>
        </div>
        <div className="valueBox">
          <div className="valueInput">
            <label htmlFor="value">Valor</label>
            <input
              type="number"
              id="value"
              maxLength="10"
              placeholder="$"
              value={value}
              min="0"
              onKeyUp={(e) => {
                if (e.target.value <= 0) {
                  e.target.value = "";
                }
              }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
          <div className="valueSelectType">
            <label htmlFor="valueType">Tipo de valor</label>
            <select
              name=""
              id="valueType"
              value={valueType}
              onChange={(e) => {
                setValueType(e.target.value);
              }}
            >
              <option value="Selecione">-Selecione-</option>
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
        </div>
        <div className="insertButtonBox">
          <button
            className="insertRecordButton"
            onClick={(e) => {
              e.preventDefault();
              if (
                description !== "" &&
                value !== "" &&
                value > 0 &&
                valueType !== "Selecione"
              ) {
                if (valueType === "Entrada") {
                  setListTransactions([
                    {
                      description: description,
                      value: Number(value),
                      type: valueType,
                    },
                    ...listTransactions,
                  ]);
                } else {
                  setListTransactions([
                    {
                      description: description,
                      value: -Number(value),
                      type: valueType,
                    },
                    ...listTransactions,
                  ]);
                }
                setDescription("");
                setValue("");
                setValueType("Selecione");
              }
            }}
          >
            Inserir registro
          </button>
        </div>
      </form>
      {<TotalMoney listTransactions={listTransactions} />}
    </section>
  );
};

export default Form;
