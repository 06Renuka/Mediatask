import React from 'react';
import image1 from '../Assets/loginimages/L_1.png';
import image2 from '../Assets/loginimages/L_2.png';
import image3 from '../Assets/loginimages/L_3.png';
import image4 from '../Assets/loginimages/L_4.png';
import image5 from '../Assets/loginimages/L_5.png';
import entry from "../Assets/icons/Entry.svg"
import GoogleButton from './GoogleButton';

const LoginPage = () => {
    return (
        <div className="relative flex justify-center items-center bg-green-100">
            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-4xl mb">
                <div className="flex flex-col gap-2">
                    <img src={image1} alt=" " className=" object-cover h-48 w-full" />
                    <img src={image2} alt=" " className=" object-cover h-48 w-full" />
                    <img src={image2} alt=" " className=" object-cover h-48 w-full" />

                </div>
                <div className="flex flex-col gap-2">
                    <img src={image3} alt=" " className=" object-cover h-1/2 w-full" />
                    <img src={image2} alt=" " className="object-cover h-48 w-full" />
                    <img src={image5} alt=" " className=" object-cover h-48 w-full" />

                </div>
                <div className="flex flex-col gap-2">
                    <img src={image4} alt=" " className=" object-cover h-48 w-full" />
                    <img src={image5} alt=" " className=" object-cover h-48 w-full" />
                    <img src={image2} alt=" " className=" object-cover h-48 w-full" />

                </div>
            </div>

            {/* Overlay Div */}
            {/* <div className="absolute top-[504px] w-[400px] h-[260px] bg-white rounded-t-[63px] shadow-lg flex flex-col items-center justify-center">
                <div className="flex items-center mb-4">
                    <img src={entry} alt="Image 4" className="h-12 w-12 mr-2 rounded-full" />
                    <h2 className="text-xl font-bold w-600">Vibesnap</h2>
                </div>
                <p className="text-center mb-4">Moments That Matter, Shared Forever.</p>
                <GoogleButton />
            </div> */}
            <div className="absolute top-[610px] left-1/2 transform -translate-x-1/2  mb-4 -translate-y-1/2 w-full h-[260px] bg-white rounded-t-[63px]  flex flex-col items-center justify-center">
                <div className="flex items-center mb-4">
                    <img src={entry} alt=" " className="h-12 w-12 mr-2 rounded-full" />
                    <h2 className="text-xl font-bold w-600">Vibesnap</h2>
                </div>
                <p className="text-center mb-4">Moments That Matter, Shared Forever.</p>
                <GoogleButton />
            </div>

        </div>
    );
};

export default LoginPage;
