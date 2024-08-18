"use client";
import React from 'react';
import Image from 'next/image';
import aboutImg from '../assets/profilepic.png';
import book from '../assets/book.png';
import pc from '../assets/pc.png';
import card from '../assets/card.png';
import finance from '../assets/finance.png';

const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto" id="about">
            <div className="grid grid-cols-8 gap-6 place-items-center">

                <div className="col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded overflow-hidden">
                    <div>
                        <Image src={book} alt="book" className="w-auto h-[130px]"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

//27;21 minutes