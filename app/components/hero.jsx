export default function Hero({ src }) {
    return (
        <header className='col-span-12 w-screen h-screen fixed z-0'>
            <video autoPlay loop muted className='w-full h-full object-cover'>
                <source src={src} type="video/mp4"/>
            </video>
        </header>
    )
}