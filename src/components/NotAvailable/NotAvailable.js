import React from 'react'
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"

export default function NotAvailable() {
    return (
        < div style={{display:'flex', margin:'0 auto'}}>
            <div style={{margin:'0 auto', position:'relative'}}>
            <h1>Sorry, this page isn't available</h1>
            <Link to="/">
            <Button variant="danger" style={{position:'absolute'
, left:'50%'
}
            } type="button" >
             Click Me to go back
            </Button>
            </Link>
            </div>
        </div>
    )
}
