import { useEffect, useState } from 'react'

const Car = ({ currentColor }) => {
    const [dX, setDX] = useState(0);
    const x = 50;
    let interval = 200;
    if (currentColor == 'green')
        interval = 100;

    useEffect(() => {
        if (currentColor != 'red') {
            const moveTimer = setInterval(() => {
                setDX(prev => prev + x);
            }, interval);

            return () => {
                clearInterval(moveTimer);
            }
        }
    }, [currentColor]);

    useEffect(() => {
        if (currentColor == 'red')
            setDX(0);
    }, [currentColor])

    return (
        <div style={{ transform: `translateX(${dX}px)` }} >
            <div className="relative w-40 h-20 bg-blue-500 rounded-lg shadow-lg">
                {/* Car Body */}
                <div className="absolute top-0 left-4 w-32 h-10 bg-blue-400 rounded-t-lg"></div>

                {/* Front Window */}
                <div className="absolute top-1 left-6 w-10 h-8 bg-white rounded-md"></div>

                {/* Back Window */}
                <div className="absolute top-1 right-6 w-10 h-8 bg-white rounded-md"></div>

                {/* Wheels */}
                <div className="absolute bottom-[-10px] left-4 w-8 h-8 bg-black rounded-full"></div>
                <div className="absolute bottom-[-10px] right-4 w-8 h-8 bg-black rounded-full"></div>
            </div>
        </div>
    )
}

export default Car