import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../../fBase';
import styles from './NavBar_NavModal.module.css'

export default function NavModal({ setNavModal }) {
    function hideModal() {
        setNavModal(false)
        document.body.style.overflow = 'auto'
    }

    // LogOut
    const navigate = useNavigate();
    const onLogOutClick = () => {
        authService.signOut();
        navigate("/");
    }

    return (
        <div className={styles.modal}>
            {/* Close button */}
            <span onClick={hideModal} id={styles.close} className="material-icons-outlined">
                close
            </span>
            {/* Menus */}
            <div className={styles.modalMenus} >
                <hr />
                <Link to='/memorize' className='flex flex-row' id={styles.modalMenu} onClick={hideModal}>
                    <span className="material-icons-outlined">
                        psychology
                    </span>
                    <span className={styles.modalMenuText} >Memorize</span>
                </Link>
                <hr />
                <Link to='/dictionary' className='flex flex-row' id={styles.modalMenu} onClick={hideModal}>
                    <span className="material-icons-outlined">
                        menu_book
                    </span>
                    <span className={styles.modalMenuText} >Dictionary</span >
                </Link>
                <hr />
                <Link to='/video' className='flex flex-row' id={styles.modalMenu} onClick={hideModal}>
                    <span className="material-icons-outlined">
                        ondemand_video
                    </span>
                    <span className={styles.modalMenuText} >Video</span>
                </Link>
                <hr />
                <Link to='/grammarlyapp' className='flex flex-row' id={styles.modalMenu} onClick={hideModal}>
                    <span className="material-icons-outlined">
                        sticky_note_2
                    </span>
                    <span className={styles.modalMenuText}  >Grammarly</span>
                </Link>
                <hr />
                {/* Logout button */}
                <button id={styles.modalMenu} onClick={hideModal}>
                    <div id={styles.modalLogout} onClick={onLogOutClick} className='rounded-lg transition shadow-gray-500/50 shadow-md ease-in-out delay-50 bg-gray-400 hover:-translate-y-1 hover:bg-gray-300 duration-300'>
                        Log Out
                    </div>
                </button>
            </div>
        </div>
    )
}