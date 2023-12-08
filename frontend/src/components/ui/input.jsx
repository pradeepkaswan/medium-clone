import { useState } from 'react'

const Input = ({ name, type, id, value, placeholder, icon }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div className="relative w-[100%] mb-4">
        <input
          name={name}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          placeholder={placeholder}
          defaultValue={value}
          id={id}
          className="w-full bg-grey p-4 pl-20 pr-[12%] rounded-full placeholder:text-dark-grey"
        />
        <i
          className={
            'fi ' +
            icon +
            ' absolute left-[8%] top-1/2 -translate-y-1/2 text-xl text-dark-grey'
          }
        ></i>
        {type === 'password' ? (
          <i
            className={
              'fi fi-rr-eye' +
              (showPassword ? '' : '-crossed') +
              ' absolute right-[8%] top-1/2 -translate-y-1/2 text-xl text-dark-grey cursor-pointer'
            }
            onClick={() => setShowPassword((currentValue) => !currentValue)}
          ></i>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default Input
