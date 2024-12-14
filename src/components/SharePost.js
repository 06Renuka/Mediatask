import React,{useState} from "react";
import { RxCross2 } from "react-icons/rx";
import copyicon from "../Assets/icons/copy.svg"
import twitterIcon from "../Assets/icons/twitter.svg";
import facebookIcon from "../Assets/icons/facebook.svg";
import redditIcon from "../Assets/icons/reddit.svg";
import discordIcon from "../Assets/icons/discord.svg";
import whatsappIcon from "../Assets/icons/whatsapp.svg";
import messengerIcon from "../Assets/icons/messenger.svg";
import telegramIcon from "../Assets/icons/telegram.svg";
import instagramIcon from "../Assets/icons/instagram.svg";

const iconMap = {
    twitter: twitterIcon,
    facebook: facebookIcon,
    reddit: redditIcon,
    discord: discordIcon,
    whatsapp: whatsappIcon,
    messenger: messengerIcon,
    telegram: telegramIcon,
    instagram: instagramIcon,
};

const SharePost = ({ shareUrl, onClose }) => {
    const socialIcons = [
        "twitter",
        "facebook",
        "reddit",
        "discord",
        "whatsapp",
        "messenger",
        "telegram",
        "instagram",
    ];


    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    };

    return (

        <div
            className="p-4 bg-gray-100 font-karla mx-auto"
            style={{
                width: "400px",
                height: "379px",
                //position: "absolute", // Ensures specific top and left positioning
                top: "190px",
                left: "16px",
                borderRadius: "15px", // Makes corners rounded
            }}
        >
            <div className="relative mb-10">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold ">Share post</h2>
                </div>

                <button
                    onClick={onClose}
                    className="absolute flex items-center justify-center top-2 right-2 bg-gray-200 rounded-full"
                    style={{
                        width: "30px",
                        height: "30px",
                    }}
                >
                    <RxCross2 size={18} color="#000" />
                </button>
            </div>

            {/* Social Icons */}
            <div className="space-y-4">
                {[socialIcons.slice(0, 4), socialIcons.slice(4)].map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-between">
                        {row.map((platform) => (
                            <div
                                key={platform}
                                className="w-14 h-14 flex items-center justify-center bg-gray-300 rounded-full"
                            >
                                <img
                                    src={iconMap[platform]}
                                    alt={`${platform} Icon`}
                                    className="w-6 h-6"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="relative mt-10">
                <h3 className="mt-4 font-semibold text-lg text-gray-900">Page Link</h3>
                <div className="relative mt-2">
                    <input
                        type="text"
                        value={shareUrl ||"No URL provided"}
                        readOnly
                        className="w-full h-10 pl-4 pr-12 rounded-lg border border-gray-300 bg-white text-gray-500"
                    />
                    <img
                        src={copyicon}
                        alt="Copy Icon"
                        className="absolute right-4 top-2.5 w-5 h-5 opacity-50 cursor-pointer"
                        onClick={handleCopyClick}
                    />
                </div>
                {copied && (
                    <div className="mt-2 text-sm text-green-500">
                        Copied to clipboard!
                    </div>
                )}
            </div>

        </div>



    );
};

export default SharePost;
