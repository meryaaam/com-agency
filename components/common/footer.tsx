'use client';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import React, { FormEvent, useLayoutEffect, useRef, useState } from 'react';
import { DiscordIcon, GithubIcon, TwitterIcon } from './icons';
import { ThemeSwitch } from '../theme-switch';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
 


export const Footer = () => {
return (
 
    <footer className="w-full flex items-center justify-center py-3">
    <div className="py-10 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <img className="w-auto h-9" src="/images/kanba.png" alt="" /> 

              

                <ul className="flex items-center space-x-3 mt-9">    
                    <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                    <TwitterIcon className="text-default-800" />
                    </Link>
                    <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
                        <DiscordIcon className="text-default-800" />
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <GithubIcon className="text-default-800" />
                    </Link>
           
                </ul>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </a>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p className="text-sm font-semibold tracking-widest text-gray-400 m-5 ">Subscribe to newsletter</p>
 
                <Input
                    isReadOnly
                    type="email"
                    label="Email"
                    variant="bordered"
                    defaultValue="junior@nextui.org"
                    className="max-w-xs m-2"
                    />

                    <Button  className="max-w-xs m-2" color="primary">
                        Submit
                    </Button>                
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">© Copyright 2024, All Rights Reserved by M</p>
    </div>
</div>

  </footer>
 
 
)}