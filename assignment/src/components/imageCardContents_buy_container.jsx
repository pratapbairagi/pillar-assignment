import buyCardData  from "../data/buyCardData.json"
import ImageCardContentBuy from "./imageCardContent_buy";

const ImageCardContentsBuyContainer = () =>{
    return(
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col d-flex flex-wrap justify-content-center p-0 w-100 gap-3">
                    {buyCardData.length > 0 ?
                        buyCardData.map((value,index)=>{
                            return <ImageCardContentBuy data={value} key={index}/>
                        })
                         :
                        <h4>No Subsciption Card Data Found !</h4>
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageCardContentsBuyContainer