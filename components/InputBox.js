import React, { useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/client";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { db, storage } from "../firebase";
import firebase from "firebase";

const InputBox = () => {
  const [session, loading] = useSession();
  const inputRef = useRef(null);
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        name: session.user.name,
        image: session.user.image,
        email: session.user.email,
        post: inputRef.current.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(async (doc) => {
        if (file) {
          const upload = storage
            .ref(`posts/${doc.id}`)
            .putString(file, "data_url");
          onRemoveImage();
          await upload.on(
            "state_change",
            null,
            (error) => console.log("image err", error),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    inputRef.current.value = "";
  };

  const addImagetoPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setFile(readerEvent.target.result);
    };
  };

  const onRemoveImage = () => {
    setFile(null);
  };
  return (
    <div
      className="bg-white p-2 rounded-2xl shadow-md text-gray-500 
    font-medium mt-6"
    >
      <div className="flex space-x-4 p-4 items-center">
        <Image
          src={session.user.image}
          width={40}
          height={40}
          className="rounded-full"
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {file && (
          <div
            onClick={onRemoveImage}
            className="flex flex-col filter hover:brightness-110 transition 
                duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img src={file} alt="" className="h-8 object-contain" />
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon" onClick={() => fileRef.current.click()}>
          <CameraIcon className="h-7 text-green-400 " />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input onChange={addImagetoPost} type="file" hidden ref={fileRef} />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
