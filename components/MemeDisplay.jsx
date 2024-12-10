export default function MemeDisplay({ meme }) {
    return (
        <div className="meme">
            <img src={meme.imageUrl} alt="meme" />
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
        </div>
    )
} 