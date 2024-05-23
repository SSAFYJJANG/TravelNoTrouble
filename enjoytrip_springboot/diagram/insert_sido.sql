SELECT * FROM db_trip.gugun;
SELECT * FROM db_trip.sido;
use db_trip;
delete from sido;
INSERT INTO `sido` VALUES 
(0,'미정', "", ""),
(1,'서울', "SEOUL, MY SOUL", ""),
(2,'인천', " All ways INCHEON", ""),
(3,'대전', "Daejeon is U", ''),
(4,'대구', "Powerful Daegu", ''),
(5,'광주', '광주, 내일이 빛나는 기회도시', ''),
(6,'부산', ' Busan is good', ''),
(7,'울산', 'THE RISING CITY ULSAN', ''),
(8,'세종특별자치시', '세종이 미래다', ''),
(31,'경기도', 'GO GREAT GYEONGGI', ''),
(32,'강원도', '새로운 강원!', ''),
(33,'충청북도', '충북을 새롭게, 도민을 신나게', ''),
(34,'충청남도', '행복충만 충청남도', ''),
(35,'경상북도', '경북의 힘으로 새로운 대한민국', ''),
(36,'경상남도', 'Bravo Gyeongnam', ''),
(37,'전라북도', '함께 혁신, 함께 성공, 새로운 전북', ''),
(38,'전라남도', '생명의 땅 으뜸 전남', ''),
(39,'제주도', 'Jeju', '');

insert into gugun values (1, '강남구', 1);

INSERT INTO sido VALUES 
(0,'미정', "", "");
insert into gugun values (0, '미정', 0);

select content_id, title, addr1, first_image, sido_code, gugun_code, longitude, latitude, overview
		from attraction_info ai left join attraction_description ad
		on ai.content_id = ad.content_id;