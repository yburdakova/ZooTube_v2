import { GiCat, GiHummingbird, GiFrogFoot, GiLion, GiScarabBeetle, GiSandSnake, GiMonkey } from 'react-icons/gi';
import { FaDog, FaHorse, FaFish, FaSpider } from 'react-icons/fa';

import img1 from '/public/imgs/001.png'
import img2 from '/public/imgs/002.png'

export const topics = [
  {
    name: 'kitties',
    icon: <GiCat />,
  },
  {
    name: 'doggies',
    icon: <FaDog />,
  },
  {
    name: 'farm animals',
    icon: <FaHorse />,
  },
  {
    name: 'primates',
    icon: <GiMonkey/>,
  },
  {
    name: 'birdies',
    icon: <GiHummingbird />,
  },
  {
    name: 'fishies',
    icon: <FaFish />,
  },
  {
    name: 'wild animals',
    icon: <GiLion />,
  },
  {
    name: 'beetles',
    icon: <GiScarabBeetle />,
  },
  {
    name: 'reptiles',
    icon: <GiSandSnake/>
  },
  {
    name: 'spiderlings',
    icon: <FaSpider />,
  },
  {
    name: 'other',
    icon: <GiFrogFoot />,
  },
];

export const footerList = ['About', 'Contact', 'Help', 'Privacy', 'Creator Directory']