/* eslint-disable react/prop-types */

import { getInitials } from "../../utils/helper"

const ProfileInfo = ({ userInfo }) => {
  return (
    <div className="flex items-center gap-3 ">
      <button className="flex items-center justify-center w-12 h-12 font-medium rounded-full text-slate-950 bg-slate-100 ">
        {getInitials(userInfo?.fullName || 'UN')}
      </button>
      <div>
      </div>
    </div>
  )
}

export default ProfileInfo