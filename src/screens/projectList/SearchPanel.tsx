import React from "react"; 

// const debounce = (func, delay) => {
//   let timer = null;
//   return function(...args) {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(function() {
//       func.app(this, args);
//     }, delay)
//   }
// }

interface UserType {
  id: number;
  name: string;
}

interface SearchPanelPropsType {
  users: UserType[];
  param: {
    personId: number;
    name: string;
  };
  setParam: (param: SearchPanelPropsType['param']) => void
}

const SearchPanel = ({ users, param, setParam }: SearchPanelPropsType ) => {
  return (
    <form>
      <input type="text" onChange={(evt) => {
        setParam({
          ...param,
          name: evt.target.value
        })
      }} />
      <select onChange={(evt) => {
        setParam({
          ...param,
          personId: +evt.target.value
        })
      }}>
        <option value="">负责人</option>
        {
          users.map(item => {
            return <option key={item.id} value={item.id}>{item.name}</option>
          })
        }
      </select>
    </form>
  )
}

export default SearchPanel;
