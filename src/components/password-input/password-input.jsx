import React from "react";
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function Password () {
    const [value, setValue] = React.useState('password')
    const onChange = e => {
      setValue(e.target.value)
    }
    return <PasswordInput onChange={onChange} value={value} name={'password'} />
}

export default Password;