---------- <a href="README_KOR.md">한글로 보기(KOR)</a> ----------
# MYabc_project--React_fireBase

- Website Link : https://my-abc.netlify.app/
- Backend (firebase for me) : https://console.firebase.google.com/project/myabc-97f03/overview?hl=ko

- Creater : Yeonghwan Park (John Park)
- Main Tools : React
- CSS : Tailwind Css(for practice), Css Modules
- Test : RTL, Jest(Integration), Cypress(E2E)
- Sub Tools : Html, Dictionary API, Youglish API, Grammarly API, FireBase, PhotoShop
- Idea or Not : Idea 85%, Clone 15% (refer to Vocabulary part)
- Bundler : Webpack
- Explantion :
  This is English study website named 'MYabc' that I built to use usefully for those who need it including myself.
- Reason of creation :
  When I came to the States for the first time, I found it hard to do everything due to the language barrier. I remember how my English get improved by going through many trials and errors, that is studying the context of frequent words and sentences, and also checking the meaning of words in English was helpful a lot to feel the true meaning, that's why I used to use Eng/Eng Dictionary and Youglish site in bookmark in actuality. Returning that time, I came to think that would be good to develop a website or application for English study based on my experience. and put them into practice. and I also created this in the app after I learned React Native.
  
- Hard Part and Solution :
1. because of limit to call API a day, I used to fail to test after some time to test. so I've learn how to test effeciently
2. implementing Modal to do "delete or cancel", whenever I click "delete", sadly only last data had been deleted.. but I found solution that I put the Modal-making-component inside of the map-function that spread array. so now that I click to set the Modal, the Modal of that data to delete comes out.
3. I Learned Jest and React Testing Library so called 'RTL' right after I built the portfolio website in another repository. and I added test code in this project. but I faced the difficulty to place Jest test code for React-router-dom and firebase, so I decided to add Cypress for E2E test. thankfully all the test code for important fuction passed the tests, I think I need to improve skills more on Jest,RTL,Cypress"

- Things To Fix or Improve : need to get this clean code, better English-comment's grammer, Implement more function for better way of Engish study, Test code for firebase and react-router-dom

- Login Must ? : Yes (Sign-up or Oauth)
- Name why : "ABC" is begining of Alphabet but that sometimes indicate begining of English study so I named it MYabc

- Comment language : English

- Date of creation : Oct 10th ~ Oct 27th 2022
- Date of debugging : Oct 27th ~ Oct 30th 2022 (clean code, fix error, custom hook, comment)
- Date of 1st upload : Oct 31th 2022
- Date of deployment : Nov 22th 2022
- Date of adding Testing library : Mar 14th 2023 ~ Mar 17th 2023
- Deployment Tool : Netlify

# Functions

- Responsive Website
- Test Code (Jest, Cypress, RTL)
- Login, Logout, Signup
- Login with Google, GitHub, FaceBook (Oauth)
- Navigation bar and Modal(Small Navigation bar)
- 404 Notfound link
- Animation, Transition and Design in Home
- PlaceHolder Loading (despite no any data)
- Add and Remove Days (to create vocabulary in a day)
- Add and Remove Words
- Hide and Show Words (to memorize vocabulary)
- Gray row (When memorized words)
- Move link day to day
- Eng/Eng Dictionary (Dictionary API)
- Youtube Video for study (to check vocabulary frequency and context) (Youglish API)
- Save word watching video
- Grammar Check (Grammarly API)

# Sample pictures

- Memorize
  ![Memorize](https://user-images.githubusercontent.com/106279616/199054212-1bd8130e-eea3-464c-a9c7-da1cda89983f.png)
- Dictionary
  ![Dictionary](https://user-images.githubusercontent.com/106279616/199054242-e7c3554e-a9b0-4a60-b113-b24017c0c362.png)
- Video
  ![Video](https://user-images.githubusercontent.com/106279616/199054266-3fd627b8-f399-47ab-9b14-1deb5df008f6.png)
- Grammarly
  ![Grammarly](https://user-images.githubusercontent.com/106279616/199054283-a6dfca30-ce8d-4cd6-babc-0eed9f2385ee.png)
- FireBase
  ![firebase](https://user-images.githubusercontent.com/106279616/199058144-14c6f042-3f23-4962-8616-5ba56c891354.jpg)

# Sample videos

<h3> 1. Home(animation): </h3>
<video src="https://user-images.githubusercontent.com/106279616/199087744-cd8b906d-ba6b-428e-8883-91c2e21b4265.mp4"></video>
<h3> 2. Memorize(Add and Remove Days, Add and Remove Words): </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088027-eb52e16f-ce96-494d-88b2-f9147a9da9ca.mp4"></video>
<h3> 3. Memorize(Hide and Show Words, Gray row, Move link day to day): </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088111-e918ee2c-9519-4da1-9b67-410800fd6096.mp4"></video>
<h3> 4. Dictionary, Video: </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088254-461b05ad-fa3b-4fca-b823-797412cdb5c0.mp4"></video>
<h3> 5. Grammarly, 404_Notfound: </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088297-e9049d25-520a-46d0-a640-0248ff0ca84f.mp4"></video>
<h3> 6. Login, Logout, login with google,github,facebook: </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088453-87a07fe3-7c62-4490-b6f6-faa98385ad9c.mp4"></video>
<h3> 7. Responsive Website: </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088711-705eb95a-1dd4-48f5-8047-a7056816f86d.mp4"></video>
