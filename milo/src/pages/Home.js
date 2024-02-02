import React from 'react';
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-2rem)] w-full bg-[#1F2833] p-8">

      <div className="text-center">

      <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png" alt="brand" className="h-25 w-25 mx-auto mb-6" />
      
        <Typography variant="h1" color="cyan" className="mb-6 style={{ fontWeight: 'bold' }}">
          Welcome to Milo Personal <br></br>Financial Tool
        </Typography>

        <Typography variant="h3" color="white" className="mb-8">
          To get started, please insert a CSV statement from your bank. Then let Milo do all the work and <br></br>showcase your spending in a nice organized format for ya. BARK.
        </Typography>

      <div className="mb-8">
      <Button variant="gradient" color="cyan" className="px-20 py-7 text-lg">Get Started</Button>
      </div>

      </div>

      <Footer></Footer>

    </div>
  );
}
