interface CloseButtonProps {
    onClick?: () => void
}

const CloseButton: React.FC<CloseButtonProps> = (props) => (
    <button 
        className="absolute right-[0.5rem] top-[0.3rem] h-0 bg-white border-none hover:text-red-600" 
        onClick={props.onClick}>&times;
    </button>
);

export default CloseButton;