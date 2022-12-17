import nftsData from "../data/nfts.json";
import { BoxArrowUpRight } from "react-bootstrap-icons"

const NTFsCard = ({ data }) => {
    const filteredData = nftsData.find(v => v.title == data)
    return (
        <div className=" imageCardContent mt-3" style={{ minHeight: "150px" }}>
            <div className="imageCardContent_imageContainer" style={{ minHeight: "150px" }}>
                <img src={filteredData.url} alt={filteredData.title} style={{ minHeight: "150px" }} className="imageCardContent_img" />
            </div>

            <div className="imageCardContent_body">
                <h6 className="imageCardContent_body_title" style={{ height: "100%" }}>{filteredData.title}</h6>
                <div className="imageCardContent_body_text" style={{ height: "100%" }}>{filteredData.text}</div>

                <button className="imageCardSubscribeBtn d-flex gap-2" >
                    <span style={{ whiteSpace: "nowrap" }}>Buy for {filteredData.price} </span>
                    <BoxArrowUpRight color="blue" size={24} />
                </button>
            </div>
        </div>
    )
}

export default NTFsCard