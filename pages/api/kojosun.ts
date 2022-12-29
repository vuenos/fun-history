// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  Date: string,
  Event: string

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // @ts-ignore
  res.status(200).json([
    {
      "key": "1672331865-139",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0108년",
      "Event": "니계상(尼谿相) 삼(參) 우거왕을 죽이고 한(漢)에 항복함."
    },
    {
      "key": "1672331865-140",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0109년04월",
      "Event": "우거(右渠) 한(漢)의 요동도위(遼東都尉)를 공격하여 섭하(涉何)를 살해함."
    },
    {
      "key": "1672331865-141",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0110년",
      "Event": "우거왕(右渠王) 진국(辰國)의 한(漢)과의 통교를 방해함."
    },
    {
      "key": "1672331865-142",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0126년",
      "Event": "창해군(滄海郡) 폐지됨."
    },
    {
      "key": "1672331865-143",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0128년",
      "Event": "이무렵 예군(濊君) 남려(南閭)가 28만 명을 이끌고 한(漢)에 투항함."
    },
    {
      "key": "1672331865-144",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0190년",
      "Event": "이무렵 위만왕 진번(眞番) 임둔(臨屯)을 복속시킴."
    },
    {
      "key": "1672331865-145",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0194년",
      "Event": "위만 준왕(準王)을 공격하여 정권을 빼앗음."
    },
    {
      "key": "1672331865-146",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0195년",
      "Event": "위만 고조선에 망명함."
    },
    {
      "key": "1672331865-147",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0202년",
      "Event": "한(漢) 노관(盧綰)을 연왕(燕王)으로 삼아 패수(浿水)를 조선과의 경계로 함."
    },
    {
      "key": "1672331865-148",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0221년",
      "Event": "이무렵 조선후(朝鮮侯) 처음으로 조선왕(朝鮮王)을 칭함"
    },
    {
      "key": "1672331865-149",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0300년",
      "Event": "연 소왕(昭王) 때(-311~-279) 진개(秦開)를 요동에 보내"
    },
    {
      "key": "1672331865-150",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 0320년",
      "Event": "이무렵 연(燕)이 왕을 칭하고 동방을 침략"
    },
    {
      "key": "1672331865-151",
      "refUrl": "https://db.history.go.kr/item/level.do?sort=sequence&dir=ASC&start=1&limit=20&page=1&pre_page=0&setId=-1&totalCount=0&prevPage=1&prevLimit=&itemId=tcko&types=&synonym=off&chinessChar=on&brokerPagingInfo=&levelId=&searchKeywordType=subjectClass&searchKeywordMethod=LIKE&searchKeyword=%EA%B3%A0%EC%A1%B0%EC%84%A0&searchKeywordConjunction=AND&searchKeywordType=itemInfo.itemId&searchKeywordMethod=EQ&searchKeyword=tcko&searchKeywordConjunction=AND&searchKeywordType=isLeaf&searchKeywordMethod=EQ&searchKeyword=1&searchKeywordConjunction=AND",
      "Date": "기원전 2333년",
      "Event": "단군왕검이 고조선을 건국함."
    }
  ])
}
