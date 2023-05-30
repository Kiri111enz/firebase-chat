import { PropsWithChildren } from 'react';
import CloseButton from './CloseButton';

interface PopupProps {
    showCloseButton?: boolean,
    onClose?: () => void
}

const Popup: React.FC<PropsWithChildren<PopupProps>> = (props) => (
    <div className="z-10 h-screen bg-black/60">
        <div className="z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 rounded-2xl">
            {props.showCloseButton !== false && <CloseButton onClick={props.onClose} />}
            {props.children}
        </div>
    </div>
);

export default Popup;