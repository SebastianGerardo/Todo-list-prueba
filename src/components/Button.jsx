export const Button = ({ children, disabled, onClick }) => {
  return (
    <button className="rounded-lg border border-transparent py-2 px-5 text-base bg-[#eeeeee] disabled:bg-gray-200 disabled:text-gray-500" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}