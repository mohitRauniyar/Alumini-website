import { Button, Modal, Textarea, Card, Dropdown } from "flowbite-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { toast } from "react-toastify";

import React, { useState, useRef, useEffect } from "react";
import Side_bar from "../../components/Sidebar/Side_bar";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

import { app } from "../../firebase.js";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

// firebase rules
// rules_version = '2';

// // Craft rules based on data in your Firestore database
// // allow write: if firestore.get(
// //    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if
//       		request.resource.size  < 25 * 1024 * 1024 &&
//           (request.resource.contentType.matches('image/.*') || request.resource.contentType.matches('video/.*'));
//     }
//   }
// }

function Dashboard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const filePickerRef = useRef();
  const [files, setFiles] = useState([]);
  const [fileUrls, setFileUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState({});
  const [uploadSucceededFiles, setUploadSucceededFiles] = useState([]);
  const [percentage, setPercentage] = useState(0);

  //   console.log("hhhhhh : " + uploadSucceededFiles.length);

  //   console.log(formData);
  const handleDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    const uploads = Array.from(e.target.files);
    let urls = [];

    if (uploads.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...uploads]);

      uploads.forEach((uploadFile) => {
        if (
          (uploadFile.type.startsWith("image/") ||
            uploadFile.type.startsWith("video/")) &&
          uploadFile.size < 25 * 1024 * 1024
        ) {
          const tempUrl = URL.createObjectURL(uploadFile);
          urls.push(tempUrl);

          // Store image URL as key (not the file object)
          setImages((prev) => ({ ...prev, [tempUrl]: uploadFile }));
        } else {
          return toast.error(
            "Only Images and Videos of size less than 25MB allowed."
          );
        }
      });
    }
    setFileUrls((prev) => [...prev, ...urls]);
  };
  /* 
  useEffect(() => {
    if (fileUrls.length > 0) {
    //   console.log(fileUrls);
    }
  }, [fileUrls]); */

  const uploadToStorage = async () => {
    const storage = getStorage(app);
    const uploadPromises = [];
    let fileCount = Object.keys(images).length;
    let totalBytesTransferred = 0;
    let totalBytes = 0;

    Object.keys(images).forEach((fileUrl) => {
      totalBytes += images[fileUrl].size;
    });

    Object.keys(images).forEach((fileUrl) => {
      const imageFile = images[fileUrl];
      const fileName = new Date().getTime() + imageFile.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      const uploadPromise = new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            totalBytesTransferred += snapshot.bytesTransferred;

            const progress = (totalBytesTransferred / totalBytes) * 100;
            setPercentage(progress.toFixed(0));
          },
          (error) => {
            console.error(error);

            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUploadSucceededFiles((prev) => [...prev, downloadURL]);
              resolve(downloadURL);
            });
          }
        );
      });

      uploadPromises.push(uploadPromise);
    });
    setFileUrls([]);
    return Promise.all(uploadPromises);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowModal(false);

    try {
      const uploadedFiles = await uploadToStorage();
      // Only update formData after the media has been uploaded
      const updatedFormData = {
        ...formData,
        media: uploadedFiles,
      };
      console.log("Updated formData: ", updatedFormData);

      let requiredFields = ["category", "caption", "media"];
      let missingFields = requiredFields.filter(
        (field) => !Object.keys(updatedFormData).includes(field)
      );

      let Data = {};
      missingFields.forEach((missingValue) => {
        Data[missingValue] = null;
      });

      Data = { ...Data, ...updatedFormData };

      setPercentage(0);
      setFormData({});
      setUploadSucceededFiles([]);
      setFileUrls([]);
      setImages({});
      // Reset formData after submission

      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
      });

      const data = await res.json();
      if (res.ok) {
        return toast.success(data);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      return toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-200 flex flex-col justify-center p-4">
      <div className=" flex flex-col md:flex-row gap-4 relative">
        <div className="h-max lg:sticky fixed top-20 lg:left-0 -left-96 ">
          <Side_bar />
        </div>
        <div className="flex flex-col flex-grow gap-4">
          <div className="flex md:flex-row flex-col gap-4 flex-grow w-full">
            <div className="lg:p-16 p-8 bg-gradient-to-r from-blue-900 to-blue-600 w-full md:w-1/2 rounded-lg shadow-lg">
              <h1 className="text-white text-2xl font-bold mb-4">
                <span className="text-blue-300">YOURCORP</span>
              </h1>
              <h2 className="text-white text-xl font-semibold">
                Welcome to YOUR Alumni Portal
              </h2>
              <h2 className="text-white text-xl font-semibold"></h2>
              <button className="mt-4 px-4 py-2 text-blue-600 bg-white rounded-full border border-transparent hover:bg-gray-200">
                Get Started!
              </button>
            </div>

            <div className=" md:w-1/2 rounded-lg overflow-hidden w-full flex flex-row">
              <div className="lg:py-16 lg:px-12 p-4 bg-white md:w-1/2 rounded-lg shadow-lg overflow-hidden w-full ">
                <h2 className="text-gray-800 text-3xl font-semibold my-3">
                  Alumni <span className="font-bold">Spotlights</span>
                </h2>
              </div>
              <div className="w-1/2 -ml-2 bg-black flex flex-col gap-4 align-middle justify-center p-8 rounded-r-xl">
                <p className="text-white text-lg mt-2 font-bold">Amy Bennet</p>
                <button className="mt-4 px-4 py-2 text-blue-600 bg-white rounded-full border border-blue-600 hover:bg-gray-200">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex lg:flex-row gap-4 md:flex-row-reverse relative flex-col-reverse">
            <div className="feed bg-white lg:w-3/4 md:w-4/5 w-full rounded-md flex flex-col gap-4 relative">
              {loading && (
                <div className="flex flex-row w-full h-28 sticky top-0 left-0 p-4 gap-4 justify-start">
                  <CircularProgressbar
                    value={percentage}
                    className="w-10 h-10"
                  />
                  <h4>Posting</h4>
                </div>
              )}
                  
                  
              
            </div>
            <div className="right-side h-max lg:w-1/4 md:w-1/5 w-full flex flex-col gap-4 sticky top-20 right-0">
              <div className="bg-gradient-to-r from-blue-900 to-blue-600 shadow-lg w-full  p-8  rounded-md flex flex-col justify-evenly h-max gap-4">
                <h1 className="text-white">Share what's on your mind...</h1>
                <Button
                  className="mt-4"
                  outline
                  color="dark"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Create Post
                </Button>
              </div>
              <div
                className={`bg-white shadow-lg w-full text-center rounded-md flex flex-col justify-evenly h-max md:block hidden`}
              >
                <Card
                  className="w-full"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc="https://www.k-state.edu/chem/alumni_giving/alumni/Highlight%20Box%20Tell%20us%20your%20story.jpg"
                >
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Take a moment to write your Alumini story and introduce
                    yourself to the community.
                  </p>
                  <Button
                    className="mt-4"
                    outline
                    color="dark"
                    onClick={() => {
                      navigate("/create/spotlight");
                    }}
                  >
                    Create a Spotlight
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        className="modal-content"
      >
        <div className="text-center p-4 h-fit bg-white">
          <Modal.Header className="py-5 text-4xl modal-header">
            Create a post
          </Modal.Header>
          <Modal.Body className="modal-body">
            <div className="flex flex-col w-full gap-4 ">
              <div className="flex flex-row gap-4">
                <img
                  src="./src/assets/Amrita-University.png"
                  alt=""
                  className="w-12 h-12 border object-cover rounded-[50%]"
                />
                <h3 className="self-center">FirstName Lastname</h3>
              </div>
              <form
                method="post"
                className="flex flex-col gap-4 p-4"
                onSubmit={handleSubmit}
              >
                <div className="flex md:flex-row flex-col gap-4">
                  <label htmlFor="category" className="text-left w-1/3">
                    What do you want to share?
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="w-2/3"
                    onChange={handleDataChange}
                    required
                    defaultValue={"uncategorized"}
                  >
                    <option value="uncategorized"> Select an option</option>
                    <option value="achievement">Achievement</option>
                    <option value="oppurtunity">Oppurtunity</option>
                    <option value="experience">Experience</option>
                  </select>
                </div>

                <Textarea
                  name="caption"
                  onChange={handleDataChange}
                  placeholder="Add a caption..."
                  className="border-none focus:ring-0 bg-white rounded-none focus:border-none active:border-none hover:border-none"
                />

                <div
                  className={`flex flex-row gap-4 ${
                    fileUrls.length > 0
                  } ? :'p-2': 'p-0' flex-wrap bg-gray-100 justify-evenly`}
                >
                  {fileUrls.map((url) => (
                    <img
                      key={url}
                      src={url}
                      alt=""
                      className="w-36 max-h-48 object-cover"
                    />
                  ))}
                </div>

                <input
                  type="file"
                  multiple
                  name="uploadFiles"
                  id="uploadFiles"
                  onChange={handleChange}
                  ref={filePickerRef}
                  hidden
                />

                <div
                  className="w-56 rounded-md p-4 flex flex-row gap-4 cursor-pointer bg-black text-white"
                  onClick={() => {
                    filePickerRef.current.click();
                  }}
                >
                  <IoMdAddCircle className="self-center" /> Add Media
                </div>
                <Button type="submit" color="blue">
                  {loading ? "loading..." : "Post"}
                </Button>
              </form>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default Dashboard;
