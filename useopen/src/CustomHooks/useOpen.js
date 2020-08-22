import { useState } from 'react'
export default function useOpen() {
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(prevIsOpen => !prevIsOpen)
    return { isOpen, toggle }
}