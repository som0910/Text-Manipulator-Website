import React, { useState } from 'react'

export default function About(props) {

    // custom CSS
    // const[myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // })
    // const[btnText, setBtnText] = useState("Enable Light Mode")

    // function toggleMode(){
    //     if(myStyle.color == 'black'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle={
        color: props.mode=="dark"?'white':'black',
        backgroundColor: props.mode=="dark"?'black':'white'
    }

    return (
        <div class="my-3 container" style={myStyle}>
            <h3>Aboutttt</h3>
            <div class="accordion" id="accordionExample" style={myStyle}> 
            {/* dekhoooo yaha bhi style */}
                <div class="accordion-item" style={myStyle}>
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" 
                        style={myStyle}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" style={myStyle}>
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                        style={myStyle}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" style={myStyle}>
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
                        style={myStyle}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
