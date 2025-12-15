// ============================================
// 🎯 배열(Array) 코딩테스트 문제집
// React + TypeScript 환경
// ============================================

// 📌 테스트 데이터
interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  assignee: string;
  dueDate: string;
  tags: string[];
}

interface User {
  id: number;
  name: string;
  age: number;
  department: string;
  salary: number;
  isActive: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  rating: number;
}

interface Order {
  id: number;
  userId: number;
  products: { productId: number; quantity: number }[];
  totalPrice: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  orderDate: string;
}

// 📦 샘플 데이터
const tasks: Task[] = [
  {
    id: 1,
    title: "회의 준비",
    completed: false,
    priority: "high",
    assignee: "김철수",
    dueDate: "2024-12-10",
    tags: ["업무", "긴급"],
  },
  {
    id: 2,
    title: "보고서 작성",
    completed: true,
    priority: "medium",
    assignee: "이영희",
    dueDate: "2024-12-08",
    tags: ["업무"],
  },
  {
    id: 3,
    title: "코드 리뷰",
    completed: false,
    priority: "high",
    assignee: "김철수",
    dueDate: "2024-12-09",
    tags: ["개발", "긴급"],
  },
  {
    id: 4,
    title: "점심 약속",
    completed: true,
    priority: "low",
    assignee: "박민수",
    dueDate: "2024-12-08",
    tags: ["개인"],
  },
  {
    id: 5,
    title: "버그 수정",
    completed: false,
    priority: "high",
    assignee: "이영희",
    dueDate: "2024-12-07",
    tags: ["개발", "긴급"],
  },
  {
    id: 6,
    title: "문서 정리",
    completed: false,
    priority: "low",
    assignee: "박민수",
    dueDate: "2024-12-15",
    tags: ["업무"],
  },
  {
    id: 7,
    title: "테스트 작성",
    completed: true,
    priority: "medium",
    assignee: "김철수",
    dueDate: "2024-12-11",
    tags: ["개발"],
  },
  {
    id: 8,
    title: "배포 준비",
    completed: false,
    priority: "high",
    assignee: "이영희",
    dueDate: "2024-12-12",
    tags: ["개발", "긴급"],
  },
];

const users: User[] = [
  {
    id: 1,
    name: "김철수",
    age: 28,
    department: "개발팀",
    salary: 4500,
    isActive: true,
  },
  {
    id: 2,
    name: "이영희",
    age: 32,
    department: "개발팀",
    salary: 5200,
    isActive: true,
  },
  {
    id: 3,
    name: "박민수",
    age: 25,
    department: "디자인팀",
    salary: 3800,
    isActive: false,
  },
  {
    id: 4,
    name: "최지은",
    age: 30,
    department: "마케팅팀",
    salary: 4200,
    isActive: true,
  },
  {
    id: 5,
    name: "정대현",
    age: 35,
    department: "개발팀",
    salary: 6000,
    isActive: true,
  },
  {
    id: 6,
    name: "한소희",
    age: 27,
    department: "디자인팀",
    salary: 4000,
    isActive: true,
  },
  {
    id: 7,
    name: "오준혁",
    age: 29,
    department: "마케팅팀",
    salary: 4300,
    isActive: false,
  },
  {
    id: 8,
    name: "신미래",
    age: 24,
    department: "인사팀",
    salary: 3500,
    isActive: true,
  },
];

const products: Product[] = [
  {
    id: 1,
    name: "노트북",
    price: 1200000,
    category: "전자기기",
    stock: 15,
    rating: 4.5,
  },
  {
    id: 2,
    name: "마우스",
    price: 35000,
    category: "전자기기",
    stock: 100,
    rating: 4.2,
  },
  {
    id: 3,
    name: "키보드",
    price: 89000,
    category: "전자기기",
    stock: 50,
    rating: 4.7,
  },
  {
    id: 4,
    name: "모니터",
    price: 450000,
    category: "전자기기",
    stock: 20,
    rating: 4.3,
  },
  {
    id: 5,
    name: "책상",
    price: 250000,
    category: "가구",
    stock: 8,
    rating: 4.1,
  },
  {
    id: 6,
    name: "의자",
    price: 180000,
    category: "가구",
    stock: 12,
    rating: 4.6,
  },
  {
    id: 7,
    name: "노트",
    price: 3000,
    category: "문구",
    stock: 200,
    rating: 4.0,
  },
  { id: 8, name: "펜", price: 1500, category: "문구", stock: 500, rating: 3.9 },
  {
    id: 9,
    name: "책장",
    price: 320000,
    category: "가구",
    stock: 5,
    rating: 4.4,
  },
  {
    id: 10,
    name: "헤드폰",
    price: 280000,
    category: "전자기기",
    stock: 30,
    rating: 4.8,
  },
];

