let heater1="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
let heater2="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
let heater3="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
let heater4="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
let clap="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
let openhh="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
let kicknhat="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
let kick="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
let closedhh="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
const noteKeys=["Q","W","E","A","S","D","Z","X","C"]
const sounds={
    "Q":"heater1",
    "W":"heater2",
    "E":"heater3",
    "A":"heater4",
    "S":"clap",
    "D":"openhh",
    "Z":"kicknhat",
    "X":"kick",
    "C":"closedhh"
}

class App extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <>
                <div id="drum-machine">
                    <DrumPad name="Q" audio="heater-1" url={heater1}/>
                    <DrumPad name="W" audio="heater-2" url={heater2}/>
                    <DrumPad name="E" audio="heater-3" url={heater3}/>
                    <DrumPad name="A" audio="heater-4" url={heater4}/>
                    <DrumPad name="S" audio="clap" url={clap}/>
                    <DrumPad name="D" audio="open-hh" url={openhh}/>
                    <DrumPad name="Z" audio="kick-n-hat" url={kicknhat}/>
                    <DrumPad name="X" audio="kick" url={kick}/>
                    <DrumPad name="C" audio="closed-hh" url={closedhh}/>
                </div>
                <div id="display"></div>
            </>
        )
    }
}


class DrumPad extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        let name=document.getElementById(this.props.name)
        let text=document.getElementById("display")
        let newText=(this.props.audio)
        text.innerHTML=newText;
        return(
            name.play()
            )
    }
    
    handleKeyBoard(e){
        if (noteKeys.includes(e.key.toUpperCase())){
            let name=document.getElementById(e.key.toUpperCase());
            let text=document.getElementById("display")
            let newText=e.key.toUpperCase();
            text.innerHTML=sounds[newText];
            return(name.play())
        }
    }

    componentDidMount(){
        document.addEventListener("keydown",this.handleKeyBoard,false);
    }

    render(){
        return(
            <button onClick={this.handleClick} className="drum-pad" id={this.props.audio}>
                {this.props.name}
                    <audio src={this.props.url} className="clip" id={this.props.name}>
                    </audio>
                </button>
            )
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);