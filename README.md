# 🏡 HAPPY HOUSE 🌃
> 공공API를 통한 아파트 실거래가 조회 서비스 📊

사용자들 간의 원활한 소통과 직관적인 지표를 통한 다양한 부동산 정보를 획득하기 위한 웹서비스를 제공하기 위해 제작하였습니다.

자유로운 소통 창구인 커뮤니티와 QnA 게시판, 관심 지역의 주변 상권 탐색, 원하는 지역의 아파트 실거래가 정보, 오늘의 뉴스, 날씨 등의 여러 서비스를 제공하고자 합니다.

![image](https://user-images.githubusercontent.com/63248831/171780137-25bc1027-27e0-4905-857c-ff062a50b5d1.png)
![image](https://user-images.githubusercontent.com/63248831/171780149-241d5dc2-9563-4ba0-ade6-fb3126fcaa79.png)


## 프로젝트 정보
|개발 언어|<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
|---|---|

|이름|역할|
|---|---|
|차유진|1. 페이지 UI/디자인 구성<br>2. 게시판 기능(Community/QnA/Notice)<br>3. 아파트 가격 필터 및 서칭 <br>4. 오늘의 뉴스 <br>5. 관심매물 <br>6. 데이터베이스 구축|
|박지원|1. 회원관리<br>2. 공공API관련 기능(아파트/주변상권)<br>3. 오늘의 날씨 <br>4. 지도 서비스<br>5. 관심지역 <br>6. 이미지 업로드 <br>7. 데이터베이스 구축

<img width="600" alt="image" src="https://user-images.githubusercontent.com/63248831/171776492-69237a2e-d30d-4048-8fd4-9faeee01b714.png">


**개발 환경**

<img width="600" alt="스크린샷 2022-06-03 11 55 30" src="https://user-images.githubusercontent.com/63248831/171777648-b64b2465-e349-4a43-90f8-81ad9bcc2266.png">




## 프로젝트 디자인

**화면설계**

<img width="600" alt="image" src="https://user-images.githubusercontent.com/63248831/171777706-e2b79df1-1551-404e-a23f-ce1631960751.png">



**데이터베이스 구조**


<img width="400" alt="image" src="https://user-images.githubusercontent.com/63248831/171777776-70d45575-9ad7-4120-ae87-504eb1a7544c.png">



## 프로젝트 주요 기능
**[MEMBER]**

<img width="400" alt="image" src="https://user-images.githubusercontent.com/63248831/171778308-34157a7c-918f-49d6-8708-236467b46b35.png">

**로그인**
> 📍 JWT를 활용한 로그인 방식, 비밀번호 찾기 가능

**회원가입**
> 📍 비동기 통신을 통한 빠른 유효성 검사(동적으로 아이디 중복체크, 비밀번호 확인)

**마이페이지**
> 📍 로그인시 비밀번호를 제외한 자신의 정보를 vuex state에 저장해두고 출력<br>
> 📍 탭을 통해 자신이 넣어두었던 관심매물을 보여주고 다시 해제 가능케 함<br>
> 📍 수정 시 화면전환 없이 그 자리에서 수정이 가능케 함<br>
> 📍 보안을 위해 비밀번호 수정 후 인증토큰과 로그인 정보가 모두 사라지며, 재로그인을 요청

<br><br>
**[BOARD]**

<img width="400" alt="image" src="https://user-images.githubusercontent.com/63248831/171778421-0a1c85fb-a342-4641-976e-df6d779c2544.png">

**글 목록/작성/수정/삭제**
> 📍 데이터베이스에 데이터를 가져와 출력<br>
> 📍 페이징 및 서칭 처리

**QnA 게시판 답변**
> 📍 QnA 게시판은 다른 게시판 형식과는 달리 자신의 글 번호를 셀프참조하며, 부모 글 번호 컬럼을 통해 답변 형식으로 제작<br>
> 📍 배지를 통해 답변 완료 및 미답변 처리를 가능케 함<br>
> 📍 답변은 목록에 보이지 않고 답변이 완료되었을 때 원글과 함께 보여지며, 원래 질문글이 삭제될 시 답변도 모두 삭제됨

**댓글**
> 📍 게시판 테이블을 참조하여 댓글 데이터베이스 제작<br>
> 📍 본인과 관리자만 수정 및 삭제할 수 있으며, 화면이 전환되지 않고 그대로 수정 가능<br>
> 📍 페이징 처리, 댓글은 최신순으로 정렬

**이미지 업로드**
> 📍 이미지 저장은 프론트에서 요청이오면 백엔드에서 저장하도록 하고, 해당 위치를 데이터베이스에 저장함과 동시에 프론트로 보내주어 게시글의 이미지를 출력

<br><br>
**[MAIN]**

<img width="400" alt="image" src="https://user-images.githubusercontent.com/63248831/171777965-26e05fe7-5c1b-426c-86b9-d4b34ab7d33d.png">

**아파트 실거래가 조회**
> 📍 거래 데이터는 최근 한 달간의 데이터로 활용<br>
> 📍 공공API로 데이터를 가져와 Vuex State에 저장하여 사용<br>
> 📍 빠른 정보 확인을 위해 아파트 세부 정보는 모달창을 통해 출력<br>
> 📍 페이징 및 서칭 처리<br>
> 📍 슬라이더 가격 필터를 통한 리스트 탐색 가능<br>
> 📍 카카오 Map API를 통해 아파트들의 위치를 표시 - 마커 출력시, Services 라이브러리에 있는 Geocoder를 활용하여 String 형태의 주소를 위도와 경도로 변환하여 사용

**관심 매물**
> 📍 회원 데이터베이스를 참조하여 관심있는 매물들을 InterestAPT 테이블에 추가<br>
> 📍 관심 매물의 세부 정보와 지도를 한 화면에 출력

**관심 지역**
> 📍 회원 데이터베이스를 참조하여 관심있는 지역들을 InterestArea 테이블에 추가<br>
> 📍 자신의 거주 지역을 포함한 모든 관심 지역의 주변 상권정보를 지도와 함께 출력<br>
> 📍 상권 정보는 업종별로 분류되어 있으며, 지도 또한 업종에 따라 업데이트<br>
> 📍 공공API로 데이터를 불러와 Vuex State에 저장한 뒤 활용<br>
> 📍 빠른 정보확인을 위해 업종 세부 정보는 모달창을 통해 출력<br>
> 📍 페이징 및 서칭 처리

**오늘의 뉴스**
> 📍 크롤링을 통해 그날 그날의 부동산 뉴스를 실시간으로 가지고 와 출력

**오늘의 날씨**
> 📍 Geolocation을 통해 사용자의 위치 정보를 받아오고, 해당 지역의 실시간 날씨 정보를 불러와 출력




## 프로젝트 결과 시뮬레이션 

**VIDEO**


