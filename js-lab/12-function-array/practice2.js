const products = [
  { id: 1, title: "아이패드 프로 11인치", price: 850000, category: "전자기기", isSold: false, favoriteCount: 12, uploadedDaysAgo: 2, sellerRating: 4.8 },
  { id: 2, title: "가죽 소파 3인용", price: 320000, category: "가구/인테리어", isSold: false, favoriteCount: 5, uploadedDaysAgo: 15, sellerRating: 4.2 },
  { id: 3, title: "나이키 에어포스1", price: 65000, category: "의류/잡화", isSold: false, favoriteCount: 8, uploadedDaysAgo: 1, sellerRating: 4.9 },
  { id: 4, title: "다이슨 청소기", price: 280000, category: "가전제품", isSold: false, favoriteCount: 20, uploadedDaysAgo: 4, sellerRating: 4.7 },
  { id: 5, title: "루이까또즈 가방", price: 95000, category: "의류/잡화", isSold: true, favoriteCount: 3, uploadedDaysAgo: 22, sellerRating: 3.9 },
  { id: 6, title: "책상 겸용 스탠딩 데스크", price: 150000, category: "가구/인테리어", isSold: false, favoriteCount: 14, uploadedDaysAgo: 6, sellerRating: 4.5 },
  { id: 7, title: "닌텐도 스위치", price: 220000, category: "전자기기", isSold: false, favoriteCount: 31, uploadedDaysAgo: 0, sellerRating: 4.6 },
  { id: 8, title: "전기밥솥 쿠쿠", price: 90000, category: "가전제품", isSold: true, favoriteCount: 2, uploadedDaysAgo: 30, sellerRating: 4.0 },
  { id: 9, title: "골프채 풀세트", price: 480000, category: "스포츠/레저", isSold: false, favoriteCount: 9, uploadedDaysAgo: 3, sellerRating: 4.3 },
  { id: 10, title: "캠핑 텐트 4인용", price: 130000, category: "스포츠/레저", isSold: false, favoriteCount: 17, uploadedDaysAgo: 5, sellerRating: 4.8 },
];


// #1 
const availableProducts = products.filter(p => !p.isSold);
console.log(availableProducts.length);

// #2
const electronics = products.filter(p => p.category === '전자기기');
// electronics.forEach(elec => console.log(elec.title));

for (const elec of electronics) {
  console.log(elec.title);
}

// #3
const availablePopularProducts = products.filter(
  (p) => !p.isSold && p.favoriteCount >= 10
);
console.log('===========');
availablePopularProducts.forEach(p => console.log(p.title));

console.log('===========');
// #4
const titleList = products.map(p => p.title);
console.log(titleList);

console.log('===========');

// #5 : 추출, 변환
const priceWithFees = products.map(p => p.price * 1.05);
console.log(priceWithFees);

console.log('===========');

// #6
const productStatusList = products.map(p => 
  ({
    제목: p.title,
    상태: p.isSold ? '판매완료' : '판매중'
  })
);
console.log(productStatusList);

console.log('===========');

// #7
const totalFavoriteCount = products.reduce((acc, p) => acc + p.favoriteCount, 0);

console.log(totalFavoriteCount);
console.log('===========');


// #8
const highPrice = products.reduce(
  (acc, p) => (acc < p.price) ? p.price : acc
  , 0
);

console.log(highPrice);
console.log('===========');

// #9

const furnitureTotal = products
.filter((p) => p.category === '가구/인테리어' && !p.isSold)
.reduce((acc, p) => acc + p.price, 0);

console.log(furnitureTotal);

console.log('===========');
// #10
const foundProduct = products.find(p => p.id === 4);

const filteredTitleList = products.filter(
  p => p.category === foundProduct.category
    && !p.isSold
).map(p => p.title);

console.log(filteredTitleList);

