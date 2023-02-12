import { Input, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'

const InputComponent = ({ label, value, name, type, placeholder, onChange }) => {
	return (
		<FormControl my={4}>
			<FormLabel>{label}</FormLabel>
			<Input
				value={value}
				onChange={onChange}
				type={type}
				placeholder={placeholder}
				name={name}
			/>
		</FormControl>
	)
}

export default InputComponent
