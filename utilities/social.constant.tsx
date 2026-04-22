import { FACEBOOK_ICON, INSTAGRAM_ICON, YOUTUBE_ICON } from './svgConstant';

export const SocialIconList = [
    {
        ID: 1,
        name: 'Instagram',
        socialIcon: <INSTAGRAM_ICON />,
        url: 'mailto:amitroy2383@gmail.com',
        target: '_blank',
    },
    {
        ID: 0,
        name: 'FaceBook',
        socialIcon: <FACEBOOK_ICON />,
        url: 'https://www.facebook.com/profile.php?id=100006813399279',
        target: '_blank',
    },
    
    // {
    //     ID: 2,
    //     name: 'Twitter',
    //     socialIcon: <BsTwitter />,
    //     url: 'https://twitter.com/home',
    //     target: '_blank',
    // },
    // {
    //     ID: 3,
    //     name: 'Instagram',
    //     socialIcon: <AiFillInstagram />,
    //     url: 'https://www.instagram.com/the_anthem_of_the_heart_/',
    //     target: '_blank',
    // },
    {
        ID: 4,
        name: 'Youtube',
        socialIcon: <YOUTUBE_ICON />,
        url: 'https://www.linkedin.com/in/amit-roy-92585a1a9/',
        target: '_blank',
    },
];
