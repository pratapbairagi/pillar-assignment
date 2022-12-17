import VideoHeaderContent from "../atoms/headerContent"
import Card from "../components/profileCard"
import FollowingContentsContainer from "../components/followingContents_cotainer"
import FormCard from "../components/formcard"
import ImageCardContentsBuyContainer from "../components/imageCardContents_buy_container"
import NftsSocialCard from "../components/nftsSocialCard"
import NTFsCard from "../components/ntfsCard"
import SocialMediaLinks from "../components/socialMedia_links"
import VideoCardContent from "../components/videoCardContent"
import emptyCard from "../data/emptyCardData.json"
import emptyCardDatas from "../data/emptyCardData.json"


const Layout = () => {
    return (
        <div className="layout">
            <Card />
            <SocialMediaLinks />

            <h6 style={{color:"whitesmoke"}}>EXCLUSIVE CONTENT</h6>

            <FollowingContentsContainer />

            <ImageCardContentsBuyContainer />

            <VideoCardContent data={"Speed Training Playlist"} />

            <VideoCardContent data={"Workout Vlog With Batman !"} />

            {/* <VideoHeaderContent headerData={emptyCardDatas.filter(v=>v.title == "Speed Training Playlist")} /> */}

            <FormCard />
            
            <VideoCardContent data={"Racing people for $$$"} />

            <span className="mt-3" style={{ fontSize: "135%", fontWeight: "600", color:"whitesmoke" }}>Business</span>
            <div className="container-fluid"> 
                <VideoHeaderContent headerData={emptyCard.filter(v=>v.title == "Speed Socks ⚡️")} />
                <VideoHeaderContent headerData={emptyCard.filter(v=>v.title =="High Frequency Highway")} />
                <VideoHeaderContent headerData={emptyCard.filter(v=>v.title =="Purium Super Food")} />
                <VideoHeaderContent headerData={emptyCard.filter(v=>v.title =="Make your own page like this for free with Pillar")} />
                <VideoHeaderContent headerData={emptyCard.filter(v=>v.title =="Famous Birthdays")} />
            </div>

            <span className="mt-3" style={{ fontSize: "135%", fontWeight: "600", color:"whitesmoke" }}>Music</span>
            <div className="container-fluid">
                <VideoCardContent data={"Wishing - king han"} />
                <VideoCardContent data={"Stream my song !"} />
                <VideoCardContent data={"Wishing music video"} />
            </div>

            <span className="mt-3" style={{ fontSize: "135%", fontWeight: "600", color:"whitesmoke" }}>NFTs</span>
            <div className="container-fluid">

                <NTFsCard data={"J Johnson Jr on the moon"}/>
                <NTFsCard data={"J Johnson Jr's Dream"}/>
                <NTFsCard data={"Nike ZoomX Invincible Run Flyknit"}/>

                <NftsSocialCard data={"Critique your running form 🏃"}/>

                <VideoCardContent data={"Workout Vlog #2"} />
                <VideoCardContent data={"YouTube"} />

                <NftsSocialCard data={"Link On Pillar"}/>
                <NftsSocialCard data={"Follow back"}/>


            </div>

        </div>
    )
}

export default Layout