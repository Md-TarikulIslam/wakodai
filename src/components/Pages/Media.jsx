import { Button, Card, CardBody } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Media = () => {
  return (
    <div className='my-10  max-w-screen-xl mx-auto'>
     <Card className=' '>
        <CardBody className='flex justify-center items-center h-full'>
            <div className='flex justify-between'>
           <img className='w-1/5' src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" alt="" />
           <img className='w-1/5' src="https://img.freepik.com/premium-vector/round-twitter-logo-isolated-white-background_469489-899.jpg" alt="" />
           <img className='w-1/5' src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="" />
            </div>
        </CardBody>
     </Card>
    </div>
  )
}

export default Media
