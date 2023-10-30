import React, { useState } from "react";
import Select from "react-select";
// import { ActionMeta, InputActionMeta, SingleValue } from 'react-select';
// import Select from 'react-select/dist/declarations/src/Select';

const DropDownMS = () => {
  var Countryname = [
    {
      value: 1,
      label: "Pakistan ",
    },
    {
      value: 2,
      label: "United States ",
    },
    {
      value: 3,
      label: "United Kingdom ",
    },
  ];

  var [displayValue, setDisplayValue] = useState();
  // var Handle = (e) => {
  //   setDisplayValue(Array.isArray(e)?e.map(x=>x.label):[]);
  // }

  return (
    <div>
      <Select className="" isMulti options={Countryname}></Select>
      <h1>{displayValue}</h1>
      {/* <Select isMulti options={Countryname} onChange={Handle}></Select> */}
      {/* <Select options={Countryname} inputValue={''} onChange={function (newValue: SingleValue<{ value: number; label: string; }>, actionMeta: ActionMeta<{ value: number; label: string; }>): void {
        throw new Error('Function not implemented.');
      } } onInputChange={function (newValue: string, actionMeta: InputActionMeta): void {
        throw new Error('Function not implemented.');
      } } onMenuOpen={function (): void {
        throw new Error('Function not implemented.');
      } } onMenuClose={function (): void {
        throw new Error('Function not implemented.');
      } } value={null}></Select> */}
    </div>
  );
};

export default DropDownMS;
