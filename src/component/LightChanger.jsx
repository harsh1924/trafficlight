export const LightChanger = ({ color }) => {

    return (
        <div className='flex flex-col gap-5 justify-center items-center'>
            {color == 'red' ? (
                <>
                    <p className='w-15 h-15 border border-gray-400 rounded-full bg-red-500 shadow-lg shadow-red-500/50' />
                    <p className="w-15 h-15 border border-gray-400 rounded-full bg-yellow-200" />
                    <p className="w-15 h-15 border border-gray-400 rounded-full bg-green-200" />
                </>
            ) : (
                color === 'yellow' ? (
                    <>
                        <p className="w-15 h-15 border border-gray-400 rounded-full bg-red-200" />
                        <p className="w-15 h-15 border border-gray-400 rounded-full bg-[#FFFF00] shadow-lg shadow-[#FFFF00]/50" />
                        <p className="w-15 h-15 border border-gray-400 rounded-full bg-green-200" />
                    </>
                ) : (
                    <>
                        <p className="w-15 h-15 border border-gray-400 rounded-full bg-red-200" />
                        <p className="w-15 h-15 border border-gray-400 rounded-full bg-yellow-200" />
                        <p className="w-15 h-15 border border-gray-400 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                    </>
                )
            )}
        </div>
    )
}
