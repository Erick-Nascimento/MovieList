import User from '../../../assets/User.jpeg'

function UserPhoto() {
  return (
    <>
      <img
        src={User}
        alt="User"
        className="rounded-full h-[45px] w-[45px] object-cover"
      />
    </>
  )
}

export default UserPhoto
