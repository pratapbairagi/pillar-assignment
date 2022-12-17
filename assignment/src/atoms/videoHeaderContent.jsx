import {Spotify, MusicNoteBeamed, Youtube, ChevronDown} from "react-bootstrap-icons";
import videoDatas from "../data/videoData.json";

const VideoHeaderContent = ({headerData}) =>{
const filteredData = videoDatas.filter(v=>v.title == headerData[0].title)

    const togglerHandler = async (e)=>{
        if(e.target.parentElement.parentElement.parentElement.parentElement.lastChild.tagName == "IFRAME"){
      e.target.parentElement.parentElement.parentElement.parentElement.lastChild.style.display == "" ?
      e.target.parentElement.parentElement.parentElement.parentElement.lastChild.style.display = "flex" :
      e.target.parentElement.parentElement.parentElement.parentElement.lastChild.style.display = "";

      e.target.style.transform == "" ?
      e.target.style.transform = "rotateZ(190deg)" :
      e.target.style.transform = ""
        }
    }

    return(
        <h6 onClick={(e)=> togglerHandler(e)} className={`card-title w-100 p-0 row videoCardHeaderContent_container` } id={`id${headerData}`} style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>
        <span className="col-1 " style={{transition:"2s"}}>
           {
                filteredData.length > 0 ?
          
                filteredData[0].icons.left == "Spotify" ? <Spotify size={20} color="whitesmoke"/> :
                filteredData[0].icons.left == "MusicNoteBeamed" ? <MusicNoteBeamed size={20} color="whitesmoke"/> :
                filteredData[0].icons.left == "Youtube" ? <Youtube size={20} color="whitesmoke"/> :
                filteredData[0].icons.left == "ChevronDown" ? <ChevronDown size={20} color="whitesmoke"/> :
        
                <></>
                :
                <></>
           }
    
        </span>
        <span className="col-10 text-center videoCardHeaderContent_title">{headerData[0].title}</span>
        <span className="col-1">
        {
                filteredData.length > 0 ?
                filteredData[0].columns.find(v=>v == "right") ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg> :
            <></>
            :
            <></>
            }
           
        </span>
        <span className="text-center mt-1 videoCardHeaderContent_text" style={{fontSize:"85%", fontWeight:"500"}}>{headerData[0].text}</span>
    </h6>
    )
}

export default VideoHeaderContent