const orders: Order[] = [
  {
    id: 1,
    userId: 1,
    products: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
    ],
    totalPrice: 1270000,
    status: "delivered",
    orderDate: "2024-11-01",
  },
  {
    id: 2,
    userId: 2,
    products: [{ productId: 3, quantity: 1 }],
    totalPrice: 89000,
    status: "shipped",
    orderDate: "2024-11-15",
  },
  {
    id: 3,
    userId: 1,
    products: [
      { productId: 7, quantity: 5 },
      { productId: 8, quantity: 10 },
    ],
    totalPrice: 30000,
    status: "pending",
    orderDate: "2024-12-01",
  },
  {
    id: 4,
    userId: 3,
    products: [
      { productId: 5, quantity: 1 },
      { productId: 6, quantity: 2 },
    ],
    totalPrice: 610000,
    status: "delivered",
    orderDate: "2024-10-20",
  },
  {
    id: 5,
    userId: 4,
    products: [{ productId: 10, quantity: 1 }],
    totalPrice: 280000,
    status: "cancelled",
    orderDate: "2024-11-25",
  },
  {
    id: 6,
    userId: 2,
    products: [{ productId: 4, quantity: 2 }],
    totalPrice: 900000,
    status: "delivered",
    orderDate: "2024-09-15",
  },
];

const numbers: number[] = [
  5, 12, 8, 130, 44, 3, 17, 92, 23, 7, 56, 1, 89, 34, 21,
];

const strings: string[] = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];

// ============================================
// 🟢 기초 문제 (Basic)
// ============================================

// TODO 01: (기초) 모든 task의 title만 배열로 반환하시오.
// 예상 결과: ['회의 준비', '보고서 작성', '코드 리뷰', ...]
const answer01 = undefined;

console.log(tasks.map((task) => task.title));
// TODO 02: (기초) 완료된(completed: true) task만 필터링하시오.
// 예상 결과: completed가 true인 task 배열
const answer02 = undefined;

// TODO 03: (기초) 모든 user의 name을 배열로 반환하시오.
// 예상 결과: ['김철수', '이영희', '박민수', ...]
const answer03 = undefined;

// TODO 04: (기초) numbers 배열에서 10보다 큰 숫자만 필터링하시오.
// 예상 결과: [12, 130, 44, 17, 92, 23, 56, 89, 34, 21]
const answer04 = undefined;

// TODO 05: (기초) products 배열에서 가격이 100000원 이상인 상품만 필터링하시오.
const answer05 = undefined;

// TODO 06: (기초) users 배열에서 활성 사용자(isActive: true)만 필터링하시오.
const answer06 = undefined;

// TODO 07: (기초) tasks 배열에서 priority가 'high'인 task만 필터링하시오.
const answer07 = undefined;

// TODO 08: (기초) strings 배열의 모든 문자열을 대문자로 변환하시오.
// 예상 결과: ['APPLE', 'BANANA', 'CHERRY', ...]
const answer08 = undefined;

// TODO 09: (기초) numbers 배열의 모든 숫자에 2를 곱한 배열을 반환하시오.
// 예상 결과: [10, 24, 16, 260, ...]
const answer09 = undefined;

// TODO 10: (기초) products 배열에서 첫 번째 '전자기기' 카테고리 상품을 찾으시오.
const answer10 = undefined;

// TODO 11: (기초) users 배열에서 id가 5인 사용자를 찾으시오.
const answer11 = undefined;

// TODO 12: (기초) tasks 배열에서 '김철수'가 담당한 첫 번째 task를 찾으시오.
const answer12 = undefined;

// TODO 13: (기초) numbers 배열에서 짝수만 필터링하시오.
const answer13 = undefined;

// TODO 14: (기초) products 배열에서 재고(stock)가 20개 이하인 상품만 필터링하시오.
const answer14 = undefined;

