import React from 'react'
import "./index.scss";
import BestProducts from '../../components/BestProducts';
import Category from '../../components/Category';
import MusicExperince from '../../components/MusicExperience';
import Adverts from '../../components/Adverts';
import Sales from '../../components/Sales';
import Apple from '../../components/Apple';
import Products from '../../components/Products';

const Home = () => {
  return (
    <>
    <Apple/>
    <Sales/>
    <Category/>
    <BestProducts/>
    <MusicExperince/>
    <Products/>
    <Adverts/>
    </>
  )
}

export default Home