

const FormCard = () =>{
    return (
        <div className="formCard mt-2">
            <h6 className="form-title formCard_title">Join the squad</h6>
            <div className="form-text formCard_text" >Knwo when I drop merch & speed vlog</div>

            <div className="formIContentContainer ">
                <div className="form-group">
                <input className="form-control mt-1" placeholder="Emal" type="email" />
                </div>
                <div className="form-group mt-2">
                <input className="form-control" placeholder="Phone" type="number" />
                </div>

                <div className="formInputsContainer form-group">
                    <input type="radio" name="whoYouAre" id="fan" />
                    <label htmlFor="fan" className="form-label">I'm a Fan</label>

                    <input type="radio" name="whoYouAre" id="brand" />
                    <label htmlFor="brand" className="form-label">I'm a Brand</label>

                    <input type="radio" name="whoYouAre" id="creator" />
                    <label htmlFor="creator" className="form-label">I'm a Creator</label>
                </div>

                <button className="btn formSubmitBtn">Submit</button>

            </div>
        </div>
    )
} 

export default FormCard