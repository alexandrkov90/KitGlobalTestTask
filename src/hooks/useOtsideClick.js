import {useEffect} from "react";

export function useOutsideClick(ref, setState) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                ref.current &&
                !ref.current.contains(event.target) &&
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
