import PrimaryMenu from './primary-menu';
import styles from '../../../styles/global/header/header.module.css';

const Header = () => {
    return(
        <div className = {styles.container}>
            <PrimaryMenu/>
        </div>
    )
}

export default Header;