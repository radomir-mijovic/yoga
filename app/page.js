"use client";
import React from "react";
import Hero from "./hero";
import Services from "./services";
import Pricing from "./pricing";
import SmallBanner from "./small-banner";

const Page = () => {
    return (
        <>
            <Hero/>
            <Services/>
            <Pricing/>
            <SmallBanner/>
        </>
    );
};

export default Page;
