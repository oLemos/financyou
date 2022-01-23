import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root');

interface NewTransactionalModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionalModal = ({ isOpen, onRequestClose }: NewTransactionalModalProps) => {
    const [value, setValue] = useState(0);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        // Para previnir o recarregamento descenssário da página.
        event.preventDefault();

        const data = {
            value,
            title,
            category,
            type
        }

        api.post('/transactions', data)
    }

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={e => setValue(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        isActive={type === 'withdraw'}
                        onClick={() => setType('withdraw')}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}
