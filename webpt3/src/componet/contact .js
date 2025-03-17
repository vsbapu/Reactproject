import React, { useState } from "react";
import Info from "./info";
import Footer from "./footer";

function Contact() {

    let [data,setData]=useState({
        name:'',
        Email:'',
        Number:'',
        Message:'',
    });
    let [errors,setErrors]=useState({
        name:"",
        Email:'',
        Number:'',
        Message:'',
    });


    let handelInputChange=(e)=>{
        let {name,value}=e.target;
        setData((prevdata)=>({
              ...prevdata,data,
              [name]:value,
        }));
    };

    let validform=()=>{
       let dataErrors=([]);
        let isvalid=true;

        if (!data.name) {
            dataErrors.name='name is Requted';
            isvalid=false;
        }
        if (!data.Email) {
            dataErrors.Email='Email is Requted';
            isvalid=false;
        }
        if (!data.Number) {
            dataErrors.Number='Number is Requted';
            isvalid=false;           
        }
        if (!data.Message) {
            dataErrors.Message="Message is Requted";
            isvalid=false;
        }
        setErrors(dataErrors);
        return isvalid;
    }

    let handelSubmited=(e)=>{
        e.preventDefault();
        JSON.stringify(data)
        if (validform()) {
            alert("Data has Submited");
        }
        else{
            alert("Please sole the error");
        }
        setData([]);
        setData({name:'',Email:'',Number:'',Message:''});
    }




    return (
        <>
            <section class="contact_section layout_padding-bottom">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Get In Touch
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-md-8 col-lg-6 mx-auto">
                            <div class="form_container">
                                <form action="">
                                    <div>
                                        <input type="text" name="name" value={data.name} onChange={handelInputChange} placeholder="Your Name" />
                                        {errors.name  && <p style={{color:'red'}}>{errors.name}</p> }
                                    </div>
                                    <div>
                                        <input type="email"name="Email" value={data.Email} onChange={handelInputChange} placeholder="Your Email" />
                                        {errors.Email  && <p style={{color:'red'}}>{errors.Email}</p> }
                                    </div>
                                    <div>
                                        <input type="Number" name="Number" value={data.Number} onChange={handelInputChange}  placeholder="Your Phone" />
                                        {errors.Number  && <p style={{color:'red'}}>{errors.Number}</p> }
                                    </div>
                                    <div>
                                        <input type="text" class="message-box" name="Message" value={data.Message} onChange={handelInputChange} placeholder="Message" />
                                        {errors.Message  && <p style={{color:'red'}}>{errors.Message}</p> }
                                    </div>
                                    <div class="btn_box ">
                                        <button onClick={handelSubmited}>
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Info/>
            <Footer/>
        </>
    );
}
export default Contact;