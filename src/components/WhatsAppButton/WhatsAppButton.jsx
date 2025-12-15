import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/918007208742"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
        </motion.a>
    )
}

export default WhatsAppButton
