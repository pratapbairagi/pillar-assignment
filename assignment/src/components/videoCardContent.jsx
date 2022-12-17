import VideoHeaderContent from "../atoms/videoHeaderContent"
import videoData from "../data/videoData.json"

const VideoCardContent = ({data}) => {
    const filteredData = videoData.find(v=>v.title==data) 
    
    return (
        <>
        { filteredData.type == "video" ?
        <div className=" videoCardContent_container mt-2" style={{boxShadow:"0 0 0 1px grey", overflow:"hidden"}}>
            <div className="card-body mb-2 mt-0">
                <VideoHeaderContent headerData={[filteredData]} />
            </div>
           
            <iframe className="iframe" style={{width:"100%", height:"100%", overflow:"hidden"}}
                src={filteredData.url}>
            </iframe>
            
        </div>
        :
        filteredData.type == "audio" ?
        <div className=" videoCardContent_container mt-2" style={{boxShadow:"0 0 0 1px grey", overflow:"hidden"}}>
            <div className="card-body mb-2 mt-0">
                <VideoHeaderContent headerData={[filteredData]} />
            </div>
           
            <iframe className="iframe" style={{width:"100%", height:"100%", overflow:"hidden"}}
                src={filteredData.url}>
            </iframe>
            
        </div> :
        <div className=" videoCardContent_container mt-2 d-flex flex-column justify-content-center" style={{boxShadow:"0 0 0 1px grey"}}>
            <a href={filteredData.url} target="_blank" className="card-body mb-2 mt-0">
                <VideoHeaderContent headerData={[filteredData]}/>
            <span className="text-center m-auto" style={{color:"whitesmoke", fontSize:"12px", width:"70%"}}>{filteredData.text}</span>
            </a>
            
        </div>
        }
        </>
    )
}

export default VideoCardContent