import React, {useEffect} from "react";

export default function useOutsideClick(ref: React.MutableRefObject<HTMLDivElement | null>, setState: (value: boolean) => void) {
    useEffect(() => {
        function handleClickOutside(event:MouseEvent):void {

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