// TODO 15: (기초) users 배열에서 나이가 30세 이상인 사용자만 필터링하시오.
const answer15 = undefined;

// TODO 16: (기초) tasks 배열에 완료된 task가 하나라도 있는지 확인하시오. (boolean 반환)
const answer16 = undefined;

// TODO 17: (기초) products 배열의 모든 상품 가격이 1000원 이상인지 확인하시오. (boolean 반환)
const answer17 = undefined;

// TODO 18: (기초) numbers 배열에 100보다 큰 숫자가 있는지 확인하시오. (boolean 반환)
const answer18 = undefined;

// TODO 19: (기초) strings 배열에서 'banana'가 포함되어 있는지 확인하시오. (boolean 반환)
const answer19 = undefined;

// TODO 20: (기초) products 배열에서 상품 이름(name)만 추출한 배열을 반환하시오.
const answer20 = undefined;

// ============================================
// 🟡 중간 문제 (Intermediate)
// ============================================

// TODO 21: (중간) numbers 배열의 모든 숫자 합계를 구하시오.
// 예상 결과: 542
const answer21 = undefined;

// TODO 22: (중간) users 배열에서 모든 사용자의 급여 합계를 구하시오.
const answer22 = undefined;

// TODO 23: (중간) products 배열에서 모든 상품의 평균 가격을 구하시오.
const answer23 = undefined;

// TODO 24: (중간) tasks 배열에서 완료되지 않은 task의 개수를 구하시오.
const answer24 = undefined;

// TODO 25: (중간) users 배열에서 개발팀(department: '개발팀') 직원들의 평균 급여를 구하시오.
const answer25 = undefined;

// TODO 26: (중간) products 배열에서 가장 비싼 상품을 찾으시오.
const answer26 = undefined;

// TODO 27: (중간) products 배열에서 가장 저렴한 상품을 찾으시오.
const answer27 = undefined;

// TODO 28: (중간) users 배열에서 가장 나이가 많은 사용자를 찾으시오.
const answer28 = undefined;

// TODO 29: (중간) numbers 배열에서 가장 큰 숫자를 찾으시오. (reduce 사용)
const answer29 = undefined;

// TODO 30: (중간) tasks 배열을 priority 기준으로 정렬하시오. (high > medium > low)
const answer30 = undefined;

// TODO 31: (중간) products 배열을 가격 기준 오름차순으로 정렬하시오.
const answer31 = undefined;

// TODO 32: (중간) users 배열을 나이 기준 내림차순으로 정렬하시오.
const answer32 = undefined;

// TODO 33: (중간) tasks 배열에서 각 담당자(assignee)별 task 개수를 객체로 반환하시오.
// 예상 결과: { '김철수': 3, '이영희': 3, '박민수': 2 }
const answer33 = undefined;

// TODO 34: (중간) products 배열에서 카테고리별 상품 개수를 객체로 반환하시오.
// 예상 결과: { '전자기기': 5, '가구': 3, '문구': 2 }
const answer34 = undefined;

// TODO 35: (중간) users 배열에서 부서별 직원 수를 객체로 반환하시오.
const answer35 = undefined;

// TODO 36: (중간) tasks 배열에서 '긴급' 태그가 포함된 task만 필터링하시오.
const answer36 = undefined;

// TODO 37: (중간) products 배열에서 rating이 4.5 이상인 상품의 이름만 배열로 반환하시오.
const answer37 = undefined;

// TODO 38: (중간) numbers 배열에서 중복을 제거하고 정렬된 배열을 반환하시오. (중복 데이터가 있다고 가정)
const numbersWithDuplicates = [5, 12, 8, 5, 12, 3, 8, 17, 3, 5];
const answer38 = undefined;

// TODO 39: (중간) tasks 배열에서 완료되지 않은 high priority task만 필터링하시오.
const answer39 = undefined;

// TODO 40: (중간) users 배열에서 활성 사용자 중 급여가 4000 이상인 사용자만 필터링하시오.
const answer40 = undefined;

// ============================================
// 🔴 심화 문제 (Advanced)
// ============================================

// TODO 41: (심화) tasks 배열을 담당자(assignee)별로 그룹화하시오.
// 예상 결과: { '김철수': [task1, task3, task7], '이영희': [...], ... }
const answer41 = undefined;

