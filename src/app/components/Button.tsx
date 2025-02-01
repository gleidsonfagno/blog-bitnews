import { NavBarProps } from "../types/api";

export default function Button({ title }: NavBarProps) {
    return (
        <button className="py-1 px-4 bg-yellow-500 rounded-md  text-white text-xs">
            {title}
        </button>
    );
}
