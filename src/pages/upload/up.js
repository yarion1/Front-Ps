import axios from "axios";
import React, { Component } from "react";
import { DivUp, DivUpp, DivUppp } from "./UpStyled.js";

class Up extends Component {
  state = {
    selectedFile: null,
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();

    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);

    axios.post("api/uploadfile", formData);
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <DivUp>
          <div>
            <h2>Detalhes do arquivo:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
        </DivUp>
      );
    } else {
      return (
        <DivUpp>
          <div>
            <br />
            <h4>Escolha seu arquivo antes de fazer o upload</h4>
          </div>
        </DivUpp>
      );
    }
  };

  render() {
    return (
      <DivUppp>
        <div>
          <input type="file" onChange={this.onFileChange} />
          {this.fileData()}
          <button
            disabled={!this.state.selectedFile}
            onClick={this.onFileUpload}
          >
            Enviar
          </button>
        </div>
      </DivUppp>
    );
  }
}

export default Up;
