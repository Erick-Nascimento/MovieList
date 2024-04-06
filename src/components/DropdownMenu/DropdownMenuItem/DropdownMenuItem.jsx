function DropdownMenuItem({ text, icon, link }) {
  return (
    <a href={link}>
      <div className="whitespace-nowrap flex items-center gap-4 text-white p-4 hover:bg-black hover:bg-opacity-60">
        <img
          className="w-5 h-5"
          src={icon}
          height={50}
          width={50}
          alt={'DropdownMenu Icon'}
        />
        <div className="flex w-full justify-start">
          <span className="">{text}</span>
        </div>
      </div>
    </a>
  )
}

export default DropdownMenuItem
