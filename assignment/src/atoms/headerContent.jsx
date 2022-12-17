import datas from "../data/emptyCardData.json";
import {Ear, KeyFill, LightningChargeFill, Soundwave, StarFill} from "react-bootstrap-icons"

const cardHeaderContent = ({headerData}) => {
  const filteredData = headerData.length > 0 ? datas.filter(v=>v.title == headerData[0]?.title) : []

    return (
        <>
        <h6 className={`card-title w-100 py-3 row cardHeaderContent_container` }  style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", boxShadow:"0 0 0 1px grey", borderRadius:"12px"}}>
            <span className="col-1">
             
                { filteredData.length > 0 ?
                filteredData[0].icons.left != null ?

                    filteredData[0].icons.left == "Ear" ?  <Ear size={20} color="whitesmoke"/> :
                    filteredData[0].icons.left == "KeyFill" ? <KeyFill size={20} color="whitesmoke"/> :
                    filteredData[0].icons.left == "LightningChargeFill" ? <LightningChargeFill size={20} color="whitesmoke"/> :
                    filteredData[0].icons.left == "Soundwave" ? <Soundwave size={20} color="whitesmoke"/> : 
                    filteredData[0].icons.left == "StarFill" ? <StarFill size={20} color="whitesmoke"/> : <></>
                        :
                    <></>

                :
                <></>
                }
            </span>

            <span className="col-9 text-center px-1 cardHeaderContent_title" style={{fontSize:"15px", color:"whitesmoke"}}>{ filteredData[0]?.title }</span>

            <span className="col-1">
            { filteredData.length > 0 ?
            filteredData[0].icons.right != null ?
                filteredData[0].icons.right == "Ear" ?  <Ear size={20} color="whitesmoke"/> :
                filteredData[0].icons.right == "KeyFill" ? <KeyFill size={20} color="whitesmoke"/> :
                filteredData[0].icons.right == "LightningChargeFill" ? <LightningChargeFill size={20} color="whitesmoke"/> :
                filteredData[0].icons.right == "Soundwave" ? <Soundwave size={20} color="whitesmoke"/> : 
                filteredData[0].icons.right == "StarFill" ? <StarFill size={20} color="whitesmoke"/> : <></>
                : <></>
                : <></>
            }
            </span>
            <span className="text-center mt-1 cardHeaderContent_text" style={{fontSize:"11px",color:"whitesmoke", fontWeight:"500", width:"80%"}}>{filteredData[0]?.text}</span>
        </h6>
        </>
    )
}

export default cardHeaderContent