import React, { useState } from 'react';
import { Card, Avatar } from 'flowbite-react';
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike, AiFillLike } from "react-icons/ai"; 
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

const Feed = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [bookMarked, setBookMarked] = useState(false); 

  const handleLike = () => {
    setLiked(prevLiked => !prevLiked);
    setLikeCount(prevCount => (liked ? prevCount - 1 : prevCount + 1));
  };

  const handleBookMark = () => {
    setBookMarked(prevBookMarked => !prevBookMarked); 
  };

  return (
    <div className="w-full bg-gray-100 shadow-md py-4">
      <Card className="p-0 w-full mx-auto">
        <div className="flex items-center p-4">
          <Avatar
            img="https://imgs.search.brave.com/a0KvNjBZHEFt5LRuf4VM9ntFc0we3swZxm9kIPZzQIY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY2LzM5LzU0/LzM2MF9GXzE2NjM5/NTQwMl9VY2JhUzVa/NVRqMXJFYk12emhI/UjFVN0RwQ2dDV2Qz/ci5qcGc"
            rounded={true}
            size="md"
            alt="Profile Picture"
          />
          <div className="px-5 font-medium flex justify-between w-full text-gray-900 dark:text-white">
            <div>
              <div>Sonu Shah Haluwai</div>
              <div className="text-sm text-gray-500">1h ago</div>
            </div>
            {bookMarked ? (
              <IoBookmark onClick={handleBookMark} className="w-6 h-6 gray" />
            ) : (
              <IoBookmarkOutline onClick={handleBookMark} className="w-6 h-6 gray" />
            )}
          </div>
        </div>
        <p className="mt-2 text-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem fugit sed quaerat est. Modi iste esse, tempora delectus laudantium soluta perferendis corporis quibusdam! Quas molestiae suscipit error quis harum.
        </p>
        <img
          src="https://imgs.search.brave.com/hp_v_HAdXRoNRVE7fe-zfsIxJZd728D0ylCIQWoHPUA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG93cXVhbGl0eW1l/bWVzLmNvbS9pbWcv/bG93LXF1YWxpdHkt/aW1hZ2UtYmVmb3Jl/LWNvbXByZXNzaW5n/LnBuZw"
          alt="Post"
          className="w-full h-auto rounded-lg border-2 border-gray-300"
        />
        <div className="flex justify-evenly items-center text-gray-500">
          <div className='flex space-x-2'>
            {liked ? (
              <AiFillLike onClick={handleLike} className="w-6 h-6 gray" />
            ) : (
              <AiOutlineLike onClick={handleLike} className="w-6 h-6 gray" />
            )}
            <button className="hover:underline-none">Like</button>
          </div>
          <div className='flex space-x-2'>
            <FaRegComment className="w-5 h-5 gray" />
            <button className="hover:underline-none">Comment</button>
          </div>
          <div className='flex space-x-2'>
            <RiShareForwardLine className="w-6 h-6 gray" />
            <button className="hover:underline-none">Share</button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Feed;