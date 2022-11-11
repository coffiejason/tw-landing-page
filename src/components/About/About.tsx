import React from 'react'
import { Card } from '../../units'

const features = [
    {
        id: 1,
        title: '100%',
        subtitle: 'Completion'
    },
    {
        id: 2,
        title: '24/7',
        subtitle: 'Delivery'
    },
    {
        id: 3,
        title: '100k',
        subtitle: 'Transactions'
    }
]

const About = () => (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus saepe mollitia dignissimos nisi officiis labore similique illum odio quaerat.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                {
                    features.map((item)=>(
                        <Card key={item.id} title={item.title} subtitle={item.subtitle}/>
                    ))
                }

            </div>
        </div>
    </div>
  )

export default About