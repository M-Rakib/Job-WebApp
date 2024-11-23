const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} shadow-md p-6 rounded-lg`}>
        {children}
    </div>
  )
}

export default Card