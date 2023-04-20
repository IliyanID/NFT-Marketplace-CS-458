import { Modal, ModalHeader } from "reactstrap";
import { CommonModalProps } from "./CommonModalProps";

export const ManageWalletModal = (props:CommonModalProps) => {
    return (
        <Modal {...props}>
            <ModalHeader>
                Manage Wallet
            </ModalHeader>
        </Modal>
    )
}
