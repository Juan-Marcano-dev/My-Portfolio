import "./styles/modalMessage.scss";

const ModalMessage = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Si puedes imaginarlo, puedes programarlo</h2>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalMessage;
