from flask import Flask, jsonify
import pandas as pd
import numpy as np
import requests # http 요청 모듈
import json 


app = Flask(__name__)
@app.route("/")
# 파이썬 기본 서버 포트 5000
def test():
    return "서버 오픈"

@app.route("/createMaindata")
def createMaindata():
    
    # 동물 데이터 받아오기
    
    # api 호출
    #서울 공공데이터 포털(data.seoul.go.kr)에서 받은 인증키를 입력
    mykey = 'yeA3GSFe5sPrnMfhn94nOLFNAzL4DlXwXSGwOxT5nHCgv257mFZ8ijf5BUFuuMEcjSXjal5hmo/tnXRXyGk6SA=='

    def getAbandondedAnimal():
        url = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic'
        df = pd.DataFrame()
        for i in range(0,10):
            req = requests.get(url, params = {
                'serviceKey' : mykey,
                '_type' : 'json',
                'upkind' : '417000',
                'state' : 'protect',
                'bgnde' : '20220331',
                'endde' : '20230331',
                'pageNo' : i+1,
                'numOfRows' : '1000'
                })
            
            data = req.json()
            df_items = pd.DataFrame(data['response']['body']['items']['item'])
            numOfRows = data['response']['body']['numOfRows']
            pageNo = data['response']['body']['pageNo']
            totalCount = data['response']['body']['totalCount']

            print("한페이지 갯수", numOfRows)
            print("현재 페이지", pageNo)
            print("전체 갯수", totalCount)

            df = pd.concat([df,df_items], axis=0)
        return(df)
        # df.to_csv('/content/drive/MyDrive/Colab Notebooks/3차 - 데이터 분석/데이터 파일/동물보호관리시스템API/raw_dog_protect_20220331_20230331_1p.csv', index=False)
        
    raw_data=getAbandondedAnimal()

    #데이터 전처리

    # 컬럼 정리
    columned_data = raw_data[['desertionNo', 'processState', 'popfile', 'happenPlace', 'kindCd', 'colorCd', 'age', 'weight', 'sexCd', 'neuterYn', 'specialMark', 'happenDt', 'noticeNo', 'noticeSdt', 'noticeEdt', 'careNm', 'careTel', 'careAddr']]

    # 품종 컬럼 정리 ('[개]' 제거)
    columned_data.loc[:, 'kindCd'] = columned_data['kindCd'].str.replace('\[개\] ', '', regex=True)

    # 나이 컬럼 정리 ('(년생)' 제거)
    columned_data.loc[:, 'age'] = columned_data['age'].str.replace('\(.*\)', '', regex=True).astype(int)

    # 체중 컬럼 정리 ('(Kg)' 제거)
    columned_data.loc[:, 'weight'] = columned_data['weight'].str.replace('\(Kg\)', '', regex=True).str.replace('~.*$', '', regex=True).str.replace('-.*$', '', regex=True).str.replace(',.*$', '', regex=True).str.replace('...*$', '', regex=True).str.replace("'", '').replace('', '0').astype(float)

    # 품종 컬럼 정리 (믹스견 품종 통일)
    underdogKindCode = ['믹스견', '엄마는치와와', '도사', '코카믹스', '장모치와와믹스견', '보더콜리 믹스', '치와와믹스견', '보도콜리 믹스', '말라뮤트 믹스', '리트리버 믹스', '프렌치불독믹스견', '혼종', '믹스']

    # 품종명 통일
    underdog_data = columned_data

    def replace_kindCode(x):
        if x in underdogKindCode:
            return 'underdog'
        else:
            return x

    underdog_data['kindCd'] = underdog_data['kindCd'].apply(replace_kindCode) # apply(함수) : 데이터 프레임의 요소에 함수를 적용하는 메서드

    # 믹스견만 도출
    underdog_data = underdog_data[underdog_data['kindCd'] == 'underdog']

    # 인덱스 정리
    underdog_data = underdog_data.reset_index(drop=True)

    print(underdog_data['kindCd'].unique())
    print("헐랭방구 만건중에 8천건이 비품종견이네;;;\n 비품종견(underdog)의 건수 : ", len(underdog_data))

    # 데이터 전처리 완료

    # 백엔드 서버 업로드 요청
    # 예ㅔㅔㅔㅔㅔㅔㅔ

    # BackEndServer = "http://58.233.19.133:3001/underdogs/upload"
    localhost = "http://localhost:3001/underdogs/upload"
    # EliceLAB = "http://183.96.52.165:3001"
    # EliceLAB = "http://183.96.52.165:3001/underdogs/upload"

    # payload = json.dumps({"data": underdog_data.to_json()})
    payload = json.dumps(underdog_data.to_dict(), ensure_ascii=False).encode('utf-8')
    # sampleData = underdog_data.loc[0]
    # testPayload = json.dumps(sampleData.to_dict(), ensure_ascii=False).encode('utf-8')
    # print(testPayload)

    headers = {"Content-Type" : "application/json"}

    # response = requests.get(localhost)

    # response = requests.post(localhost, testPayload, headers=headers)

    response = requests.post(localhost, data=payload, headers=headers)

    if response.status_code == 200:
        print("성공")
    else:
        print("실패")


if __name__ == "__main__":
    app.run()