import React,{Component} from "react"

class Form extends Component{

    constructor(){

    super()
    this.state = {
        firstName: "",
        lastName: "",
        emailOrPhone: "",
        newPassword: "",
        dateOfBirth: {
            day: "",
            month: "",
            year: ""
        },
        gender: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    }

    handleSubmit(){

    }

    handleChange(event){

        const {name, value , type , checked } = event.target

        type === "checkbox" ? this.setState({[type]:checked}) : this.setState({
            [name]:value
        })
    }

    handleSelect(event){

        const {name, value} = event.target
        this.setState({ dateOfBirth:
            { [name]: value }
        })

    }

    render(){
        /* For looping date numbers in drop down lists*/

        const allMonths = ["Month","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug" , "Sep", "Oct" , "Nov" , "Dec"]
        const monthList = allMonths.map((x) => {
            if(x==="Month") return(<option value="">{x}</option>)
            return(<option value={x} key={x}>{x}</option>)
        })


        let allYears = []
        for(let x = 2020; x >= 1900; --x) {
            allYears.push(x)
        }

        const yearList = allYears.map((x) => {
            if(x===2020) return(<option value="">Year</option>)
            return(<option value={x} key={x}>{x}</option>)
        })

        let allDates = []
        for(let x = 1; x <= 31; x++) {
            allDates.push(x)
        }

        const dateList = allDates.map((x) => {
            if(x===1) return(<option value="">Day</option>)
            return(<option value={x} key={x}>{x}</option>)
        })

        /* Form is being rendered right below */
        return(
        <form class="form form-group pl-4 pr-5 pt-4">

            <h2><b> Create an Account </b> </h2>
            <h4> It's quick and easy </h4>

            <div className="row mt-3">
                <div className="col-6">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        required
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        name="firstName"
                    />
                </div>
                <div className="col-6">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        required
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        name="lastName"
                    />
                </div>
            </div>

            <input
                className="form-control mt-3"
                type="text"
                required
                placeholder="Email Address or Phone Number"
                value={this.state.emailOrPhone}
                onChange={this.handleChange}
                name="emailOrPhone"
            />

            <input
                className="form-control mt-3"
                type="password"
                placeholder="Password"
                required
                value={this.state.newPassword}
                onChange={this.handleChange}
                name="newPassword"
            />

            <h6 className="text-muted mt-2"> <b> Date of Birth </b> </h6>

            <div class="row px-3 form-inline">
                <select
                    class="form-control"
                    type="select"
                    onChange={this.handleSelect}
                    required
                    value={this.state.dateOfBirth.day}
                    name="date"
                >
                    {dateList}
                </select>
                <select
                    class="form-control ml-1"
                    type="select"
                    required
                    onChange={this.handleSelect}
                    value={this.state.dateOfBirth.month}
                    name="month"
                >
                    {monthList}
                </select>
                <select
                    class="form-control ml-1"
                    type="select"
                    required
                    onChange={this.handleSelect}
                    value={this.state.dateOfBirth.year}
                    name="year"
                >
                    {yearList}
                </select>
            </div>

            <h6 className="text-muted mt-2"> <b> Gender  </b> </h6>

            <label className="mr-2 mt-1">
                <input
                    type="radio"
                    name="gender"
                    required
                    value={ this.setState.gender="Male" }
                    className="mx-1"
                    onChange={this.handleChange}
                />
                Male
            </label>
            <label className="mr-2">
                <input
                    type="radio"
                    name="gender"
                    required
                    value={ this.setState.gender="Female"  }
                    className="mx-1"
                    onChange={this.handleChange}
                />
            Female
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    required
                    value={this.setState.gender="Custom"}
                    className="mx-1"
                    onChange={this.handleChange}
                />
            Custom
            </label>

            <p className="text-muted" id="tnc">
                By clicking Sign Up, you agree to our <a href="#">Terms</a>, <a href="#">Data Policy</a> and <a href="#">Cookie Policy</a>.
                You may receive SMS notifications from us and can opt out at any time.
            </p>

            <div className="form-inline">
                <button
                    className="form-control btn btn-success mb-4"
                    type="submit"
                    onClick={this.handleSubmit}
                ><b> Sign Up </b>
                </button>

            </div>

            <p className="text-muted" id="celeb">
            <a href="#">Create a Page</a> for a celebrity, band or business.
            </p>

        </form>
        )
    }

}

export default Form
