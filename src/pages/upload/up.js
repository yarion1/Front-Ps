import axios from 'axios';
import React,{Component} from 'react'; 
import {DivUp, DivUpp, DivUppp} from './UpStyled.js';


class Up extends Component { 

    state = { 
  
      // Initially, no file is selected 
      selectedFile: null
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("api/uploadfile", formData); 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
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
                    <button disabled={!this.state.selectedFile} onClick={this.onFileUpload}> 
                    Enviar
                    </button> 
            </div> 
        </DivUppp>
      ); 
    } 
  } 
  
  export default Up; 