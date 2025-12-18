import { useEffect } from 'react';
import '../Modal.css';

function Modal({ data, onClose }) {

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!data) return null; // Si no hay datos, no renderiza nada

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <h2>{data.title}</h2>
                {/* Mostramos la descripción corta destacada */}
                <p style={{ fontWeight: 'bold', color: '#555' }}>{data.description}</p>
                <hr />
                {/* Mostramos el texto largo que NO sale en la tarjeta */}
                <p className="modal-text-full">{data.details}</p>

            </div>
        </div>
    );
}
export default Modal;
