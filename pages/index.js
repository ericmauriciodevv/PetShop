import Head from 'next/head'
import Image from 'next/image'
import { use, useState } from 'react'
import Carousel from '../components/Carousel'
import Category from '../components/category'
import Item from '../components/item'
import LogIn from '../components/Login'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'


if(Home()){console.log('hola como estas')}

export default function Home() {
  return (
    <div>
      <title>PetShop / Home</title>
      <NavBar></NavBar>
      <LogIn></LogIn>
    <div className='container'>
      
      <h1>Home</h1>
      <h3>Category</h3>

      <div className='row border-bottom mb-5 pb-4'>
      <Category className='col' category='Dogs' img='../img/categoryD.jpeg'></Category>
      <Category className='col' category='Cats' img='../img/categoryC.jpeg'></Category>
      <Category className='col' category='Accessories' img='../img/accessories.avif'></Category>
      <Category className='col' category='Food' img='../img/food.jpeg'></Category>

      </div>

      
    </div>

    </div>
  )
}
