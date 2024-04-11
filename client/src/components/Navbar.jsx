import './Navbar.css'
import { useState } from 'react';
// import BurgerMenu from './components/BurgerMenu'

function Navbar() {
    const [visible, setVisible] = useState(false);
    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <nav>
            <button type="button" label onClick={handleToggle}><img src="/assets/images/icons/burger-menu.svg" alt="" /></button>
            {/* {visible && <BurgerMenu handleToggle={handleToggle} visible={visible} />} */}
            <h1 className="h1FeetAndFun">Feet <span className='and'>&</span> fun</h1>
            <img src="/assets/images/logo.svg" className="image_logo" alt="bla" />
        </nav>

    )
}
export default Navbar;