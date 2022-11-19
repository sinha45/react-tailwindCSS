import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'awesome feature',
                'extra feature',
                'no feature',
                'nothing feature',
                'faltu feature',
                'free nio na',
                'gorib hoile ne'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Everything is Free',
                'extra feature',
                'no feature',
                'nothing feature',
                'faltu feature',
                'for middle class',
                'kaj chalno jay'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Everything is Premium',
                'extra feature',
                'no feature',
                'nothing feature',
                'faltu feature',
                'for borolox',
                'sir apnar jonno'
            ]
        }
    ]
    return (
        <div className='mt-5'>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal in the Town</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-5'>
                {pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)}
            </div>
        </div>
    );
};

export default Pricing;