import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/918007208742"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    )
}

export default WhatsAppButton
