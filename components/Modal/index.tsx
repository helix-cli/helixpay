import styles from "./modal.module.css";
import cn from "classnames";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
};

const Modal = ({ children, open, handleClose }: ModalProps) => {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      handleClose();
    }
  };

  return (
    <div className={cn(styles.modal, { [styles.open]: open })}>
      <div className={styles.overlay} onClick={handleClickOutside} />

      {children}
    </div>
  );
};

export default Modal;
