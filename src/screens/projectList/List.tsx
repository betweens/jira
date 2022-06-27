import React from "react";

interface ProjectsType {
  id: number;
  name: string;
  organization: string;
}

interface ListParameter {
  lists: ProjectsType[]
}

const List = ({ lists }: ListParameter) => {
 
  return (
    <table>
      <thead><tr><th>名称</th><th>部门</th></tr></thead>
      <tbody>
        {
          lists.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.organization}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default List;
