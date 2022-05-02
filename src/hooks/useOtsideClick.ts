import React, {useEffect} from "react";

const useOutsideClick = (ref: React.MutableRefObject<HTMLDivElement | null>, setState: (value: boolean) => void) => {
    useEffect(() => {
        const handleClickOutside = (event:MouseEvent) => {

            if (
                ref.current &&
                !ref.current.contains(event.target as Node) &&
                typeof setState === "function"
            ) {
                setState(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default useOutsideClick