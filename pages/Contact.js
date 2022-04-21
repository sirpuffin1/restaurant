import Link from "next/link";
import Image from 'next/image';
const Contact = () => {
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
            
            <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://rockandwings.rocks/wp-content/uploads/sites/9/2021/11/VideoCapture_20211127-150856.jpg" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2180 White Lane</h5>
        <ul>
        <li className="mb-3 font-normal text-gray-700 dark:text-gray-400"><a href="tel:6612825104">(661) 282-5104</a></li>
        <li className="mb-3 font-normal text-gray-700 dark:text-gray-400"><a href="mailto: rockandwings2017@yahoo.com">rockandwings2017@yahoo.com</a></li>
        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><a href="https://food.google.com/chooseprovider?restaurantId=/g/11c73dk66k&g2lbs=AGgkzMyVxSgf4z3ffcrvwzw-jdqYI50Y6rintWRhPKfaGcx_0u_hCWPiQuA1LtLGXiZ8_cGuTyxx4tIWpoFd3nY0U4h7QuUcdg%3D%3D&hl=en-US&gl=us&fo_m=MfohQo559jFvMWwP9igWZeWQMczq7voErUdXMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfaXTPp5KXh-OAE%3D&gei=iXBgYpKeNc2uytMProGlkAs&fo_s=OA,AH&sei=CQQ9SgAQJ3SFEd5YPOf_qARu&utm_campaign&utm_source=tactile" target="_blank" rel="noopener noreferrer">Order Now</a></button>
        </ul>
    </div>
</div>

<div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://rockandwings.rocks/wp-content/uploads/sites/9/2021/11/20211116_124434-scaled.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2858 Niles Street</h5>
        <ul>
        <li className="mb-3 font-normal text-gray-700 dark:text-gray-400"><a href="tel:6614327743">(661) 432-7743</a></li>
        <li className="mb-3 font-normal text-gray-700 dark:text-gray-400"><a href="mailto: rockandwings2017@yahoo.com">rockandwings2017@yahoo.com</a></li>
        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><a href="https://food.google.com/chooseprovider?restaurantId=/g/11k5gjlrjz&g2lbs=AGgkzMx1lR86iMeK7vlkFgPV0fSLtEhKgipTONrEBYEO_X-qczW78eTJKYKwuRDci4TEmnkwQa7y5ElsFK3zH1-iix-ab88Y1A%3D%3D&hl=en-US&gl=us&fo_m=MfohQo559jFvMWwP9igWZeWQMczq7voErUdXMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfaXTPp5KXh-OAE%3D&gei=iXBgYpKeNc2uytMProGlkAs&fo_s=OA,AH&sei=Ce3VnsK9mfy3EfPZCyFZStDJ&utm_campaign&utm_source=tactile" target="_blank" rel="noopener noreferrer">Order Now</a></button>
        </ul>
    </div>
</div>
        </div>
    );
}

export default Contact;