import React, { useEffect, useState } from 'react'
import { LightChanger } from '../component/LightChanger';
import Car from '../component/Car';

const TrafficLight = ({ config }) => {
    const [currentColor, setCurrentColor] = useState('red');
    const [start, setStart] = useState(false);

    useEffect(() => {
        const { duration, next } = config[currentColor];
        const timer = setTimeout(() => {
            setCurrentColor(next);
        }, duration);
        return () => {
            clearTimeout(timer);
        }
    }, [currentColor]);

    return (
        <>
            {!start ? (
                <div className='h-screen w-screen flex items-center justify-center'>
                    <button
                        onClick={() => setStart(true)}
                        className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md transition cursor-pointer">
                        Start
                    </button>
                </div>
            ) : (
                <div className='flex h-screen w-screen flex-col py-10'>
                    <div className='flex items-center w-full justify-center flex-col'>
                        <div className="border w-32 h-70 flex justify-center items-center bg-gray-200">
                            <LightChanger color={currentColor} />
                        </div >
                        <div className="h-80 border w-10 border-t-0 bg-gray-300"></div>
                    </div >
                    <Car currentColor={currentColor} />
                    <div className="mt-15 flex justify-center items-center" >
                        <button
                            onClick={() => setStart(false)}
                            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition cursor-pointer">
                            Stop
                        </button>
                    </div>
                </div >
            )}
        </>
    )
}

export default TrafficLight