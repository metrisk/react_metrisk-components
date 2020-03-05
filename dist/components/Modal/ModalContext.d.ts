/// <reference types="react" />
declare const ModalContext: import("react").Context<{
    ref: any;
    open: boolean;
    setOpen: (open: boolean) => void;
}>;
export default ModalContext;
