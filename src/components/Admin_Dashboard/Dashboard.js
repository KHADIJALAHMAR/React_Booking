import React, { useState } from "react";
import Cards from "./Cards/Cards";
import Delete from "./Crud/Delete";
import Panel from "./Panels/Panel";

function Dashboard() {
  const [visible_popup, setPopupVisibility] = useState(false);
  const [panel, setPanel] = useState("Hotels");
  const [deleteObject , setDeleteObject] = useState([]);

  const handleDeleteObject = async (type, id) => {
    await setDeleteObject([type,id])
    handlePopupVisibility()
  }

  const handlePanel = (panel) => {
    setPanel(panel);
  };

  const handlePopupVisibility = () => {
    setPopupVisibility(!visible_popup);
  };

  return (
    <div className="admin_dash">
      <button onClick={handlePopupVisibility}>{deleteObject[1]}</button>
      <Cards setPanel={handlePanel} />
      <Panel title={panel} setPopupVisibility={setPopupVisibility} handleDeleteObject={handleDeleteObject} />
      <Delete
        type={deleteObject[0]}
        id={deleteObject[1]}
        visible={visible_popup}
        handlePopupVisibility={handlePopupVisibility}
      />
    </div>
  );
}

export default Dashboard;
