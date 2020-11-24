import React from "react";
import Alert from 'react-bootstrap/Alert'

export default function Alert(variant, msg) {

    return(
                   <Alert key={idx} variant={variant}>
              {msg}
            </Alert>
         
    )
}

