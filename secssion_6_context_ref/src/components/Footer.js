import { useContext } from 'react';
import LangCtx from '../langContext';
const Footer = () => {
    const langCtx = useContext(LangCtx);
    return (
        <div className='border center column'>
            <p> Made by Web 55</p>
            <select 
            value={langCtx.lang} 
            onChange={(event) => {
                langCtx.setLang(event.target.value);
            }}>
                <option value='en'>English</option>
                <option value='vi'>Vietnamese</option>
            </select>
        </div>
    );
};

export default Footer;