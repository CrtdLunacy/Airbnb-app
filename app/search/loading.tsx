function LoadingSearch() {
  return (
    <div className="relative h-[500px]">
      <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-[50%] perspective-8">
        <div className="inner left-0 top-0 animate-spin border-b-[3px] border-[#FD5B61]"></div>
        <div className="inner right-0 top-0 animate-spin border-b-[3px] border-[#FD5B61]"></div>
        <div className="inner right-0 bottom-0 animate-spin border-b-[3px] border-[#FD5B61]"></div>
      </div>
    </div>
  )
}

export default LoadingSearch
