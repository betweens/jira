import React, { useState } from "react";

interface Users {
  name: string;
  age: number;
}

function useArray<T>(initValue: T[]) {
  const [ value, setValue ] = useState(initValue);
  return {
    add: (paramas: T) => {
      setValue([...value, paramas]);
    },
    clear: () => {
      setValue([]);
    },
    removeIndex: (index: number) => {
      const newValue = [...value];
      newValue.splice(index, 1);
      setValue(newValue);
    },
    value
  }
}

const TsReactTest = () => {
  const persons: Users[] = [{
    name: 'jack',
    age: 22
  }]
  const { value, clear, removeIndex, add } = useArray(persons);
  return(
    <React.Fragment>
      <button type="button" onClick={() => add({name: 'hmf', age: 27})}>add</button>
      <button type="button" onClick={() => clear()}>clear</button>
      <button type="button" onClick={() => removeIndex(0)}>remove</button>
      {
        value.map(item => <p>{item.name}--{item.age}</p>)
      }
    </React.Fragment>
  )
}

export default TsReactTest;
