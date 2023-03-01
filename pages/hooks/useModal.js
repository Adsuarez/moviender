import { useState } from "react";

export default function useModal() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    document.body.classList.add("modal");
    return modal;
  };

  const closeModal = () => {
    setModal(false);
    document.body.classList.remove("modal");
    return modal;
  };

  return {
    modal,
    openModal,
    closeModal,
  };
}
