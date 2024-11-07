import React from "react";

const GroupMeetingIMG = (props) => {
  const imagePath = "/images/ilustrasi/group-meeting.png";
  return (
    <div>
      <img
        src={imagePath}
        alt="Login illustration"
        className="w-full h-full"
        {...props}
      />
    </div>
  );
};

export default GroupMeetingIMG;
