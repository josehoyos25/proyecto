import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, Input, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import axiosClient from '../../axios-client';
import { EditIcon } from '../icons/EditIcon';

function ActualizarUsuarios({ fetchData, usuario }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [formData, setFormData] = useState({
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        identificacion: usuario.identificacion,
        email: usuario.email,
        rol: usuario.rol,
        estado: usuario.estado,
        password: usuario.password
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
            console.log(formData);
            alert("Datos actualizados correctamente");

            await axiosClient.put(`http://localhost:3000/usuario/editar/${usuario.id_usuario}`, formData).then(() => {
                fetchData();
            });

            onOpenChange(false);
        } catch (error) {
            console.error('Error submitting data:', error);
            onOpenChange(false);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <Button color="" className='w-10 text-blue-600' onPress={onOpen}>
                <EditIcon />
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Actualizar Usuario</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    label="Nombre"
                                    placeholder="Enter nombre"
                                    variant="bordered"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                />
                                <Input
                                    autoFocus
                                    label="Apellidos"
                                    placeholder="Enter apellidos"
                                    variant="bordered"
                                    name="apellidos"
                                    value={formData.apellidos}
                                    onChange={handleChange}
                                />
                                <Input
                                    label="Identificación"
                                    placeholder="Enter identificación"
                                    variant="bordered"
                                    name="identificacion"
                                    value={formData.identificacion}
                                    onChange={handleChange}
                                />
                                <Input
                                    label="Email"
                                    placeholder="Enter email"
                                    variant="bordered"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Input
                                    label="Rol"
                                    placeholder="Enter rol"
                                    variant="bordered"
                                    name="rol"
                                    value={formData.rol}
                                    onChange={handleChange}
                                />
                                <Input
                                    label="Estado"
                                    placeholder="Enter estado"
                                    variant="bordered"
                                    name="estado"
                                    value={formData.estado}
                                    onChange={handleChange}
                                />
                                <Input
                                    label="Password"
                                    placeholder="Enter password"
                                    variant="bordered"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>Cerrar</Button>
                                <Button color="primary" onClick={handleSubmit} onPress={onClose}>Actualizar</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

export default ActualizarUsuarios;
