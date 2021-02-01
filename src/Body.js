import React from "react"
import worldPNG from "./world.png"
import Form from './Form'

function Body(){

        return(
            <div className="body-main container-fluid">
                <div className="container">
                    <div className="row">

                        {/* first half of the body */}
                        <div className="col-6 px-3 pt-4">
                        <h4 className="px-2"><b> Facebook helps you connect and share with the people in your life.</b> </h4>
                        <img src={worldPNG} className="img-fluid" alt="world should be here"/>
                        </div>

                        {/* second half of the body */}
                        <div className="col-6">
                        <Form />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Body
