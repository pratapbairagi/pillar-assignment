import nftsData from "../data/nfts.json"

const NftsSocialCard = ({ data }) => {
    const filteredData = nftsData.find(v => v.title == data)
    return (
        <div className="nftsSocialCard_container">
            <div className="row d-flex flex-wrap justify-content-center align-items-center">
                <div className="col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 d-flex justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-wechat" viewBox="0 0 16 16">
                        <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z" />
                        <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z" />
                    </svg>
                </div>

                <div className="col col-10 col-sm-10 col-md-7 col-lg-7 col-xl-7 px-3" style={{ display:"flex", flexDirection:"column"}}>
                    <h6 className="card-title text-start nftsSocialCard_title" >{filteredData.title}</h6>
                    <div className="card-text mt-1 nftsSocialCard_text">{filteredData.text}</div>
                    <span className="" style={{fontSize:"12px", fontWeight:"500", color:"whitesmoke"}}>${filteredData.price}</span>
                </div>

                <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-center">
                <button className="imageCardSubscribeBtn mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 w-100 py-2" style={{borderRadius:"8px"}}>
                    <span style={{whiteSpce:"nowrap", width:"100%", textAlign:"center"}}>Request Me</span>
                </button>
                </div>

            </div>
        </div>
    )
}

export default NftsSocialCard