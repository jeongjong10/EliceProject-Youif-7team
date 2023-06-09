# EliceProject-Youif-7team
![youif](https://github.com/jeongjong10/EliceProject-Youif-7team/assets/108439535/06b313ed-59c8-40e8-a584-7f6a2130b56d)

# 7팀: Underdog
서비스 이름: 유입 You,if

인공지능 기술: 이미지 처리

팀원: 한다희, 이정현, 정종열

프로젝트 기간: 2023/04/17 → 2023/05/20


## 1. 주요 링크

- 프로젝트 기획서
    [링크](https://www.notion.so/jeongjong10/3a1d9414c59f4975a1905e94754d692d)
    
- 데이터 분석 명세서
    [링크](https://www.notion.so/jeongjong10/406715fb47c44f73aade9e47d9be2bbe)
    
- 인공지능 명세서
    [링크](https://www.notion.so/jeongjong10/b67ace0b24184999b634f6f59d900cfe?pvs=4)
    
- 프로젝트 기능 명세서
    [링크](https://www.notion.so/jeongjong10/64323b657ba0491990ac924d55ccfb99?v=ea17f812e3354242b41bfd41e298abe3&pvs=4)
    
- 와이어 프레임
    [링크](https://www.figma.com/file/VFLN6nvDRGdMuPzKTUBsDu/You%2C-if?node-id=0-1&t=9ugRnpgNquJVFxZt-0)
        
- API 명세서
    [링크](https://www.notion.so/jeongjong10/API-55d002bbe401487792300685389ae013?pvs=4)
    
---

## 2. 서비스 소개

### 기획 의도

> 유실 및 유기되어 보호소에서 보호 중인 동물 중 
‘**비품종견’과 입양 희망자를 연결하여 입양**을 활성화하는 서비스 개발.
> 

---

### 01. 해결할 문제 (데이터 분석)

1. **유기 동물 문제의 중요성**

    유기 동물 문제는 ‘인간의 윤리적 책임’과 ‘동물 복지’의 문제가 복합적으로 얽혀있는 사회적 문제이다.
2. **유기 동물 신고 건수 다량**

    매해 엄청난 수의 유기동물이 신고 되고 있다. 그 중, 품종견에 비해 비품종견의 비율이 매우 높다.
3. **유기 동물  처리 비율 (인도, 입양, 사망)**

    유기 건수가 많은데, 주인이 나타나지 않으면 인도적 처리(안락사)된다.
4. **반려동물 취득 경로 통계**

    반려동물을 취득하는 경로중  유기동물 입양의 비중이 적다.

---

### 02. 사용자 및 제공 서비스 (인공지능)

1. **인공지능 비품종견 유사 품종 추출 서비스 :** 
    1. 비품종견이 소외되는 이유인, 

    “생김새와 성질을 특정하기 어려운 점”을 해결하기 위해

    2. 품종 분류 AI 모델을 구축하여, 

        ㄱ. 보호소에 등록된 비품종견의 유사 품종을 추출한다.

        ㄴ. 사용자가 입력한 이미지에서의 품종 키워드를 추출한다.
        
2. **유기견 입양 희망자 :** 
    1. 유기견을 입양하고자 하는 사용자에게 입양 대기 중인 유기견을 추천한다.

    2. 이미지 검색을 기반으로, 희망자가 원하는 생김새(품종)를 제시받아, 비품종 유기동물을 추천한다.

    3. 해당 유기동물의 보호소에 방문 신청 예약을 중개

3. **동물 보호 관리 시스템 :**
    1. 동물 보호 관리 시스템의 접근성을 높혀 입양을 활성화시킨다.

---

### 03. 기대 효과와 활용 방안

1. 유기견 입양 희망자에게 비품종견을 입양할 수 있는 플랫폼을 제공한다.

2. 비품종견이 소외되는 이유인, “생김새와 성질을 특정하기 어려운 점”을 해결하여

3. **비품종견이 소외 받는 현상을 해소하고, 유기동물의 입양을 활성화합니다.**

4. 전체적인 유기견 수를 줄여, 동물 복지를 개선하고, 사회적 가치를 실현합니다.

---

## 3. **기술 스택**

- **프론트엔드**
    - TypeScript
    - React
    - Styled Components
    - Figma
- **백엔드**
    - TypeScript
    - NestJS
    - MongoDB Atlas & Compass
    - Python + Flask (외부 API 데이터 전처리 및 인공지능 서버)
    - Colab & Numpy & Pandas & matplotlib (공공 API 데이터 전처리, 분석)
- **인공지능**
    - Python + Flask
    - PyTorch (모델 학습)
    - Jupyter Notebook & WandB & ScikitLearn (모델 학습 시각화 및 성능 평가)
    - Colab & Numpy & Pandas & matplotlib (학습 데이터 핸들링 및 시각화)

---

## 4. 각 팀원의 역할과 기여한 부분

**|한다희 | 프론트엔드 개발 |**

- 서비스의 전반적인 레이아웃 개발
1. 초기 환경 세팅
2. 컴포넌트 분리
3. swipe / select / form / modal 구현 
- API 연동 및 속도 개선
1. 회원가입/회원탈퇴
2. 로그인/로그아웃
3. 관리자페이지
4. 토큰 요청 및 저장
- UI/UX 디자인 및 개발
1. 담당 페이지 스타일 적용 

**| 이정현 | 프론트엔드 개발 |**

- 서비스의 전반적인 레이아웃 개발
1. 초기 환경 세팅
2. intersection observer 구현
- API 연동 및 속도 개선
1. 도그리스트(underdog)페이지
2. 상세페이지
- UI/UX 디자인 및 개발
1. 담당 페이지 스타일 적용
2. 필요 디자인 요소 제작 

**| 정종열 | 백엔드 개발, 인공지능 개발, 데이터 분석 |**

- 백엔드 개발
 : 서비스 개발에 필요한 데이터 베이스를 구축하기 위해서, Colab을 활용해 raw 데이터를 전처리하는 로직을 구성하고, Python Flask를 사용하여 API형태로 데이터를 생성 및 구현하였음.
   개발한 인공지능 모델 역시 Python Flask상에 API형태로 구현하였음
   NestJS 프레임 워크 상에서 MongoDB에 데이터를 저장하고, 대용량 트래픽 환경을 가정하여 Cache처리를 통해 성능을 개선 하였음.
1. 기능 및 API 명세서 작성
2. Python Flask API 서버 구현
3. NestJS + MongoDB API서버 구현
4. Restfull API 반영 
5. In-memory Cache 처리로 대용량 트래픽 대비

- 인공지능 개발
 : 서비스 기획을 진행하면서, 구현 가능성이 있는 인공지능 모델을 선정함.
   모델을 구현하기 위한 검증된 데이터셋을Kaggle을 통해 확보하였고, EDA를 통해 해당 데이터의 분포 통계를 확인하며, 학습에 적절한 구성으로 전처리함.
   주피터 노트북 위에서 Pytorch를 사용해 기반 모델(ResNet, MobileNet) 불러와 학습을 시도하였으며, 학습 모델들의 성능 분석을 위해 Wandb로 시각화된 자료를 생성하고 비교 분석함.
   최종적으로 학습 완료된 모델은 Python 언어로 Flask 프레임 워크를 이용해 API 서버로 구현됨.
1. Jupyter Notebook
2. AI 모델 학습 Pytorch
3. 학습 과정 시각화 Wandb
4. 성능 지표 추출 sklearn
5. 학습 데이터셋 Kaggle
6. 학습 데이터 전처리 Colab
7. 학습 데이터 EDA 및 시각화
    (numpy, pandas, matplotlib)

- 데이터 분석
  : 서비스 기획의 의도와 기능에 대한 연관성 및 정합성을 구체화하기 위한 데이터 분석
   정부에서 관리중인 국가 동물 보호 시스템의 자료를 제공하는 공공 API를 통해 유기견 발생 건수, 품종견과 비품종견의 비율을 추출하여 bar, py그래프로 시각화
   서울시 유기견 발생현황 데이터 파일을 전처리하여, 유기견 처분 벙법에 따른 통계, 서울기 반려견 취득 현황 데이터 파일을 전처리하여, 유기견 입양으로 반려견을 선택하는 비율에 대한 통계를 시각화하여 서비스 기획에 뒷받침함.
1. 공공 데이터 수집 (CSV, API)
2. 데이터 분석 자료 전처리 (Colab) 
3. 분석 자료 시각화
    (numpy, pandas, matplotlib)
4. 서비스 기획 근거 확립    |

---

## 5. 기능 설명

### 메인 기능

> **이미지 검색 기능**을 활용해 사용자가 원하는 생김새의 품종을 추출하며,
사용자에게 입양 가능한 **비품종 유기견**을 조회할 수 있는 서비스를 제공합니다.
조회시 **원하는 조건에 대한 정보를 입력** 받아, 그에 적합한 비품종 유기견을 추천합니다.
입양 희망시, 해당 유기견이 있는 보호소에 방문 신청을 중개합니다.
> 

**입양 장려 프로그램**

- 입양 게시판 (보호중으로 분류된 지 오래된순으로 정렬 )
    - 기본 화면 : 게시판
    - 상세 정보 화면 제공
    - 입양 권유 정보 드롭다운 → 입양 안내 정보와 입양 강아지 정보를 제공
    - 입양 신청 버튼 → (로그인 여부 확인) →  방문 신청 내역을 생성
- 검색 기능
    1. 사용자 이미지 기반으로 검색
        1. 원하는 품종 (*이미지 첨부 → AI 서버 → 품종 추출)
    2. DB에서 해당 품종 목록을 검색
    3. 상세정보 화면 제공
    4. 입양 권유 정보 드롭다운 → 입양 안내 정보와 입양 강아지 정보를 제공
    5. 입양 신청 버튼 → (로그인 여부 확인)  → 방문 신청 내역을 생성

### 서브 기능

- 사이트 소개글 페이지
- (관리자) 방문 신청 기록 관리
- (사용자) 방문 신청 기록 관리

### 추후 개발 가능한 영역

- (관리자) 신청 처리 현황 알림 및 메일링
- (메인 데이터 업데이트) 백엔드 서버 크론잡 : 
보호 센터의 보호 공고 API를 호출하여 새로운 데이터를 전송받고, AI 모델을 거쳐 새로운 데이터 추가
- (커뮤니티) 입양 후기, 자유 게시판

---

### 7. 시연 영상 및 웹 페이지 캡처

- ABOUT 페이지

![1](https://github.com/jeongjong10/EliceProject-Youif-7team/assets/108439535/909dc854-043d-4709-920f-adc076cf2ee7)

![2](https://github.com/jeongjong10/EliceProject-Youif-7team/assets/108439535/57e7aafa-c79c-4fdb-851f-4bb70ff7b4d2)
- 메인 페이지

![3](https://github.com/jeongjong10/EliceProject-Youif-7team/assets/108439535/247d7aa1-b17d-4b4a-83af-d37b2eb3e57c)

- AI 검색 페이지

![4](https://github.com/jeongjong10/EliceProject-Youif-7team/assets/108439535/f083021f-ceee-4b3f-834d-e31ecdcd2510)

- 목록 페이지

![5](https://github.com/jeongjong10/EliceProject-Youif-7team/assets/108439535/61e3f7ec-8267-4617-a4a0-8b8bb159a03c)

![6](https://github.com/jeongjong10/EliceProject-Youif-7team/assets/108439535/83aaa2bd-7d0b-4458-9052-ec2c3cb4fdd8)

- 방문 신청 페이지

![7](https://github.com/jeongjong10/EliceProject-Youif-7team/assets/108439535/ce830afa-085a-4153-a319-2c04f465097b)

![8](https://github.com/jeongjong10/EliceProject-Youif-7team/assets/108439535/ecd78033-6e95-4693-855f-a18d6c9e327a)

---
