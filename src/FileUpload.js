import React, {Component} from 'react';

class FileUpload extends Component {
    constructor() {
        super();
        this.state = {
            uploadValue: 0
        };
    }

    render() {
        return (
            <div style={{position: "absolute", top: "-6%", left: "2%"}}>
                <progress value={this.state.uploadValue} max='100'>
                    {this.state.uploadValue} %
                </progress>
                <br/>
                <input type="file" onChange={this.props.onUpload}/>
                <br/>
                <img width="100" src={this.state.picture} alt=""/>
            </div>
        )
    }
}

export default FileUpload;
