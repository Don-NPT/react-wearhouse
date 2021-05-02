import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const Body = styled.div`
//   background-image: url(bg1.jpg);
//   background-repeat: no-repeat;
//   background-size: cover;
  height: 754px;
  background-position: center;
`

function Admin(){
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState("");

    const [userList, setUserList] = useState([]);
    const [updateText, setUpdateText] = useState("");

    const register = () => {
        Axios.post(`http://localhost:3030/register`, {
            fname: fname,
            lname: lname,
            username: username,
            email: email,
            password: password,
            age: age,
            address: address,
        }).then((response)=>{
            if (response.data.message) {
                console.log(response.data.message);
            } else {
                console.log(response.data);
            }
        });
    };

    const edit = (id) => {
        Axios.put(`http://localhost:3030/user`).then((response)=>{
            if (response.data.message) {
                console.log(response.data.message);
            } else {
                console.log(response.data);
            }
        });
    };

    const deleteUser = (id) => {
        Axios.delete(`http://localhost:3030/user/${id}`).then((response)=>{
            setUserList(
                userList.filter((val) => {
                    return val.id != id;
                })
            )
        });
    };

    const viewall = () => {
        Axios.get('http://localhost:3030/user').then((response)=>{
            if (response.data.message) {
                console.log(response.data.message);
                setUserList(response.data.message);
            } else {
                console.log(response.data);
                setUserList(response.data);
            }
        });
    };

    return(
        <Body>
            <nav style={{height:"72px"}} />
            <div className="container">
                <form className="border" style={{float:"left", width:"400px", margin:"30px auto", padding:"30px 50px", background:"#fff", display:"block", "borderRadius":"20px"}}>
                <h3 style={{color:"#777", fontWeight:"bold"}}>Create <span style={{color:"#ffc000"}}>User</span></h3><br/>
                <div className="mb-4">
                    <input type="text" className="form-control rounded-pill" id="fname" aria-describedby="fname" placeholder="Firstname" 
                    onChange={(e)=>{
                        setFname(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-control rounded-pill" id="lname" aria-describedby="lname" placeholder="Lastname" 
                    onChange={(e)=>{
                        setLname(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-control rounded-pill" id="username" aria-describedby="username" placeholder="Username" 
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="email" className="form-control rounded-pill" id="email" aria-describedby="email" placeholder="E-mail" 
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="password" className="form-control rounded-pill" id="password" placeholder="Password" 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="number" className="form-control rounded-pill" id="age" aria-describedby="age" placeholder="Age" 
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-control rounded-pill" id="address" aria-describedby="address" placeholder="Address" 
                    onChange={(e)=>{
                        setAddress(e.target.value);
                    }}
                    />
                </div>
                <button type="submit" className="btn btn-primary rounded-pill" onClick={register}>Create</button>
                </form>
                <form className="border" style={{width:"400px", margin:"30px auto", padding:"30px 50px", background:"#fff", display:"block", "borderRadius":"20px"}}>
                <h3 style={{color:"#777", fontWeight:"bold"}}>Update <span style={{color:"#ffc000"}}>User</span></h3><br/>
                <div className="mb-4">
                    <textarea id="updateText" placeholder="Enter update JSON" 
                    onChange={(e)=>{
                        setUpdateText(e.target.value);
                    }}
                    />
                </div>
                <button type="submit" className="btn btn-primary rounded-pill" onClick={update}>Update</button>
                </form>
                <button type="submit" className="btn btn-primary rounded-pill" onClick={viewall}>View all</button>
                <div>
                    {
                        userList.map((val, key) => {
                            return (
                                <div class="col mt-3" style={{width: "400px", margin:"0 auto"}}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{val.fname} {val.lname}</h5>
                                            <p class="card-text">Username: {val.username}</p>
                                            <p class="card-text">E-mail: {val.email}</p>
                                            <p class="card-text">Age: {val.age}</p>
                                            <button className="btn btn-success me-2" onClick={() => edit(val.id)}>Edit</button>
                                            <button className="btn btn-danger" onClick={() => deleteUser(val.id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )})
                    }
                </div>
            </div>
        </Body>
    );
}
export default Admin;
