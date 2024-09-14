import React, { useEffect, useState } from "react";
import styles from "../assets/css/contacts.module.css";

import img from "../assets/images/contacts.jpg";
import mediaFacebook from "../assets/images/media/facebook.svg";
import mediaGithub from "../assets/images/media/github.svg";
import mediaGitlab from "../assets/images/media/gitlab.svg";
import mediaInstagram from "../assets/images/media/instagram.svg";
import mediaLinkedin from "../assets/images/media/linkedin.svg";
import mediaOdnoklassniki from "../assets/images/media/odnoklassniki.svg";
import mediaSkype from "../assets/images/media/skype.svg";
import mediaTelegram from "../assets/images/media/telegram.svg";
import mediaTiktok from "../assets/images/media/tiktok.svg";
import mediaTwitter from "../assets/images/media/twitter.svg";
import mediaViber from "../assets/images/media/viber.svg";
import mediaVk from "../assets/images/media/vk.svg";
import mediaWhatsApp from "../assets/images/media/whatsapp.svg";
import mediaYoutube from "../assets/images/media/youtube.svg";
import mediaZoom from "../assets/images/media/zoom.svg";
import mediaLiveJournal from "../assets/images/media/livejournal.svg";

const media = [
    {
        img: mediaFacebook,
        title: "Facebook",
        link: "https://www.facebook.com/"
    },
    { img: mediaGithub, title: "Github", link: "https://www.github.com/" },
    { img: mediaGitlab, title: "Gitlab", link: "https://www.gitlab.com/" },
    {
        img: mediaInstagram,
        title: "Instagram",
        link: "https://www.Instagram.com/"
    },
    {
        img: mediaLinkedin,
        title: "LinkedIn",
        link: "https://www.linkedin.com/"
    },
    {
        img: mediaOdnoklassniki,
        title: "Odnoklassniki",
        link: "https://www.Odnoklassniki.com/"
    },
    { img: mediaSkype, title: "Skype", link: "https://www.Skype.com/" },
    {
        img: mediaTelegram,
        title: "Telegram",
        link: "https://www.Telegram.com/"
    },
    { img: mediaTiktok, title: "Tiktok", link: "https://www.Tiktok.com/" },
    { img: mediaTwitter, title: "Twitter", link: "https://www.Twitter.com/" },
    { img: mediaViber, title: "Viber", link: "https://www.Viber.com/" },
    { img: mediaVk, title: "VK", link: "https://www.VK.com/" },
    {
        img: mediaWhatsApp,
        title: "WhatsApp",
        link: "https://www.whatsapp.com/"
    },
    { img: mediaYoutube, title: "Youtube", link: "https://www.Youtube.com/" },
    { img: mediaZoom, title: "Zoom", link: "https://www.Zoom.com/" },
    {
        img: mediaLiveJournal,
        title: "LiveJournal",
        link: "https://www.LiveJournal.com/"
    }
];

const Contacts = () => {
    return (
        <div className="container col-xxl-8 px-4 py-5 mt-5 page-wrapper">
            <div className="row flex-lg-row g-5 p-3 shadow">
                <div className="col-12 col-lg-6 my-0 my-lg-5 d-flex justify-content-center">
                    <div className="my-auto">
                        <img
                            src={img}
                            className="img-fluid shadow"
                            alt="Contacts"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-between col-lg-6 my-lg-5">
                    <h1 className="display-5 fw-bold lh-1 mb-3 text-center">
                        Contacts
                    </h1>
                    <p className="lead text-center m-0">
                        We are always open to communication
                    </p>
                    <div className="d-flex flex-column my-3 flex-grow-1">
                        <div className="row row-cols-4  text-center my-auto justify-content-center">
                            {media.map((i) => (
                                <Media key={i.title} item={i} />
                            ))}
                        </div>
                    </div>
                    <p className="lead text-center fs-3 m-0">
                        Let's do something together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;

const Media = ({ item }) => {
    const [position, setPosition] = useState({ top: "45px", left: "45px" });

    useEffect(() => {
        const timeoutId = setTimeout(
            () => {
                const newTop = Math.floor(Math.random() * 90) + "px";
                const newLeft = Math.floor(Math.random() * 90) + "px";
                setPosition({ top: newTop, left: newLeft });
            },
            500 + Math.floor(Math.random() * 1500)
        );
        return () => clearTimeout(timeoutId);
    }, [position]);

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.svg}
                style={{ top: position.top, left: position.left }}
            >
                <a href={item.link}>
                    <img
                        alt="img"
                        src={item.img}
                        style={{ height: "30px" }}
                        title={item.title}
                    />
                </a>
            </div>
        </div>
    );
};
