

const ImageCardContentBuy = ({ data }) => {
    return (
        <div className=" imageCardBuyContent row">
                <div className="imageCardBuyContent_imageContainer col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <img src={data.image} alt={data.title} className="imageCardBuyContent_img" />
                </div>

                <div className=" imageCardBuyContent_body col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <button className="imageCardSubscribeBtn" >
                        <span>Buy for {data.price}</span>
                    </button>
                </div>
        </div>
    )
}

export default ImageCardContentBuy