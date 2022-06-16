// import { useState, useEffect, useRef } from "react";

// export const useClickOutside = () => {
//     let domNode = useRef();
//     useEffect(() => {
//         let maybeHandler = (e) => {
//             if(!domNode.current.contains(e.target)){
//                 handler();
//             }
//         }

//         document.addEventListener("mousedown", maybeHandler);

//         return () => {
//             document.removeEventListener("mouse",   maybeHandler);
//         }
//     }, [])

    
// }