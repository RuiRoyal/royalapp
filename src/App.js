import React, { useEffect, useState } from "react";
import './App.css';
import Getvod from './api/Getvod'

export default () => 
  <div className="container">
    <div className="backgroundContainer"></div>
      <Getvod 
      username="TiVieira"
      password="GMDT2014"></Getvod>
  </div>