// TODO 42: (심화) products 배열을 카테고리별로 그룹화하시오.
const answer42 = undefined;

// TODO 43: (심화) users 배열을 부서별로 그룹화하고, 각 부서의 평균 급여를 계산하시오.
// 예상 결과: { '개발팀': 5233.33, '디자인팀': 3900, ... }
const answer43 = undefined;

// TODO 44: (심화) orders 배열에서 각 사용자별 총 주문 금액을 계산하시오.
// 예상 결과: { 1: 1300000, 2: 989000, ... }
const answer44 = undefined;

// TODO 45: (심화) tasks 배열에서 사용된 모든 고유한 태그를 추출하시오.
// 예상 결과: ['업무', '긴급', '개발', '개인']
const answer45 = undefined;

// TODO 46: (심화) products 배열에서 카테고리별 평균 가격을 계산하시오.
// 예상 결과: { '전자기기': 410800, '가구': 250000, '문구': 2250 }
const answer46 = undefined;

// TODO 47: (심화) orders 배열과 users 배열을 조인하여 주문 정보에 사용자 이름을 추가하시오.
// 예상 결과: orders 배열에 userName 필드 추가
const answer47 = undefined;

// TODO 48: (심화) tasks 배열을 dueDate 기준으로 정렬하고, 오늘 이후의 task만 필터링하시오.
const today = "2024-12-08";
const answer48 = undefined;

// TODO 49: (심화) products 배열에서 재고 가치(price * stock)가 가장 높은 상품 3개를 찾으시오.
const answer49 = undefined;

// TODO 50: (심화) users 배열에서 각 부서별로 가장 급여가 높은 직원을 찾으시오.
// 예상 결과: { '개발팀': {name: '정대현', ...}, '디자인팀': {...}, ... }
const answer50 = undefined;

// TODO 51: (심화) numbers 배열을 3개씩 묶어서 2차원 배열로 만드시오.
// 예상 결과: [[5, 12, 8], [130, 44, 3], [17, 92, 23], ...]
const answer51 = undefined;

// TODO 52: (심화) tasks 배열에서 priority별 완료율을 계산하시오.
// 예상 결과: { high: 0, medium: 50, low: 50 } (백분율)
const answer52 = undefined;

// TODO 53: (심화) products 배열을 rating 기준 내림차순으로 정렬하고, 상위 5개 상품의 id와 name만 추출하시오.
const answer53 = undefined;

// TODO 54: (심화) orders 배열에서 'delivered' 상태인 주문의 총 매출을 계산하시오.
const answer54 = undefined;

// TODO 55: (심화) users 배열과 tasks 배열을 사용하여, 각 사용자가 담당한 task 개수를 포함한 새 배열을 만드시오.
// 예상 결과: [{...user, taskCount: 3}, ...]
const answer55 = undefined;

// TODO 56: (심화) products 배열에서 카테고리별로 가장 평점이 높은 상품을 찾으시오.
const answer56 = undefined;

// TODO 57: (심화) tasks 배열을 완료 여부와 priority로 이중 그룹화하시오.
// 예상 결과: { completed: { high: [], medium: [], low: [] }, incomplete: { high: [], medium: [], low: [] } }
const answer57 = undefined;

// TODO 58: (심화) orders 배열에서 월별 주문 수를 계산하시오.
// 예상 결과: { '2024-09': 1, '2024-10': 1, '2024-11': 3, '2024-12': 1 }
const answer58 = undefined;

// TODO 59: (심화) products 배열의 상품들을 가격 구간별로 분류하시오.
// 구간: 저가(10000 미만), 중가(10000~100000), 고가(100000 초과)
// 예상 결과: { 저가: [...], 중가: [...], 고가: [...] }
const answer59 = undefined;

// TODO 60: (심화) 두 배열의 교집합을 구하시오.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [5, 6, 7, 8, 9, 10, 11, 12];
// 예상 결과: [5, 6, 7, 8]
const answer60 = undefined;

// ============================================
// 🔥 실전 응용 문제 (Practical)
// ============================================

// TODO 61: (실전) 검색 기능 구현 - products에서 이름이나 카테고리에 검색어가 포함된 상품 찾기
const searchKeyword = "노트";
const answer61 = undefined;

// TODO 62: (실전) 페이지네이션 구현 - products를 페이지당 3개씩 나누어 2페이지 데이터 반환
const pageSize = 3;
const pageNumber = 2;
const answer62 = undefined;

