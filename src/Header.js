import React,{Component} from "react"

class Header extends Component{

    constructor(){

    super()

    this.state = {
        username: "",
        password: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event){

		const {name, value , type , checked } = event.target

		type === "checkbox" ? this.setState({[type]:checked}) : this.setState({
			[name]:value
		})
	}

    handleSubmit(){

    }

    render(){
        return(
            <nav className="header pr-5 navbar navbar-light bg-light justify-content-between">
                <a
                    className="navbar-brand ml-5"
                    href="https://www.facebook.com">
                <h1 className="text-white ml-5"><b>facebook</b></h1></a>
                <form className="form-inline form-group align-items-center justify-content-center d-flex">


                <div className="input-group input-group-sm my-3 mr-2">
                  <input
                    type="text"
                    className="loginner"
                    placeholder="Email or Phone"
                    required class="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>

                <div className="input-group input-group-sm my-3 mr-2">
                  <input
                    type="password"
                    required
                    className="loginner"
                    placeholder="Password"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                 />
                </div>

                <div className="mr-5">
                    <button
                        className="btn btn-success btn-sm mr-5"
                        type="submit"
                        onSubmit={this.handleSubmit}
                    > <b> Login </b>
                    </button>
                </div>
                </form>
            </nav>
        )
    }
}

export default Header
