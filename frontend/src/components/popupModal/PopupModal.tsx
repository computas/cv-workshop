import { ReactNode, useEffect } from "react";
import styles from "./PopupModal.module.css";
import { CxIcon } from "@computas/designsystem/icon/react";

interface Props {
  open: boolean;
  title: string;
  onCloseHandler: () => void;
  children?: ReactNode;
}

export const PopupModal = ({
  open,
  title,
  onCloseHandler,
  children,
}: Props) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className={`${styles.overlay} cx-text-3`} onClick={onCloseHandler}>
      <div
        className={`${styles.modal}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.topContainer}>
          <h1 className="cx-title-4">{title}</h1>
          <button
            className="cx-btn__tertiary cx-btn__icon"
            onClick={onCloseHandler}
          >
            <CxIcon name="close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
