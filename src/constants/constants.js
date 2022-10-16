export const projects = [
  {
    title: 'BOOKER',
    description: "Booker is a full-stack book selling website.User may watch product, add to cart (parmanently), order & cancel order.Admin can check pending orders & Approve/Reject them.Booker has automatic logout system after 3hours of logging in",
      image: '/images/Booker.png',
      children: [
            "NodeJS | ExpressJS | Mongoose",
            "JWT | CRUD | Styled Components",
            "ReactJS | CryptoJS | Axios",
          ],
    source: 'https://github.com/Mohammad-Ashikul-Islam/Booker-Front-End-',
    visit: 'https://booker-cyan.vercel.app/',
    id: 0,
  },
  {
    title: 'TAPIN',
    description:"A one minute typing speed test full stack project.User just need to LogIn/Register and then may start the test. A random text will appear from back-end API every time & after the test, result will be shown instantly. Admin can log in and add new text to the back-end API",
    image: '/images/Tapin.png',
    children: [
      "NodeJS | ExpressJS | Mongoose",
      "CRUD | ReactJS | Redux",
      "Firebase | Axios | Bootstrap",
    ],
    source: 'https://github.com/Mohammad-Ashikul-Islam/Typing_Speed_Test-Front_End',
    visit: 'https://tapin-amber.vercel.app/',
    id: 1,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];