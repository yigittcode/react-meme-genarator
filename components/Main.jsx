import { useState } from "react"
import MemeForm from "./MemeForm"
import MemeDisplay from "./MemeDisplay"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    return (
        <main>
            <MemeForm
                meme={meme}
                onMemeUpdate={setMeme}
            />
            <MemeDisplay meme={meme} />
        </main>
    )
}