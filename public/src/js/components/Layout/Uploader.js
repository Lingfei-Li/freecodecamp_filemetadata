
import React from "react"
import FileUpload from 'react-fileupload'
// var FileUpload = require('react-fileupload');

export default class Uploader extends React.Component {

    
    render() {
        var options={
            baseUrl:'api/upload',
            param:{
                fid:0
            }
        };
        return (
            <div>
                <form method="post" action="api/upload" name="submit" encType="multipart/form-data">
                    <input type="file" name="fileUpload" />
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </div>
        );
    }
}