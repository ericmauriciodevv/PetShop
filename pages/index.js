import Head from 'next/head'
import Image from 'next/image'
import { use, useState } from 'react'
import IndexCarousel from '../components/carousel/Carousel'
import Category from '../components/category'
import Item from '../components/item'
import LogIn from '../components/Login'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import NavDown from '../components/NavDown'
import TypeofFoodList from '../components/typeofFood/TypeofFoodList'
import IndexCategory from '../components/category/Category'
import CarouselI from '../components/carousel/Carousel'





const Home = () => {
  const [state, setstate] = useState(false)
  

  return (
    <div>
      <title>PetShop | Home</title>
      <NavBar></NavBar>
      
    <div className='container'>
      
      <h1>Home</h1>

      <CarouselI></CarouselI>

      <IndexCategory></IndexCategory>

      <TypeofFoodList />

      <NavDown></NavDown>
      
      </div>

    </div>
  )
}

export default Home