const Icon = ({ id, size = 24 }) => {
  return (
    <>
      <img
        width={size}
        height={size}
        src={`${process.env.PUBLIC_URL}/assets/${id}.svg`}
        alt=""
      />
    </>
  )
}

export default Icon
