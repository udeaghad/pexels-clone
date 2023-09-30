const PhotoModal = ({open}) => {
  return (
    <div className="bg-black w-full h-[100vh] fixed top-0 bottom-0 left-0 right-0 overflow-auto z-50" style={{display: open ? "block" : "none"}}>
      <h4 className="text-white">Photo Modal</h4>
    </div>
  )
}

export default PhotoModal