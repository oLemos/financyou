import Modal from 'react-modal';

import { Container } from './styles';

import closeImg from '../../assets/close.svg';

Modal.setAppElement('#root');

interface NewTransactionalModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionalModal = ({ isOpen, onRequestClose }: NewTransactionalModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}
