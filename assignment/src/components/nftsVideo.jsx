import VideoHeaderContent from "../atoms/videoHeaderContent"
import nftsData from "../data/nfts.json"

const NFTsVideoCard = ({data}) => {
    const filteredData = nftsData.find(v=>v.title == data)
    return(
        <>
        { filteredData.type == "video" ?
        <div className=" videoCardContent_container mt-3" style={{boxShadow:"0 0 0 1px grey"}}>
            <div className="card-body mb-2 mt-0">
                <VideoHeaderContent headerData={[filteredData]}/>
            </div>
           
            <iframe className="" style={{width:"100%"}}
                src={filteredData.url}>
            </iframe>
            
        </div>
        :
        filteredData.type == "audio" ?
        <div className=" videoCardContent_container mt-3" style={{boxShadow:"0 0 0 1px grey"}}>
            <a href={filteredData.url} target="_blank" className="card-body mb-2 mt-0">
                <VideoHeaderContent headerData={[filteredData]}/>
            </a>
            
        </div>
        :
        <></>
        }
        </>
    )
}

export default NFTsVideoCard