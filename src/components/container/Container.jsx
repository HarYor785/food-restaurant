import { motion } from 'framer-motion';
import React from 'react'

const Container = ({children, className}) => {
    return (
        <div className={`w-full container min-h-[80vh] flex items-center justify-center`}>
            <motion.div
            className={`w-full ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default Container