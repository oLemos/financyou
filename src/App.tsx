import { useState } from "react";

import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionalModal } from "./components/NewTransactionalModal";


export function App() {
    const [isNewTransactionalModalOpen, setIsNewTransactionalModalOpen] = useState(false);

    function handleOpenNewTransactionalModal() {
        setIsNewTransactionalModalOpen(true);
    }

    function handleCloseNewTransactionalModal() {
        setIsNewTransactionalModalOpen(false);
    }

    return (
        <>
            <GlobalStyle />

            <Header handleOpenNewTransactionalModal={handleOpenNewTransactionalModal} />
            <Dashboard />

            <NewTransactionalModal
                isOpen={isNewTransactionalModalOpen}
                onRequestClose={handleCloseNewTransactionalModal}
            />
        </>
    );
}
