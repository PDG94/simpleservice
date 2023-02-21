// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";

// import { MdStar,MdPerson,MdDescription,MdOutlineHail,MdImage } from "react-icons/md";
// import {FiDollarSign} from "react-icons/fi";
// import { storage } from "../../Firebase/config";
// import { toast } from "react-toastify";

// export default function AddService(){
//     const [form, setForm] = useState({
//         CategoryId: "",
//         username: "",
//         userimage: "",
//         description: "",
//         servicename: "",
//         price: 0,
//         rating: "",
//       });

//       // const navigate = useNavigate()
    
//     const validate = (form) => {
//         let errors = {};
//         if (!form.username) {
//           errors.username = "Userame is required";
//         } else if (form.username.length > 30) {
//           errors.username = "Userame is too long";
//         }
//         if (form.description.length < 15) {
//           errors.description = "Description must have at least 15 characters";
//         }
//         if (form.rating < 1 || form.rating > 5) {
//           errors.rating = "Rating must be between 1 and 5";
//         }
//         if (isNaN(form.rating)) {
//           errors.rating = "Rating must be a number";
//         }
//         if (!form.price) {
//           errors.price = "Price is required";
//         } else if (isNaN(form.price)) {
//           errors.price = "Price must be a number";
//         }
    
//         return errors;
//       };

//       const error = validate(form);

//       const handleInputChange = (event) => {
//         const {name,value} = event.target;
    
//         setForm({ 
//             ...form, 
//             [name]: value });
//       };

//       const [uploadProgress,setUploadProgress] = useState()

//       const submitHandler = (event) => {
//         event.preventDefault();
//         // if (Object.values(error).length) {
//         //   return alert(Object.values(error).join("\n"));
//         // }
//         // axios.post(
//         //   "https://simpleservice-production.up.railway.app/services",
//         //   form
//         // );
//         // navigate("/home");
//       };


//       const handleImageChange=(event)=>{
//         const file = event.target.files[0]
//       //   // console.log(file);
//       //   const storageRef = ref(storage, `simpleService/${Date.now()}${file.name}`);
//       //   const uploadTask = uploadBytesResumable(storageRef, file);

//       //   uploadTask.on('state_changed', 
//       //   (snapshot) => {
//       //     // Observe state change events such as progress, pause, and resume
//       //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//       //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       //     setUploadProgress(progress)
//       //   }, 
//       //   (error)=>{
//       //     toast.error(error.message)
//       //   },
//       //   () => {
//       //     // Handle successful uploads on complete
//       //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//       //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       //       setForm({...form,imageURL:downloadURL})
//       //       toast.success("Image uploaded succesfully.")
//       //     });
//       //   }
//       // );
      

//       }
  
//     return(
//         <div>
//             <form onSubmit={submitHandler}>
//       <div className="form">
//       <Link to={"/Home"}>
//         <button className="back">Back</button>
//       </Link>
//       <div className="containerCreated">
// <h1>New Service</h1>
//       <div >
//       <label className="icon"><MdPerson/></label>
//         <span >Username: </span>
//         <input
//           type="text"
//           value={form.username}
//           onChange={(e) => handleInputChange(e)}
//           name="username"
//         />
//         <p className="valid">{error.username}</p>
//       </div>

//       <div>
//       <label className="icon"><MdDescription/></label>
//         <span>Description: </span>
//         <input
//           type="text"
//           value={form.description}
//           name="description"
//           onChange={(e) => handleInputChange(e)}
//         />
//         <p className="valid">{error.description}</p>
//       </div>

//       <div>
//       <label className="icon"><MdStar/></label>
//         <span>Rating: </span>
//         <input
//           type="text"
//           value={form.rating}
//           name="rating"
//           onChange={(e) => handleInputChange(e)}
//         />
//         <p className="valid">{error.rating}</p>
//       </div>

//       <div>
//       <label className="icon"><FiDollarSign/></label>
//         <span>Price: </span>
//         <input
//           type="text"
//           value={form.price}
//           name="price"
//           onChange={(e) => handleInputChange(e)}
//         />
//         <p className="valid">{error.price}</p>
//       </div>

//       <div>
//       <label className="icon"><MdOutlineHail/></label>
//         <span>Service: </span>
//         <input
//           type="text"
//           value={form.servicename}
//           name="servicename"
//            onChange={(e) => handleInputChange(e)}
//         />
//         <p className="valid">{error.servicename}</p>
//       </div>

//       <div>
//       <label className="icon"><MdImage/></label>
//         <span>Url img: </span>
//         <input
//           type="file"
//           accept="image/*"
//           placeholder="image..."
//           name="userimage"
//           onChange={(e) => handleImageChange(e)}
//         />
//         <input
//         type="text"
//         placeholder="image URL"
//         name="imagenURL"
//         value={form.imageURL}
//         disabled
//         >

//         </input>
//         <option>
//             --Choose Service Category--
//         </option>
//         <option>
//             Medicina
//         </option>
//       </div>
//       </div>
//       </div>
//       <button type="submit" className="sub">SUBMIT</button>
   
//     </form>
//         </div>
//     )
// }
