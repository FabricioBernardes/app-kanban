import Card from "../../../interfaces/Card"
import "./CardModal.scss"

const CardModal = ({ card, closeCard }: { card: Card, closeCard: React.Dispatch<React.SetStateAction<boolean>> }) => {

    return (
        <div className="card-modal">
                <div className="modal">
                    <div className="modal-header">
                        <div className="modal-title">{card.title}</div>
                        <div className="modal-close" onClick={() => closeCard(false)}>X</div>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label className="form-label">Descrição:</label>
                            <textarea
                                rows={10}
                                className="form-textarea"
                                value={card.description}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CardModal