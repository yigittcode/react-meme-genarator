import FormInput from './FormInput'
import useMemeImages from '../hooks/useMemeImages'

export default function MemeForm({ meme, onMemeUpdate }) {
    const { getRandomMemeUrl } = useMemeImages()
    
    function handleChange(event) {
        const {value, name} = event.currentTarget
        onMemeUpdate(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleNewImage() {
        const newMemeUrl = getRandomMemeUrl()
        onMemeUpdate(prev => ({
            ...prev,
            imageUrl: newMemeUrl
        }))
    }

    return (
        <div className="form">
            <FormInput 
                label="Top Text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                placeholder="One does not simply"
            />
            <FormInput 
                label="Bottom Text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                placeholder="Walk into Mordor"
            />
            <button onClick={handleNewImage}>
                Get a new meme image 🖼
            </button>
        </div>
    )
}