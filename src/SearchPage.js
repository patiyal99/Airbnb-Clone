import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult.js";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p> 4 stays . 26 August to 30 August . 2 guests</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined"> Cancellation Flexibility </Button>
        <Button variant="outlined"> Type of Place </Button>
        <Button variant="outlined"> Price </Button>
        <Button variant="outlined"> Rooms and Beds </Button>
        <Button variant="outlined"> More Filters </Button>
      </div>
      <SearchResult
        img="https://images.unsplash.com/photo-1619989652700-9984844cb0ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80"
        location="Private room in center of London"
        title="Stay at this Spacious Edwardian House"
        description="1 Guest . 1 Bedroom . 1.5 Shared bathrooms . Wifi . Kitchen . Free Parking . Washing Machine"
        star="4.73"
        price="&euro; 30/night"
        total="&euro; 180 total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1346&q=80"
        location="Private room in center of London"
        title="Independent Luxury Studio Apartment"
        description="3 Guest . 2 Bedroom . 2 Bathrooms . Wifi . Kitchen . Swimming pool"
        star="4.58"
        price="&euro; 35/night"
        total="&euro; 210 total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="4 Guest . 2 Bedroom . 2 Bathrooms . Wifi . Kitchen . Free Parking . Washing Machine . Security Guard . Smoke Detectors"
        star="4.43"
        price="&euro; 45/night"
        total="&euro; 270 total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="4 Guest . 3 Bedroom . 3 Bathrooms . Wifi . Kitchen . Free Parking . Washing Machine Security Guard . Smoke Detectors . "
        star="4.95"
        price="&euro; 50/night"
        total="&euro; 300 total"
      />
    </div>
  );
}

export default SearchPage;
