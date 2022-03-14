import React, {useState} from 'react'
import List from '../Owner_Dashboard/Panels/Hotels/List'
import Cards from './Cards/Cards';

function Dashboard() {

  const [panel, setPanel] = useState("Hotels");

  const handlePanel = (panel) => {
    setPanel(panel);
  };
  
  return (
    <div>
      <Cards setPanel={handlePanel} />
      <List/>
    </div>
  )
}

export default Dashboard
