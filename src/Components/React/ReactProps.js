import React from "react";

class ReactProps extends React.Component {
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
    fetch("http://localhost:5050/api/create", {
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
    fetch("http://localhost:5050/api/view", {
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
        <div className=''>
          {this.state.records.map((reactprops) => {
            return (
              <>
                <div className='card m-1'> 
                  <h2 className='text-center'>
                    {reactprops.id}.{reactprops.title}
                  </h2>
                  <div>
                    <img
                      src={require("../../../uploads/" + reactprops.image)}
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
                    <h6>{reactprops.description}</h6>
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

export default ReactProps;
