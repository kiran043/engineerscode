import React from "react";

class ReactState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      image: "",
      records: [],
      id: "",
     
    };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  componentDidMount() {
    this.fetchAllRecords();
  }

  // add a record
  addRecord = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var body = JSON.stringify({
      title: this.state.title,
      description: this.state.description,
      image: this.state.filename,
    });
    fetch("http://localhost:5050/api/reactstate", {
      method: "POST",
      headers: myHeaders,
      body: body,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          title: "",
          description: "",
          image: "",
        });
      });
  };

  // fetch All Records
  fetchAllRecords = () => {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch("http://localhost:5050/api/reactstate", {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        this.setState({
          records: result.response,
        });
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div>
        <div>
          {this.state.records.map((reactstate) => {
            return (
              <>
                <div>
                  <h2 className='text-center'>
                    {reactstate.id}.{reactstate.title}
                  </h2>
                  <div>
                    <img
                      src={require("../../../uploads/" + reactstate.image)}
                      style={{
                        width: "80%",
                        display:'block',
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      alt="sd"
                    />
                  </div>
                  <div className="m-4">
                    <h5>{reactstate.description}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ReactState;
