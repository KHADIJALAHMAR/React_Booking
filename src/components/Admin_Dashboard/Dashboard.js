import React, {useState} from 'react'
import Cards from './Cards/Cards'
import Delete from './Crud/Delete'
import Panel from './Panels/Panel';

function Dashboard() {

  const [visible_popup, setPopupVisibility] = useState(false);
  const [panel, setPanel] = useState('Hotels');

  const handlePanel = (panel) => {
    setPanel(panel);
  }

  const handlePopupVisibility = () => {
    setPopupVisibility(!visible_popup);
  }

  return (
    <div className='admin_dash'>
        <button onClick={handlePopupVisibility} >{panel}</button>
        <Cards setPanel={handlePanel} />
        <Panel title={panel}/>
        <Delete type="hotel" visible={visible_popup} handlePopupVisibility={handlePopupVisibility} />
    </div>
  )
}

export default Dashboard