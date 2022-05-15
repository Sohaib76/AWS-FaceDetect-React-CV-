// components/simple-dropzone.component.js
import React from "react";

import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

const SimpleDropZone = () => {

    // Payload data and url to upload files
    const getUploadParams = ({ meta }) => { return { url: ' https://281ku6845d.execute-api.eu-west-2.amazonaws.com/v1/test2',
    headers: {'allowedOrigins': '*'}
} }

    // Return the current status of files being uploaded
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // Return array of uploaded files after submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/*,audio/*,video/*"
            // accept="image/*,audio/*,video/*"
        />
    );
};

export default SimpleDropZone;