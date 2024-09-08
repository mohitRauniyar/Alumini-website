// NotificationPanel.jsx


const notifications = [
    "You have a new message!",
    "Your profile was updated.",
    "You have 3 new notifications.",
    "Hello. Test This is Arjun", 
    "Test, This is Purab",
    "test, Sorry we can't authenticate your account",
    "You have a new message!",
    
];

const Notification = () => {
    return (
        <div className="absolute right-0 bg-white border border-gray-200 rounded-lg shadow-lg lg:right-5 w-80 top-20">
            <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">Notifications</h3>
                <ul>
                    {notifications.map((notification, index) => (
                        <li key={index} className="p-2 mb-2 border-b border-gray-200 last:border-b-0">
                            {notification}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Notification;
