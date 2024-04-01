import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, Input, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import axiosClient from '../../axios-client';
import { DeleteIcon } from '../icons/DeleteIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

function ModalLogout() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();



    const handleSubmit = async () => {
    
    };

    return (
        <div className="flex flex-col gap-2">
            <Button color="" className='flex justify-start pl-1.5 items-center gap-x-4 text-white text-opacity-80 2xl:text-lg' onPress={onOpen}>
            <FontAwesomeIcon icon={faPowerOff} />Logout 
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Cerrar Session</ModalHeader>
                            <ModalBody>
                               <h2>Estas Seguro  de Cerrar Session</h2>
                             
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>Atras</Button>
                                <Button color="primary" onClick={handleSubmit} onPress={onClose}>Cerrar</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}




export default ModalLogout