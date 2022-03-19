import React from "react";

class Main extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data: "",
            showData: ""
        }
        
    }
    componentDidMount = () => {
        fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((data) => this.setState({ data, showData: "" }));
    }
    displayData = () => {
        let value = this.state.showData;
        let data = this.state.data;
        switch(value) {
            case "":
                return (
                    <>
                    <h2>My Name is</h2>
                    <h4>{data.results[0].name.first + " " + data.results[0].name.last}</h4>
                    </>
                )
                break;
                case "mail":
                    return (
                        <>
                        <h2>My Email is</h2>
                        <h4>{data.results[0].email}</h4>
                        </>
                    )
                    break;
                    case "phone": 
                    return (
                        <>
                        <h2>My Phone Number is</h2>
                        <h4>{data.results[0].phone}</h4>
                        </>
                    )
                    break;
                    case "street":
                        return (
                            <>
                            <h2>Street</h2>
                            <h4>{data.results[0].location.street.number + " " + data.results[0].location.street.name}</h4>
                            </>
                        )
                        break;
                        case "city":
                            return (
                                <>
                                <h2>City</h2>
                                <h4>{data.results[0].location.city}</h4>
                                </>
                            )
                            break;
                            default:
                                break;
        }
    }
    render() {
        console.log(this.state.data);
        if(!this.state.data) {
            return <h1>Loading</h1>
        }
        return (
            <main>
                <section>
                    <div>
                        <img src={this.state.data ? this.state.data.results[0].picture.large : ""} />
                    </div>
                    {
                        this.displayData()
                    }
                    
                    <button onClick={this.componentDidMount}>{this.state.data ? "Random User" : "Loading"}</button>
                </section>
            </main>
        )
    }
}

export default Main;