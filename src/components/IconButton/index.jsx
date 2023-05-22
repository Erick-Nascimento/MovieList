function IconButton({ text, icon, color }) {
  return (
    <>
      <button
        className={`flex items-center gap-2 uppercase text-xs font-semibold bg-[${color}] text-white py-3 px-8 rounded-full`}
      >
        <img src={icon} alt="" />
        {text}
      </button>
    </>
  )
}

export default IconButton
