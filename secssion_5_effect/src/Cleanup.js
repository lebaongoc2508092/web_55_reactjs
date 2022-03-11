import { useState, useEffect } from 'react';
import Contacts from './Contacts';
const Cleanup = () => {
    const [ visible, setVisible] = useState(true);
    const handleChangeVisible = () => {
        setVisible( !visible);
    }
    return (
        <div style={{ height: 2000 }}>
            <button onClick={handleChangeVisible}> Show / Hide</button>
            {visible ? <Contacts /> : null}
        </div>
    )
};

export default Cleanup;