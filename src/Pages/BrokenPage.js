import React from 'react'

function BrokenPage() {
    return (
        <>
        <div className='h-1/2 w-screen flex my-10 justify-center items-center'>

            <div className='flex flex-col items-center gap-y-2 py-10' >
                {/* <Icon /> */}
                <img className='my-10' src="assets/svg/broken.svg" alt="" />
                <p className='text-lg font-bold '>Oops! Something is broken.</p>
                <p className='text-sm text-brnd-dark-blue font-light text-center'>Please come back again in sometime or try refreshing.</p>
            </div>
            
        </div>
        </>
    )
}

export default BrokenPage


const Icon = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="152" height="161" viewBox="0 0 152 161" fill="none">
                <g clip-path="url(#clip0_591_644)">
                    <path d="M56 132.77L55.69 132.42L37.72 127.64L37.41 127.67C27.84 134.73 14.96 141.13 0.54 147.22L0.35 147.73L0 148.69L0.83 149.8C15.93 152.07 29.78 155.33 41.17 160.51L41.5 160.46L57.77 150.38L57.97 149.97L56 132.77ZM34.9 149.46C32.53 149.74 30.37 148.24 29.72 146.03C29.72 146.03 29.72 146.02 29.72 146.01C29.68 145.9 29.48 145.36 29.54 144.37C29.68 142.06 31.43 140.12 33.8 139.85C36.46 139.55 38.85 141.45 39.16 144.11C39.46 146.76 37.56 149.15 34.91 149.46H34.9Z" fill="#EF2E33" />
                    <path d="M0.540078 147.22L0.350078 147.73L0.330078 147.72L0.540078 147.22Z" fill="#EF2E33" />
                    <path d="M79.9702 83.4603L112.05 101.98C134.35 61.9603 157.83 5.24034 149.34 0.340342C140.85 -4.55966 103.47 44.1303 79.9702 83.4603Z" fill="#EF2E33" />
                    <path d="M71.28 135.54C78.61 139.78 83.75 145.17 98.34 124.36L67.44 106.52C56.72 129.56 63.95 131.31 71.29 135.55L71.28 135.54Z" fill="#EF2E33" />
                    <path d="M98.3502 124.36C99.9902 122.02 101.76 119.34 103.66 116.29L71.7802 97.8799C70.0902 101.05 68.6502 103.92 67.4502 106.51L98.3502 124.35V124.36Z" fill="#EF2E33" />
                    <path d="M71.7698 97.88L103.65 116.29C105.31 113.62 107.07 110.7 108.95 107.44C109.98 105.67 111 103.84 112.04 101.98L79.9598 83.46C78.8698 85.28 77.7998 87.09 76.7698 88.87C74.8898 92.13 73.2398 95.12 71.7598 97.88H71.7698Z" fill="#EF2E33" />
                    <rect x="53.7505" y="135.368" width="5" height="12.8927" transform="rotate(-5.16598 53.7505 135.368)" fill="#EF2E33" />
                </g>
                <defs>
                    <clipPath id="clip0_591_644">
                        <rect width="151.12" height="160.51" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </>
    )
}