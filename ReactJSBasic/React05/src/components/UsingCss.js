import React from 'react'

function UsingCss() {
    return (
        <div>
            <h1>Using CSS</h1>
            <hr />
            <div style={{ color: "white", backgroundColor: "red", textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quaerat reiciendis dolores! Rem numquam unde,
                inventore laudantium placeat repudiandae ea ipsa, non hic repellendus dolorem ad omnis, eveniet veritatis sunt.
            </div>

            <button className="btn btn-primary m-3">Click me!</button>

        </div >
    )
}

export default UsingCss;