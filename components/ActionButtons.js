//react
import { useContext } from "react";

//styles
import styles from "styles/Buttons.module.css";

//context
import { UserContext } from "context/UserContext";

//hooks
import useModal from "hooks/useModal.js";

//components
import ModalPortal from "./Modal.js";
import Auth from "./Auth.js";

//hooks
import useUpdateList from "hooks/useUpdateList";

export default function ActionButtons({ id }) {
  const { modal, openModal, closeModal } = useModal();
  const { user } = useContext(UserContext);
  const { addMovie } = useUpdateList();

  const handleClick = (event) => {
    if (!user) return openModal();

    const feeling1 = event.target.name;

    return addMovie(id, feeling1);
  };

  return (
    <section className={styles.actionButtons}>
      <button name={"like"} onClick={handleClick}>
        Like ❤️
      </button>
      <button name={"desire"} onClick={handleClick}>
        Desire 🍿
      </button>
      <button name={"dislike"} onClick={handleClick}>
        Dislike ❌
      </button>
      {modal && (
        <ModalPortal onClose={closeModal}>
          <Auth onLogin={closeModal} />
        </ModalPortal>
      )}
    </section>
  );
}
