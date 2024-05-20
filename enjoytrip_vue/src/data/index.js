let id = 1;
const imgsrc = "/src/assets/images/trip2.jpeg";

export default {
  article: [
    {
      articleNo: 1,
      user_id: 1,
      userName: "채은",
      title: "게시판 제목 1",
      context: "게시판 내용1",
      registerTime: "2018-09-11",
      updated_at: null,
      hit: 5,
    },
    {
      articleNo: 2,
      user_id: 1,
      userName: "휘뚜루마뚜루",
      title: "게시판 제목 1",
      context: "게시판 내용1",
      registerTime: "2018-09-11",
      updated_at: null,
      hit: 5,
    },
    {
      articleNo: 3,
      user_id: 1,
      userName: "강희",
      title: "게시판 제목 1",
      context: "게시판 내용1",
      registerTime: "2018-09-11",
      updated_at: null,
      hit: 5,
    },
    {
      articleNo: 4,
      user_id: 1,
      userName: "민우",
      title: "게시판 제목 1",
      context: "게시판 내용1",
      registerTime: "2018-09-11",
      updated_at: null,
      hit: 5,
    },
    {
      articleNo: 5,
      user_id: 1,
      userName: "영희",
      title: "게시판 제목 1",
      context: "게시판 내용1",
      registerTime: "2018-09-11",
      updated_at: null,
      hit: 5,
    },
  ],

  sidoList: [
    {
      no: id,
      name: "서울",
      imgSrc: imgsrc,
      alt: "",
      slogan: "SEOUL, MY SOUL",
      dataSlideTo: id,
      dataBsSlideTo: id++,
    },
    {
      no: id,
      name: "인천",
      imgSrc: imgsrc,
      alt: "",
      slogan: "SEOUL, MY SOUL",
      dataSlideTo: id,
      dataBsSlideTo: id++,
    },
    {
      no: id,
      name: "대전",
      imgSrc: imgsrc,
      alt: "",
      slogan: "SEOUL, MY SOUL",
      dataSlideTo: id,
      dataBsSlideTo: id++,
    },
    {
      no: id,
      name: "대구",
      imgSrc: imgsrc,
      alt: "",
      slogan: "SEOUL, MY SOUL",
      dataSlideTo: id,
      dataBsSlideTo: id++,
    },
  ],
  attractionList : [
    {
      content_id : 1,
      title : '맛있는 장어덮밥집',
      add1 : '대구시 행복구 행복동',
      first_image1 : imgsrc,
      first_image2 : imgsrc,
      overview : "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      content_id : 2,
      title : '맛있는 장어덮밥집',
      add1 : '대구시 행복구 행복동',
      first_image1 : imgsrc,
      first_image2 : imgsrc,
      overview : "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]
};
