import PropTypes from 'prop-types'
import { cn } from '../../helpers'

const Button = ({
  variant = 'primary',
  size = 'medium',
  strech = false,
  leadingIcon,
  iconPosition = 'left',
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex flex-row items-center justify-center border font-medium ',
        size === 'small' && 'px-3 py-2 rounded-md gap-1.5 text-sm',
        size === 'medium' && 'px-6 py-4 rounded-lg gap-2 text-base',
        size === 'large' && 'px-8 py-6 rounded-xl gap-2.5 text-lg',
        variant === 'primary' &&
          'bg-black hover:bg-black/90 border-transparent text-white',
        variant === 'secondary' &&
          'bg-zinc-800 hover:bg-zinc-700 border-transparent text-white',
        variant === 'outline' &&
          'bg-white hover:bg-zinc-100 border-zinc-600 text-zinc-800',
        strech && 'w-full'
      )}
      {...props}
    >
      {leadingIcon === 'left' && leadingIcon}
      {children}
      {iconPosition === 'right' && leadingIcon}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  strech: PropTypes.bool,
  leadingIcon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
}

export default Button
