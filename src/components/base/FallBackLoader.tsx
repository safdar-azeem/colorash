import { Box, Loader } from '@mantine/core'

const FallBackLoader = () => (
	<Box className='min-h-screen flex justify-center items-center w-screen'>
		<Loader />
	</Box>
)

export default FallBackLoader
