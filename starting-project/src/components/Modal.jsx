import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

export function Modal({ children, onClose }) {
    const navigate = useNavigate();

    const closeHandler = () => {
        navigate("/");
    }
    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler}>
                <dialog open className={classes.modal} onClick={(e) => e.stopPropagation()}>
                    {children}
                </dialog>
            </div>
        </>

    )
}