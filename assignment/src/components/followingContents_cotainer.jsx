import cardContent_bubscribe_data from "../data/data.json"
import ImageCardContent_subscribe from "./imageCardContent"


const FollowingContentsContainer = () => {
    return (
        <div className="container-fluid">
            <h6 className="fs-6 text-center mb-3" style={{color:"whitesmoke"}}>Get access to all the following content</h6>
            <div className="row">
                <div className="col d-flex flex-wrap justify-content-center p-0 w-100 gap-3">
                    {cardContent_bubscribe_data.length > 0 ?
                        cardContent_bubscribe_data.map((value,index)=>{
                            return <ImageCardContent_subscribe data={value} key={index} />
                        })
                         :
                        <h4>No Subsciption Card Data Found !</h4>
                    }
                </div>
            </div>
        </div>
    )
}

export default FollowingContentsContainer