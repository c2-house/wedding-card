import { useEffect, useRef } from 'react'
import styles from './location.module.scss'

import ImageCarousel from 'components/ImageCarousel'
import image1 from 'assets/images/weddinghall_01.jpeg'
import image2 from 'assets/images/weddinghall_02.jpeg'
import image3 from 'assets/images/weddinghall_03.jpeg'
import image4 from 'assets/images/weddinghall_04.jpeg'
import kakaoIcon from 'assets/icons/kakao_map.png'
import naverIcon from 'assets/icons/naver_map.png'

const Location = () => {
  const mapElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapElement.current) return

    const location = new naver.maps.LatLng(37.5422, 126.9526)
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
    // eslint-disable-next-line unused-imports/no-unused-vars
    const marker = new naver.maps.Marker({
      position: location,
      map,
    })
  }, [])

  return (
    <section>
      <h2>LOCATION</h2>
      <h3 className={styles.location}>아펠가모 공덕</h3>
      <ImageCarousel images={[image1, image2, image3, image4]} indicatorPosition='outer' />
      <div ref={mapElement} className={styles.map} />
      <div className={styles.address}>
        <p>
          서울특별시 마포구 마포대로 92
          <br />
          효성해링턴스퀘어 B동 7층 마리에홀
        </p>
        <div className={styles.mapIcons}>
          <a href='https://naver.me/GSUnQUY2' target='_blank' rel='noreferrer'>
            <img src={naverIcon} alt='네이버 지도' />
          </a>
          <a href='http://kko.to/_ZFVcBHhXC' target='_blank' rel='noreferrer'>
            <img src={kakaoIcon} alt='카카오 지도' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location
