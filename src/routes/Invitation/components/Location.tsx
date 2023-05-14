import { useEffect, useRef } from 'react'
import styles from './location.module.scss'

import ImageCarousel from 'components/ImageCarousel'
import image1 from 'assets/images/weddinghall_01.jpeg'
import image2 from 'assets/images/weddinghall_02.jpeg'
import image3 from 'assets/images/weddinghall_03.jpeg'
import kakaoIcon from 'assets/icons/kakao_map.png'
import naverIcon from 'assets/icons/naver_map.png'

const addressText = [
  {
    title: '주소',
    description: '서울특별시 마포구 마포대로 92\n효성해링턴스퀘어 B동 7층 마리에홀',
  },
  {
    title: '오시는 길',
    description: '공덕역 10번 출구 (경의중앙선, 공항철도)\n공덕역 7번 출구 (5호선, 6호선)',
  },
  {
    title: '주차 안내',
    description: '네비에 공덕역 10번 출구로 검색하시면\n주차장 입구 쪽으로 안내됩니다. (2시간 무료)',
  },
]

const Location = () => {
  const mapElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapElement.current) return

    const center = new naver.maps.LatLng(37.5427105, 126.9524296)
    const location = new naver.maps.LatLng(37.5422, 126.9526)

    const mapOptions: naver.maps.MapOptions = {
      center,
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
      <ImageCarousel images={[image1, image2, image3]} indicatorPosition='outer' intervalTime={4000} delay={800} />
      <div ref={mapElement} className={styles.map} />
      <div className={styles.address}>
        {addressText.map((text) => (
          <div key={text.title} className={styles.addressItem}>
            <h4>{text.title}</h4>
            <p>{text.description}</p>
          </div>
        ))}
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
