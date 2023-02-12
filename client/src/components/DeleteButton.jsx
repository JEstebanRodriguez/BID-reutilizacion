import { DeleteIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React from 'react'

const DeleteButton = ({ propClick }) => {
	return (
		<Button
			onClick={propClick}
			colorScheme='red'
			ml={2}
			size='sm'>
			<DeleteIcon />
		</Button>
	)
}

export default DeleteButton
