import { useState } from 'react'
export default function useOpen() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(prevIsOpen => !prevIsOpen)
    return { isOpen, toggle }
}