import { Card, Avatar, Button } from "flowbite-react"

const ConnectCard = () => {
    return (
        <div className="w-full bg-gray-100 shadow-md py-4">
            <Card className="p-0 max-w-fit mx-auto">
                <div>
                    <Avatar
                    img="https://imgs.search.brave.com/a0KvNjBZHEFt5LRuf4VM9ntFc0we3swZxm9kIPZzQIY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY2LzM5LzU0/LzM2MF9GXzE2NjM5/NTQwMl9VY2JhUzVa/NVRqMXJFYk12emhI/UjFVN0RwQ2dDV2Qz/ci5qcGc"
                    rounded={true} size="lg" alt="Profile Picture" />
                </div>
                <div className="px-5 font-medium flex justify-between w-full text-gray-900 dark:text-white">
            <div>
              <div>Sonu Shah Haluwai</div>
              <div className="text-sm text-gray-500">Software Developer</div>
            </div>
          </div>
          <button className="py-2 px-4 mb-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none">Connect </button>
            </Card>
        </div>
    );
};

export default ConnectCard;