// TODO 63: (실전) 다중 필터 구현 - products에서 category가 '전자기기'이고, price가 100000 이상이며, rating이 4.3 이상인 상품
const answer63 = undefined;

// TODO 64: (실전) 정렬 + 필터 조합 - 활성 사용자만 급여 내림차순으로 정렬
const answer64 = undefined;

// TODO 65: (실전) 데이터 변환 - tasks를 React select 컴포넌트용 옵션 형식으로 변환
// 예상 결과: [{ value: 1, label: '회의 준비' }, ...]
const answer65 = undefined;

// TODO 66: (실전) 통계 대시보드 데이터 생성 - tasks의 상태별 개수와 백분율 계산
// 예상 결과: { total: 8, completed: 3, incomplete: 5, completionRate: 37.5 }
const answer66 = undefined;

// TODO 67: (실전) 트리 구조 평탄화 - 중첩된 카테고리를 1차원 배열로 변환
const nestedCategories = [
  {
    id: 1,
    name: "전자기기",
    children: [
      {
        id: 2,
        name: "컴퓨터",
        children: [
          { id: 3, name: "노트북" },
          { id: 4, name: "데스크탑" },
        ],
      },
      { id: 5, name: "모바일" },
    ],
  },
  { id: 6, name: "가구", children: [{ id: 7, name: "의자" }] },
];
// 예상 결과: [{ id: 1, name: '전자기기' }, { id: 2, name: '컴퓨터' }, ...]
const answer67 = undefined;

// TODO 68: (실전) 배열 diff 구현 - 두 배열의 차집합 구하기 (arr1에만 있는 요소)
const oldItems = [1, 2, 3, 4, 5];
const newItems = [3, 4, 5, 6, 7];
// 예상 결과: [1, 2] (oldItems에만 있는 것)
const answer68 = undefined;

// TODO 69: (실전) 연속된 숫자 그룹 찾기 - 연속된 숫자들을 범위로 표현
const consecutiveNumbers = [1, 2, 3, 5, 6, 8, 10, 11, 12, 13];
// 예상 결과: ['1-3', '5-6', '8', '10-13']
const answer69 = undefined;

// TODO 70: (실전) 가장 많이 주문된 상품 찾기 - orders 데이터에서 가장 많이 주문된 productId 찾기
const answer70 = undefined;

// ============================================
// 📝 보너스 문제 (TypeScript 특화)
// ============================================

// TODO 71: (보너스) 제네릭 함수 구현 - 배열에서 특정 키의 값만 추출하는 함수
// pluck(users, 'name') => ['김철수', '이영희', ...]
function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
  // 구현하시오
  return [];
}
const answer71 = pluck(users, "name");

// TODO 72: (보너스) 타입 가드와 필터 - null/undefined를 제외한 값만 필터링
const mixedArray: (string | null | undefined)[] = [
  "a",
  null,
  "b",
  undefined,
  "c",
  null,
];
// 예상 결과: ['a', 'b', 'c'] (타입도 string[]이어야 함)
const answer72 = undefined;

// TODO 73: (보너스) 유니온 타입 배열 필터링 - 특정 타입만 추출
type Item = { type: "book"; title: string } | { type: "movie"; name: string };
const items: Item[] = [
  { type: "book", title: "해리포터" },
  { type: "movie", name: "인셉션" },
  { type: "book", title: "반지의 제왕" },
  { type: "movie", name: "매트릭스" },
];
// 책만 필터링 (타입이 { type: 'book'; title: string }[]이어야 함)
const answer73 = undefined;

// TODO 74: (보너스) 객체 배열을 Map으로 변환 - id를 키로 하는 Map 생성
// 예상 결과: Map { 1 => {...user}, 2 => {...user}, ... }
const answer74 = undefined;

// TODO 75: (보너스) 배열을 객체로 변환 (Record 타입) - id를 키로 하는 객체 생성
// 예상 결과: { 1: {...user}, 2: {...user}, ... }
const answer75: Record<number, User> = {};

// ============================================
// 🧪 테스트용 출력 (필요시 주석 해제)
// ============================================

// console.log('Answer 01:', answer01);
// console.log('Answer 21:', answer21);
// console.log('Answer 41:', answer41);

export {};
