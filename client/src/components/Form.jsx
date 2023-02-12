import React, { useEffect } from 'react'
import {
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Box,
	Button,
	Flex
} from '@chakra-ui/react'
import { toast } from 'react-toastify'
import useForm from '../hooks/useForm'
import { createProduct, updateProduct } from '../services/products.services'
import { useNavigate } from 'react-router-dom'
import InputComponent from './InputComponent'
import TextAreaComponent from './TextAreaComponent'

let initial = {
	title: '',
	price: '',
	description: ''
}

const Form = ({ product = '' }) => {
	const { title, price, description, values, handleChange, resetForm, setValues } = useForm(initial)
	const navigate = useNavigate()
    const handleSubmit = async (e) => {
		e.preventDefault()
		let result
		if (product._id) {
			result = await updateProduct(product._id, values)
			toast.success(result)
			navigate('/')
		} else {
			result = await createProduct(values)
			toast.success(result)
		}
		resetForm()
	}

	const handleGoBack = () => {
		navigate(-1)
	}

	useEffect(() => {
		product ? setValues({
			title: product?.title || '',
			price: product?.price || '',
			description: product?.description || ''
		}) : setValues(initial)
	}, [product, setValues])

	return (
		<Box>
			<form onSubmit={handleSubmit}>
				<InputComponent
					label='Title'
					placeholder='Enter product title'
					value={title}
					type='text'
					name='title'
					onChange={handleChange}
				/>
				<InputComponent
					label='Price'
					placeholder='Enter product price'
					value={price}
					type='number'
					name='price'
					onChange={handleChange}
				/>
				<TextAreaComponent
					label='Description'
					name='description'
					value={description}
					onChange={handleChange}
					placeholder='Enter product description'
				/>
				<FormControl my={4}>
					<Flex gap={4}>
						<Button type='submit' colorScheme='teal' variant='solid'>
							{product._id ? 'Update Product' : 'Create Product'}
						</Button>
						{product._id && <Button onClick={handleGoBack} colorScheme='gray' variant='solid'>Cancel</Button>}
					</Flex>
				</FormControl>
			</form>
		</Box>
	)
}

export default Form
