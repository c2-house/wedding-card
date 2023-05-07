import { useEffect, useRef } from 'react'

const Location = () => {
  const mapElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapElement.current) return

    const location = new naver.maps.LatLng(37.5427105, 126.9516296)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 16,
      zoomControl: false,
      disableDoubleTapZoom: true,
      disableDoubleClickZoom: true,
      disableTwoFingerTapZoom: true,
      pinchZoom: false,
      draggable: false,
      scrollWheel: false,
    }
    const map = new naver.maps.Map(mapElement.current, mapOptions)
    const marker = new naver.maps.Marker({
      position: location,
      map,
    })
    console.log('hello marker', marker)
  }, [])

  return (
    <section>
      <h2>LOCATION</h2>
      <div ref={mapElement} style={{ width: '100%', height: '200px' }} />
    </section>
  )
}

export default Location
