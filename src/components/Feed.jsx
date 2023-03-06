import React from 'react'
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import "./Feed.css"
import InputOption from './InputOption';
import Post from './Post';
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { addDoc, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, db} from "../firebase"

function Feed() {
  const [user] = useAuthState(auth);

  const schema = yup.object().shape({
    description: yup.string().required("You must add a post description !!!"),
  });

  const {register, handleSubmit, formState: {errors},} = useForm({
    resolver: yupResolver(schema)
  })

  const postsRef = collection(db, "/posts");

  const onCreatePost = async (data) => {
    //console.log(data)
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      id: user?.uid,
    });
  };

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" {...register("description")} />
            <p style={{color: "red"}}>{errors.description?.message}</p>
            <button type='submit' onClick={handleSubmit(onCreatePost)}>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9"/>
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e"/>
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
        </div>
      </div>

      <Post name="Abdullah Khan" description="This is also testing" message="It Worked"/> 
    </div>
  )
}

export default Feed