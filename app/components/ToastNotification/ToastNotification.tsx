import * as Toast from "@radix-ui/react-toast";
import {
  FC,
  PropsWithChildren,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import "./toastNotification.css";

interface ToastProps {
  title: string;
  description?: string;
  actionText?: string;
  actionAltText?: string;
  onAction?: () => void;
  duration?: number;
  onOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const ToastComponent = ({
  title,
  description,
  actionText,
  actionAltText,
  onAction,
  onOpen,
  open,
  duration,
}: ToastProps) => {
  return (
    <Toast.Root
      className="toast-root"
      open={open}
      onOpenChange={onOpen}
      duration={duration}
    >
      <div className="toast-content">
        <Toast.Title className="toast-title">{title}</Toast.Title>
        {description && (
          <Toast.Description className="toast-description" asChild>
            {description}
          </Toast.Description>
        )}
      </div>
      {onAction && actionAltText && (
        <Toast.Action className="toast-action" asChild altText={actionAltText}>
          <button className="toast-button" onClick={onAction}>
            {actionText}
          </button>
        </Toast.Action>
      )}
    </Toast.Root>
  );
};

const ToastProvider: FC<PropsWithChildren> = ({ children }) => (
  <Toast.Provider swipeDirection="right">
    {children}
    <Toast.Viewport className="toast-viewport" />
  </Toast.Provider>
);

const ToastTrigger: FC<{ onClick: () => void; children: ReactNode }> = ({
  onClick,
  children,
}) => (
  <button className="toast-trigger" onClick={onClick}>
    {children}
  </button>
);

export { ToastComponent, ToastProvider, ToastTrigger };
