import Button from './Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faFemale } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <div className="bg-main-color text-white pt-10 pb-20 relative">
            <div className="container mx-auto flex flex-col gap-8">
                <h2 className="text-3xl font-semibold">A lifetime of discounts? It's Genius.</h2>
                <p>Get rewared for your travels - unlocking instant saving of 10% or more with a free account</p>
                <div>
                    <Button label='Sign in/Register' className='bg-blue-500 text-white px-3 py-4' />
                </div>
                <Form />
            </div>
        </div>
    )
}

function Form() {
    const onSubmit = e => {
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmit} className='fixed absolute  translate-x-1/2 right-1/2 -bottom-10 bg-white text-zinc-800 rounded-lg border-4 border-yellow-600'>
            <div className="flex justify-around items-center gap-5 py-2 px-12">
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faBed} className='text-gray-400 ' />
                    <input type="text" placeholder={` Where are you going?`} />
                </div>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faCalendar} className='text-gray-400 ' />
                    <input type="text" pattern="\d{4}-\d{2}-\d{2}" placeholder='06/24/2022 to 06/24/2024' />
                </div>
                <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faFemale} className='text-gray-400 ' />
                    <input type="text" placeholder='1 adult - 0 children - 0 room' />
                </div>
                <div className='flex gap-2 items-center'>
                    <Button label='Search' className=' bg-blue-600 text-white py-3 px-3' />
                </div>
                {/* <input type="date" min='2022-06-22' max='2024-06-22' placeholder='YYYY-MM-DD' /> */}
            </div>
        </form>
    )
}

