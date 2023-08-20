import React from 'react'
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect} from 'react';
export default function Reveal2({ children, width = "fit-content" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once : true});
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");

        }
    }, [isInView, mainControls]);
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }} ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                }}

                initial="hidden"
                animate={mainControls}
                transition={{ duraton: 1, delay: 0.5}}

            >{children}</motion.div>
        </div>
    )
}
