import { useState, useEffect } from 'react'

export default function useMemeImages() {
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getRandomMemeUrl() {
        if (allMemes.length === 0) return null
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        return allMemes[randomNumber].url
    }
    
    return { getRandomMemeUrl }
} 