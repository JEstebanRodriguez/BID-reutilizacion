import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import React from 'react'

const TextAreaComponent = ({ label, placeholder, name, value, onChange }) => {
	return (
		<FormControl my={4}>
			<FormLabel>{label}</FormLabel>
			<Textarea
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</FormControl>
	)
}

export default TextAreaComponent
