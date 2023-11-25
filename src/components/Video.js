function Video({link, title}) {
    return (
    <div className="iframe">
        <iframe
            width="919"
            height="525"
            src={link}
            frameBorder="0"
            allowFullScreen
            title={title}
        />
        <h2>{title}</h2>
    </div>
    )
    
}

export default Video