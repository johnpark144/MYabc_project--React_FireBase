# MYabc_project--React_fireBase

- 웹사이트 링크 : https://my-abc.netlify.app/
- 백엔드 (파이어베이스 for me) : https://console.firebase.google.com/project/myabc-97f03/overview?hl=ko

- 만든이 : 박영환(John Park)
- 주요 도구 : React
- CSS : Tailwind Css, Css Modules
- 테스트 도구 : RTL, Jest(Integration), Cypress(E2E)
- 보조 도구 : Html, Dictionary API, Youglish API, Grammarly API, FireBase, PhotoShop
- 아이디어 여부 : 아이디어 85%, 클론 15% (Vocabulary 부분 조금 참고)
- 번들러 도구 : Webpack
- 설명 :
  이것은 영어공부를 필요로 하는 저를 포함한 모든 사람들을 위해 유용하게 사용하기 위해 만든 MYABC라는 이름의 영어 학습 사이트입니다.
- 만든 이유 :
제가 처음 미국에 왔을 때, 언어 장벽 때문에 모든 것이 어렵게만 느껴졌습니다. 그리고 많은 시행착오를 겪으면서 영어실력이 향상 되었던 것을 기억합니다.
이는 자주 사용하는 단어와 문장의 맥락을 공부하는 것이였습니다.
그리고 또한 영어로 영어의 단어의 의미를 확인하는 것은 단어의 진정한 의미를 알기 위해 도움이 많이 되었고, 그래서 제가 실제로 영영 사전과 영어 동영상을 주로 사용했습니다.
저는 그 경험을 바탕으로 영어 공부를 위한 웹사이트나, 애플리케이션을 개발하는 것이 좋을 것 같다고 생각하게 되었고 실천에 옮기게 되었습니다.
이미 리액트 네이티브를 이용하여 앱도 만들었습니다.
  
- 어려웠던점 및 해결책 :
1. 영어 동영상 API 호출 제한 때문에, 저는 하루 호출량이 초과하면 동영상 섹션 부분을 테스트를 할 수 없었습니다. 그래서 저는 효율적으로 검증하는 방법을 배우게 되었습니다
2. 삭제 할지말지 결정하는 모달부분을 구현하면서, 어떠한 데이터든 "삭제"를 누를 때마다, 안타깝게도 마지막 데이터만 삭제가 되었습니다. 그러나 해결책은 모달을 만드는 컴포넌트를 기존 배열을 펼쳐서 새로운 배열을 만드는 고차함수 map안에 두는것 이였습니다. 그 이유를 알고보니 map 바깥에 존재하면 마지막 데이터만 적용되기 때문이었습니다. 이제는 모달을 띄우기 위해 클릭하면 삭제할 데이터의 모달이 나옵니다.
3. 저는 다른 디파지토리에 존재하는 포트폴리오 웹사이트를 만든 후 리액트 테스팅 라이브러리와 Jest를 배우게 되었습니다. 그리고 이 프로젝트에 테스트 코드를 적용시키도록 하였습니다. 하지만 React-router-dom과 파이어베이스에 대한 테스트 코드를 배치하는 데 어려움을 겪었습니다. 그래서 그냥 E2E 테스트를 위해 사이프레스를 추가하였고 다행히도 중요한 기능에 대한 모든 테스트 코드는 테스트를 통과하게 되었습니다. 이러한 경험을 통해 Jest, RTL, Cypress에 대해 더 공부하고 익혀야 되겠다고 생각했습니다.  

- 고쳐야 하거나 개선이 필요한 점 : 클린코드로 바꾸기, 알아보기 쉬운 영어주석, 영어 공부를 위한 더나는 방법들을 구현해보기, 파이어베이스와 React-router-dom을 어떻게 테스트 할것인지 더 공부 할 필요가 있다

- 로그인 필수 ? : Yes (가입하거나, SNS로그인(Oauth))
- 프로젝트 이름 이유 : "ABC"는 알파벳의 시작이지만 때론 영어 공부의 시작을 의미하기 때문에 저는 그것을 MYabc라고 이름 지었습니다.

- 주석 언어 : 영어

- 만든기간 : 2022년 10월 10일 ~ 10월 27일
- 디버깅기간 : 2022년 10월 27일 ~ 10월 30일 (클린코드, 오류 점검, 커스텀 훅, 주석)
- 처음 깃허브 올린날 : 2022년 10월 31일
- 배포 한날 : 2022년 11월 22일
- 테스트 코드 추가한 날 : 2023년 3월 14일 ~ 3월 17일
- 배포 도구 : Netlify

# 기능
- 반응형 웹 사이트
- 테스트 코드 (Jest, Cypress, RTL)
- 로그인, 로그아웃, 회원 가입
- 구글, 깃허브, 페이스북 아이디로 로그인 (Oauth)
- 네비게이션 바와 모달(작은 네비바)
- Notfound(404) 에러 사이트
- Home 페이지 부분에 애니메이션 및 스타일 변화, 디자인
- 로딩중 플레이스 홀더 (데이타 존재 여부 상관없이)
- Days 추가 및 제거 (하루에 외울 단어를 넣기 위해)
- Words 추가 및 제거
- 단어 가리기 및 보이기 (단어 외우기 위해)
- 표안에 회색 줄 (외운 단어들 표시)
- day마다 넘어가기
- 영영사전 (Dictionary API)
- 스터디를 위한 유튜브 비디오 (단어사용 빈도수와 문맥을 확인하기 위해) (Youglish API)
- 동영상 보면서 단어 저장
- 문법체크 (Grammarly API)

# 샘플 사진

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

# 샘플 비디오

<h3> 1. Home(애니메이션): </h3>
<video src="https://user-images.githubusercontent.com/106279616/199087744-cd8b906d-ba6b-428e-8883-91c2e21b4265.mp4"></video>
<h3> 2. Memorize(Days 추가 및 제거, Words 추가 및 제거): </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088027-eb52e16f-ce96-494d-88b2-f9147a9da9ca.mp4"></video>
<h3> 3. Memorize(단어 가리기 및 보이기, 회색 줄, day마다 넘어가기): </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088111-e918ee2c-9519-4da1-9b67-410800fd6096.mp4"></video>
<h3> 4. Dictionary, Video: </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088254-461b05ad-fa3b-4fca-b823-797412cdb5c0.mp4"></video>
<h3> 5. Grammarly, Notfound 에러 : </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088297-e9049d25-520a-46d0-a640-0248ff0ca84f.mp4"></video>
<h3> 6. 로그인, 로그아웃, 구글, 깃허브, 페이스북 아이디로 로그인 : </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088453-87a07fe3-7c62-4490-b6f6-faa98385ad9c.mp4"></video>
<h3> 7. 반응형 웹 사이트: </h3>
<video src="https://user-images.githubusercontent.com/106279616/199088711-705eb95a-1dd4-48f5-8047-a7056816f86d.mp4"></video>
