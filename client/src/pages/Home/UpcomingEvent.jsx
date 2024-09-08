import React from 'react';

const UpcomingEvents = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-white dark:border-gray-300">
          <div className="mb-4 w-full">
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACUCAMAAAD79nauAAAAPFBMVEX////t7e3i4uKzs7P09PT4+Pj7+/vCwsLx8fGsrKy8vLywsLC3t7fHx8fl5eWoqKjR0dHa2tqhoaGZmZkR1kVKAAADhElEQVR4nO2X2XrcIAyFDZjF7JD3f9d6Y7PdNpOZm349/00C9ggdSQg8TQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Y4i/jHxEjr/8TZxmzjtQJKveJuZsYX/gDxMnKacFf7attQvp3Nehsi4vKBpm8Tzan8jA4TwiVOR5jIYOjhOqQnkxdULHislonOAtutJ+CpsTHIPmfDP0NzhbKigifTlvp64iVDOcEOb125nhA83dUNLTbrZyhmGI+Yp9OM2pxP3H+hAY5UTPf5pnZbeea92Q3OSSXxCejXljG58uEtvufkuCJLPQFcwMimdXKk4hjVdrWJmzTY2UZK/ZKKky8TPg9BimUTS3cjwuK2E3/kwiSN5tdAD3bVs0tXk62rkI6A08RTebagciyxYTVmKxOvJLZnpkcv/9dJkSoEZTbeiS3N5OpoevDGJf7MvyeNb/sMWnzxHyr4f2WJxHu8IWW0Lu9mmjo3AjtV0QXFemptpO9LRC3PcHblpu4fa1TXHkSUVqoN9qLORm5v9KHmYQu/8oexZXCgwau7/4tW4pVl1ihr9vmNR5ExLoZRMz56+v0YhCx9PlXZiu3lJ92BGW3Sknh6HVt5vMiSA0oDSYpEsMx0YtQg4iJG71qeDp5uby5x4+o9CKmT4uYbTl6XDjdivsWH0WM7YQb9tzrCbtKE8vRlUhuTevTmRDSnts0htp16OZh6jY2CRfpMevHq1y8TvPzpJvUVzPB7UdFCKfLuGuNQrqt8TZ/6EVEDFTLe4e491cua7Pqyk+ZHx/ZhzujCGlLnQxlH9cuKrqeGO1wxMY1U0o/HLt+GZVxqWsdtmNofe2T54RmdY1RhOZnZ9y51HBatqAqrW8qtByGQttm1JlmgD1k8QUGEba/IXRXnqNmY33qQ79dy/mgmL4YF5eua/qDb671NL+5JXoR82L7J7GdRnHPCs9n35q168TGqoibwcDYC7a+NIq0rLSQN28dnQiyaD6f7D66nGa+otwZah+cWsfE2q7BCteiPbOxFw0fCmRtYId1ddgXzPrNfHw66V/C10KORrPC+dWyfjtKqY0ugSLWSGmN++adUwz71RnLzG7d2MM+l8ZKud5t3tQw8erQTBpFGKEp0T7sJKX07WszH6rkyb5a7b9ZSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+I/5BW9AHhNXdFhXAAAAAElFTkSuQmCC" //kuch to daal
              alt="Upcoming Event"
              className="w-full h-auto rounded-lg" 
            />
          </div>
  
          <div className="text-center mb-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
              The Next Frontier of Learning
            </h5>
            <p className="text-yellow-500 mb-1 text-sm">Progressive Education</p>
            <h6 className="text-lg font-semibold text-gray-900 dark:text-gray-900">Lesson Plans</h6>
          </div>
          <div className="bg-gray-50 dark:bg-gray-200 rounded-lg p-4 text-center mb-4">
            <p className="text-sm text-gray-700 dark:text-gray-800">Wed, September 28</p>
            <p className="text-sm text-gray-700 dark:text-gray-800">5:00pm - 8:00pm PDT</p>
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500 font-medium">
              Zoom Meeting
            </a>
          </div>
          <div className="flex flex-col items-center">
            <button className="py-2 px-4 mb-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:outline-none">
              Join Now
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              15 members have already joined.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default UpcomingEvents;