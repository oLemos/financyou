import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

interface HeaderProps {
    handleOpenNewTransactionalModal: () => void;
}

export const Header = ({ handleOpenNewTransactionalModal }: HeaderProps) => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransactionalModal}>Nova transação</button>
            </Content>
        </Container>
    )
}
