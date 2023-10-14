import { Button, Card, CardBody } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CommonPage = () => {
  return (
    <div className='my-10  max-w-screen-xl mx-auto'>
     <Card className='h-96 bg-blue-200'>
        <CardBody className='flex justify-center items-center h-full'>
            <div>
            <p className='text-2xl font-bold'>Comming soon...</p>
            <Link to='/'><Button fullWidth className='mt-4'>Back to home</Button></Link>
            </div>
        </CardBody>
     </Card>
    </div>
  )
}

export default CommonPage
