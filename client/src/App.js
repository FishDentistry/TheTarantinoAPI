import React from "react";
import logo from "./logo.svg";
import "./App.css";

//const [data, setData] = React.useState(null);

  //React.useEffect(() => {
    //fetch("/counts")
      //.then((res) => res.json())
      //.then((data) => setData(data[0].request_count));
 // }, []);

 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
     currentQuote:"Test"
    };
    this.baseQuotes = ["Big Kahuna Burger","pulpy and/or fictional","Bill killing","inglorious basterdly","death proofing"]; 
    this.index = 0;
    this.iterationCount = 0;
    this.typeWriterText = 0;
    this.currentQuote = "Big Kahuna Burger";
  }

  changeText= () => {
    if (this.index == this.baseQuotes.length - 1){
      //this.setState({currentQuote: this.baseQuotes[0]});
      this.index = 0;
      console.log("Here");
    }
    else if (this.iterationCount % 2 == 0){
      this.currentQuote= this.baseQuotes[this.index];
      this.setState({currentQuote:this.baseQuotes[this.index]});
      this.index = this.index + 1;
    }
    this.iterationCount = this.iterationCount + 1;
  };


  componentDidMount() {
    fetch("https://tarantinoapi.herokuapp.com/tarantinoapi/counts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          this.typeWriterText = document.getElementById("needstext");
          //console.log(typeWriterText);
          this.typeWriterText.innerHTML = this.baseQuotes[0];
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    //this.typeWriterText.addEventListener('animationiteration', function() {this.changeText(this.typeWriterText);});
  }

  render() {
    const { error, isLoaded, items,currentQuote } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
      <div className="App">
      <div className = "hero">
        <nav>
            <h1 className = "logo">Fronk Studios Presents:</h1>
        </nav>
        <div className ="lamp-container">
            <h1 className = "lamp">The</h1>
            <h1 className = "tarantino">Tarantino</h1>
            <h1 className = "api">API</h1>
            <p className = "desc">Your one-stop shop for Tarantino movie, character,and quote information</p>
        </div>
        <div className="needs" onAnimationIteration={this.changeText}>
            <p>For all your</p>
            <p id="needstext">{this.state.currentQuote}</p>
            <p>needs</p>
        </div>
    </div>

    <div className="secondpanel">
        <nav>
            <h1 className = "logo">API Documentation:</h1>
        </nav>
        <div className = "documentation">
            <h2>Base url for all endpoints is</h2>
            <code className = "baseurl">https://tarantinoapi.herokuapp.com/tarantinoapi</code>
            <h1>Endpoints</h1>
                <p><code>/movies</code> Get a list of all movies</p>
                <p><code>/movies/:id</code> Get a movie by its ID</p>
                <p><code>/characters</code> Get a list of all characters</p>
                <p><code>/characters/:id</code> Get a character by their ID</p>
                <p><code>/quotes</code> Get a list of all quotes</p>
                <p><code>/quotes/:id</code> Get a quote by its ID</p>
        </div>
        <div className="served">
          <p>Over {items[0].request_count} bad motherfuckers served!</p>
        </div>
    </div>
    </div>
      );
    }
  }
}



export default App;
