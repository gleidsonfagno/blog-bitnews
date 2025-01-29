interface NavBarProps {
    title?: string;
}


export default function Button( {title}: NavBarProps ) {
    return(
        <button className="py-1 px-4 bg-yellow-500 rounded-md font-bold text-white text-xs">
            {title}
        </button>
    )
}