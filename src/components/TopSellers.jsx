import { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

import VinylCard from './VinylCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { useFetchAllVinylsQuery } from '../redux/API/vinylAPI'

const TopSellers = () => {
  // const [vinyls, setVinyls] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Select a genre:')

  const categories = [
    'Select a genre:',
    'Techno',
    'House',
    'Disco',
    'Reggae',
    'Hip Hop',
  ]

  // useEffect(() => {
  //   fetch('vinyls.json')
  //     .then((res) => res.json())
  //     .then((data) => setVinyls(data))
  // }, [])

  const { data: vinyls = [] } = useFetchAllVinylsQuery()
  console.log('RTK', vinyls)

  // console.log(selectedCategory)
  const filteredVinyls =
    selectedCategory === 'Select a genre:'
      ? vinyls
      : vinyls.filter((vinyl) => vinyl.category === selectedCategory)

  // let settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },

  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //   ],
  // }

  let settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  console.log('Filtered Vinyls', filteredVinyls)
  return (
    <>
      <div className="py-14 px-4 pb-6">
        <p className="text-xl font-semibold mb-6 "> All Plates</p>

        {/* Select Options */}

        <div className="mb-8 flex place-items-center">
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="category"
            id="category"
            className="border text-medium  bg-slate-300 rounded-md border-gray-600 px-6 py-2 focus:outline-0"
          >
            {categories.map((category, index) => (
              <option
                className="text-xl font-medium"
                key={index}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="auto  h-[600px] md:h-[360px] flex flex-col md:flex-row justify-start items-center bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 ">
          <div className="h-[600px] md:h-[360px] w-11/12 md:pt-5 pt-4 m-auto ">
            <Slider {...settings}>
              {filteredVinyls.map((vinyl, index) => (
                <div key={index} className=" mb-4 block px-10 m-auto">
                  <VinylCard key={index} vinyl={vinyl} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* <div>
          {filteredVinyls.map((vinyl, index) => (
            <div key={index} className="mb-4">
              <VinylCard key={index} vinyl={vinyl} />
            </div>
          ))}
        </div> */}
      </div>
    </>
  )
}

export default TopSellers
