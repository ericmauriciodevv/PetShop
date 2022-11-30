import Head from 'next/head'
import Image from 'next/image'
import { use, useState } from 'react'
import Carousel from '../components/Carousel'
import Category from '../components/category'
import Item from '../components/item'
import LogIn from '../components/Login'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <div>
      <title>PetShop | Home</title>
      <NavBar></NavBar>
      <LogIn></LogIn>
    <div className='container'>
      
      <h1>Home</h1>
      <img src='../img/example1.jpeg' width='1300' height='500'></img>

      <h3>Category</h3>
      <p className='text-secondary'>Labels for find wathever do you want</p>
      <div className='row border-bottom mb-5 pb-4'>
      <Category className='col' category='Dogs' img='../img/categoryD.jpeg'></Category>
      <Category className='col' category='Cats' img='../img/categoryC.jpeg'></Category>
      <Category className='col' category='Accessories' img='../img/accessories.avif'></Category>
      <Category className='col' category='Food' img='../img/food.jpeg'></Category>

      </div>

      <h3>Food for dogs and cats</h3>
      <p className='text-secondary'>Find all brands of pet food, food addresses</p>
      <div className='row mb-5 pb-4'>
      <img className='col rounded-4' src='../img/comida/Chunky.jpeg' width='100' height='200'></img>
      <img className='col rounded-4' src='../img/comida/hills.jpeg' width='100' height='200'></img>
      <img className='col rounded-4' src='../img/comida/monello.jpeg' width='100' height='200'></img>
      <img className='col rounded-4' src='../img/comida/VetLife.jpeg' width='100' height='200'></img>
      </div>
      <div className='row border-bottom mb-5 pb-4'>
      <img className='col rounded-4' src='../img/comida/nupec.jpeg' width='100' height='200'></img>
      <img className='col rounded-4' src='../img/comida/ProPlan.jpeg' width='100' height='200'></img>
      <img className='col rounded-4' src='../img/comida/royalCanin.jpeg' width='100' height='200'></img>
      <img className='col rounded-4' src='../img/comida/TasteOfTheWild.jpeg' width='100' height='200'></img>
      </div>

      
    </div>

    </div>
  )
}
