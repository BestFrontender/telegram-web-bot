import './Button.css';

const Button = ({title, variant, onClick, disable}) => {
    return (
        <button
            className={`
                btn ${variant === 'add' && 'add'
            || variant === 'remove' && 'remove'
            || variant === 'checkout' && 'checkout'} 
            
                ${disable && 'disabled'}
            `}
            onClick={onClick}
            disabled={disable}
        >
            {title}
        </button>
    );
};

export default Button;