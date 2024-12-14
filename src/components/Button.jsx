import clsx from "clsx"

// eslint-disable-next-line react/prop-types
const Button = ({ id, title, rightIcon,leftIcon,containerClass,titleClass}) => {
return (
    <button id={id} className={clsx('group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black', 'bg-violet-50',containerClass)}>
        {leftIcon}
        <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
            <div className={`${titleClass}`}>
                {title}
            </div>
        </span>
        {rightIcon}
    </button>
)
}

export default Button
