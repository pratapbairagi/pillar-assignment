import SubscribeBtn from "../atoms/subscribeBtn"


const CardContent = ({data}) =>{
    return(
        <div className="card cardContent p-2">
            <div className="row">
            <img src={data.image} alt={data.title} className="contentCard-img col col-6 col-md-6 col-lg-12 col-xl-12  " />
            <div className="card-body col col-6 col-md-6 col-lg-12 col-xl-12">
                <span className="fs-6 fs-sm-6 fs-md-6 fs-lg-4 fs-xl-4 fw-bold fw-sm-bold fw-md-bold fw-lg-bolder" style={{whiteSpace:"nowrap"}}>{data.title}</span>
                <span className="card-text text-sm-start text-md-start text-lg-center text-xl-center" style={{fontSize:"80%"}}>{data.text}</span>
                <div className="card-link">
                <SubscribeBtn/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CardContent