import { useToast, useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react";
import { useState } from "react";

function BookingModal({ movie }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [det, setDet] = useState({
        fullname: "", tickets: 0
    });
    const toast = useToast()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDet({ ...det, [name]: value });
    }

    const handleBook = () => {
        toast({
            title: 'Booking Completed.',
            description: "Hope you enjoy our show.",
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
        onClose();
        setDet({
            fullname: "", tickets: 0
        })
    }


    return (
        <>
            <Button onClick={onOpen} colorScheme="blue" style={{ width: "20%" }}>Book Now</Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Movie name</FormLabel>
                            <Input placeholder='Movie name' value={movie} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Name</FormLabel>
                            <Input name="fullname" placeholder='Full Name' value={det.fullname} onChange={(e) => handleChange(e)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>No. of Tickets</FormLabel>
                            <Input name="tickets" placeholder='Total Tickets' value={det.tickets} onChange={(e) => handleChange(e)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleBook}>
                            Confirm Booking
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BookingModal;