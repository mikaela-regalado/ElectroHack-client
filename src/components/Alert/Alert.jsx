import React from "react";
import Alert from 'react-bootstrap/Alert'

export default function AlertMsg(variant, msg) {

    return(
                   <Alert variant={variant}>
              {msg}
            </Alert>
         
    )
}

