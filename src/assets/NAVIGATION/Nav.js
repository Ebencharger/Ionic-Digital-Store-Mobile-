import React, { useRef, useState } from 'react'
import '../../src/bootstrap.css'
import './Nav.css'
import logo from '../../src/logo.png'
import { useTodo } from '../VIEWS/Context'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import { PaystackConsumer } from 'react-paystack';






//  // you can call this function anything
//  const handleSuccess = (reference) => {
//     // Implementation for whatever you want to do with reference and after success call.
//     alert('Payment complete! Reference: ' + reference);
//     console.log(reference);
// //   track = Math.random();
//     // pusharray.push({ name: fullName.current.value, phone: phoneNo.current.value, amount: a * 0.7, location: location.current.value, track: track, product: cartArray });
//     // console.log(pusharray, "hiiiiii");
//     // localStorage.setItem('DigitalStore', JSON.stringify(pusharray));
//   };

//   // you can call this function anything
//   const handleClose2 = () => {
//     // implementation for  whatever you want to do when the Paystack dialog closed.
//     alert('Transaction was not completed, window closed.');
//   }

export const Nav = () => {
    const ref = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const refEmail = useRef();
    const refPhone = useRef();
    const refLocation = useRef();
    // const fullName = useRef("");
    // const phoneNo = useRef();
    // const location = useRef();

    let pusharray;
    let a = 0;
    // let email;
    let track;
    let { array, cartNo, cartArray, handleDelete, handleCancel, handleClear } = useTodo();

    if (localStorage.getItem("DigitalStore")) {
        let v = localStorage.getItem("DigitalStore")
        pusharray = JSON.parse(v)
    }
    else {
        pusharray = []
    }
    cartArray.map((max, i) => {
        return a = a + Number(max.price);
    })

    let ba = document.getElementById('email');
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [proNo, setproNo] = useState(cartNo)

    // you can call this function anything
    const handleSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        pusharray.push({ email:email , phone: phone, amount: a, location: location, product: cartArray, ref:reference });
        localStorage.setItem('DigitalStore', JSON.stringify(pusharray));
        ref.current.hidden = true;
       refEmail.current.value="";
        refPhone.current.value="";
        refLocation.current.value=""; 
        console.log("say hiiii");
        handleClear()
    };

    // you can call this function anything
    const handleClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        // console.log('closed')
        ref.current.hidden = true;
        refEmail.current.value="";
        refPhone.current.value="";
        refLocation.current.value=""; 
        console.log("say hiiii");
        handleClear()
    }

    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: a * 100*560,
        publicKey: 'pk_test_b151276bd6786f5c094f1c35d7ee0008f073fb2d',
        metadata: {
            phone,
            location
        },

    };





    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: () => handleClose (),
    };

    // const publicKey = "pk_test_b151276bd6786f5c094f1c35d7ee0008f073fb2d"
    //   const amount = a*100;
    //   const [email, setEmail] = useState("")
    //   const [location, setLocation]=useState("")
    //   const [phone, setPhone] = useState("")

    //   const componentProps = {
    //     email,
    //     amount,
    //     metadata: {
    //       phone,
    //       location
    //     },
    //     publicKey,
    //     onSuccess: () => {
    //       setEmail('')
    //       setPhone('')
    //       setLocation('');
    //     },
    //     onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    //   }

    function handleCartFa(params) {
        if (cartNo == 0) {
            ref.current.hidden = true;
        }
        else {
            ref.current.hidden = false;
            ref3.current.hidden = false;
        }
    }
    function handleClose2(params) {
        ref.current.hidden = true;
    }
    function handleCheckout(params) {
        if (cartNo != 0) {
            ref3.current.hidden = true;
            ref2.current.hidden = false;
        }
    }
    // function handleChange(params) {
    //     email=(fullName.current.value).toString();
    //     console.log(email);
    // }
    // function handleChange1(params) {
    //     console.log(phoneNo.current.value);
    // }
    // function handleChange2(params) {
    //     console.log(location.current.value);
    // }
   
    // function handlePay(params) {
    //     if (fullName.current.value !== "" && phoneNo.current.value !== "" && location.current.value !== "") {
    //         // let track = Math.random();
    //         // pusharray.push({ name: fullName.current.value, phone: phoneNo.current.value, amount: a * 0.7, location: location.current.value, track: track, product: cartArray });
    //         // console.log(pusharray, "hiiiiii");
    //         // localStorage.setItem('DigitalStore', JSON.stringify(pusharray));
    //     }
    //     else {
    //         // fullName.current.value = "FILL THIS FIELD";
    //         // phoneNo.current.value = "FILL THIS FIELD";
    //         // location.current.value = "FILL THIS FIELD";
    //     }
    // }
    return (
        <div>
            <main className="row">
                <main className="col-sm">
                    <div className="faint" hidden ref={ref}>
                        <form action="" ref={ref2} hidden>
                            <div className="adjust">
                                <input type="email" ref={refEmail} id="email" onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL" className="form-control-lg" />
                                <input type="text"  ref={refPhone} onChange={(e) => setPhone(e.target.value)} placeholder="PHONE NUMBER" className="form-control-lg" />
                                <input type="text"  ref={refLocation} onChange={(e) => setLocation(e.target.value)} placeholder="DELIVERY LOCATION" className="form-control-lg" />
                                <div className="d-flex justify-content-center align-items-center">

                                    <PaystackConsumer {...componentProps} >
                                        {({ initializePayment }) => <button type="button" onClick={() => initializePayment(handleSuccess, handleClose)} className="btn btn-primary form-control-lg mt-5">MAKE PAYMENT</button>}
                                    </PaystackConsumer>
                                    <button type="button" className="btn btn-danger ml-5 mt-5" onClick={()=>{handleCancel(ref, refEmail.current, refPhone.current, refLocation.current)}}>CANCEL ORDER</button>
                                </div>
                            </div>
                        </form>
                        <div className=" v-card card" hidden ref={ref3}>
                            <div className="title text-primary">LIST OF ITEMS SENT TO CART</div>
                            <table>
                                <th>S/N</th>
                                <th>WHAT</th>
                                <th>MODEL</th>
                                <th>PRODUCT</th>
                                <th>PRICE ($)</th>
                                <th>REMOVE</th>
                                {
                                    cartArray.map((max, i) => {
                                        return <tr key={i}>
                                            <td key={i + 2}>{i + 1}</td>
                                            <td key={i + 3}>{max.what}</td>
                                            <td key={i + 4}>{max.model}</td>
                                            <td key={i + 5}>{max.product}</td>
                                            <td key={i + 6}>{max.price}</td>
                                            <td key={i + 7}><button key={i + 8} className="btn btn-danger" onClick={() => { handleDelete(max) }}>REMOVE</button></td>
                                        </tr>
                                    })
                                }
                            </table>
                            <div className="grandtot font-weight-bold">
                                GRANDTOT={"$"}{a}
                            </div>
                            <div className="buts">
                                <button className="btn btn-primary" onClick={handleCheckout}>CHECKOUT</button>
                                <button className="btn btn-danger ml-5" onClick={handleClose2}>CLOSE</button>
                            </div>
                        </div>
                    </div>
                    <div className="header nav justify-content-between align-items-center pl-2 pr-2">
                        <div className="d-flex">
                            <Link to="/"><img src={logo} alt="" className="img" /></Link>
                            <button className="ml-5" onClick={handleCartFa}><i className="fa fa-cart-plus text-primary font-weight-bold">
                                <p>{cartNo}</p>
                            </i></button>
                        </div>
                        <div className="newnav">
                            <button>
                                <Link to="/">HOME</Link>
                            </button>
                            {
                                array.map((max, j) => {
                                    return <button key={j} className="phone">
                                        <Link key={max} to={`/details/${j}`}>{max}</Link>
                                    </button>

                                })
                            }
                        </div>
                    </div>
                </main>
            </main>
        </div>
    )
}
