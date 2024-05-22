SELECT * FROM db_trip.gugun;
SELECT * FROM db_trip.sido;
use db_trip;
delete from sido;
INSERT INTO `sido` VALUES 
(0,'미정', "", ""),
(1,'서울', "SEOUL, MY SOUL", "/src/assets/images/sido1.jpg"),
(2,'인천', " All ways INCHEON", "/src/assets/images/sido2.jpg"),
(3,'대전', "Daejeon is U", '/src/assets/images/sido3.jpg'),
(4,'대구', "Powerful Daegu", '/src/assets/images/sido4.jpg'),
(5,'광주', '광주, 내일이 빛나는 기회도시', '/src/assets/images/sido5.jpg'),
(6,'부산', ' Busan is good', '/src/assets/images/sido6.jpg'),
(7,'울산', 'THE RISING CITY ULSAN', '/src/assets/images/sido7.jpg'),
(8,'세종특별자치시', '세종이 미래다', '/src/assets/images/sido8.jpg'),
(31,'경기도', 'GO GREAT GYEONGGI', '/src/assets/images/sido31.jpg'),
(32,'강원도', '새로운 강원!', '/src/assets/images/sido32.jpg'),
(33,'충청북도', '충북을 새롭게, 도민을 신나게', '/src/assets/images/sido33.jpg'),
(34,'충청남도', '행복충만 충청남도', '/src/assets/images/sido34.jpg'),
(35,'경상북도', '경북의 힘으로 새로운 대한민국', '/src/assets/images/sido35.jpg'),
(36,'경상남도', 'Bravo Gyeongnam', '/src/assets/images/sido36.jpg'),
(37,'전라북도', '함께 혁신, 함께 성공, 새로운 전북', '/src/assets/images/sido37.jpg'),
(38,'전라남도', '생명의 땅 으뜸 전남', '/src/assets/images/sido38.jpg'),
(39,'제주도', 'Jeju', '/src/assets/images/sido39.jpg');

insert into gugun values (1, '강남구', 1), (0, '미정', 0);
