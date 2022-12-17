

const ImageCardContent_subscribe = ({ data }) => {
    return (
        <div className=" imageCardContent">
            <div className="imageCardContent_imageContainer">
                <img src={data.image} alt={data.title} className="imageCardContent_img" />
            </div>

            <div className="imageCardContent_body">
                <h6 className="imageCardContent_body_title">{data.title}</h6>
                <div className="imageCardContent_body_text">{data.text}</div>

                <button className="imageCardSubscribeBtn" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                    <span>SUBSCRIBE</span>
                </button>
            </div>
        </div>
    )
}

export default ImageCardContent_subscribe