function IconButton({ text, icon, color }) {
  const colors = {
    red: 'bg-[#E00E0E]',
    black: 'bg-[#161616]',
  }

  return (
    <>
      <button
        className={`flex items-center gap-2 uppercase text-xs font-semibold ${colors[color]} text-white py-3 px-8 rounded-full`}
      >
        <img src={icon} alt="" />
        {text}
      </button>
    </>
  )
}

export default IconButton
