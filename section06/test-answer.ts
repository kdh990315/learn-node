// ============================================
// 🎯 배열(Array) 코딩테스트 정답집
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
  { id: 1, title: "회의 준비", completed: false, priority: "high", assignee: "김철수", dueDate: "2024-12-10", tags: ["업무", "긴급"] },
  { id: 2, title: "보고서 작성", completed: true, priority: "medium", assignee: "이영희", dueDate: "2024-12-08", tags: ["업무"] },
  { id: 3, title: "코드 리뷰", completed: false, priority: "high", assignee: "김철수", dueDate: "2024-12-09", tags: ["개발", "긴급"] },
  { id: 4, title: "점심 약속", completed: true, priority: "low", assignee: "박민수", dueDate: "2024-12-08", tags: ["개인"] },
  { id: 5, title: "버그 수정", completed: false, priority: "high", assignee: "이영희", dueDate: "2024-12-07", tags: ["개발", "긴급"] },
  { id: 6, title: "문서 정리", completed: false, priority: "low", assignee: "박민수", dueDate: "2024-12-15", tags: ["업무"] },
  { id: 7, title: "테스트 작성", completed: true, priority: "medium", assignee: "김철수", dueDate: "2024-12-11", tags: ["개발"] },
  { id: 8, title: "배포 준비", completed: false, priority: "high", assignee: "이영희", dueDate: "2024-12-12", tags: ["개발", "긴급"] },
];

const users: User[] = [
  { id: 1, name: "김철수", age: 28, department: "개발팀", salary: 4500, isActive: true },
  { id: 2, name: "이영희", age: 32, department: "개발팀", salary: 5200, isActive: true },
  { id: 3, name: "박민수", age: 25, department: "디자인팀", salary: 3800, isActive: false },
  { id: 4, name: "최지은", age: 30, department: "마케팅팀", salary: 4200, isActive: true },
  { id: 5, name: "정대현", age: 35, department: "개발팀", salary: 6000, isActive: true },
  { id: 6, name: "한소희", age: 27, department: "디자인팀", salary: 4000, isActive: true },
  { id: 7, name: "오준혁", age: 29, department: "마케팅팀", salary: 4300, isActive: false },
  { id: 8, name: "신미래", age: 24, department: "인사팀", salary: 3500, isActive: true },
];

const products: Product[] = [
  { id: 1, name: "노트북", price: 1200000, category: "전자기기", stock: 15, rating: 4.5 },
  { id: 2, name: "마우스", price: 35000, category: "전자기기", stock: 100, rating: 4.2 },
  { id: 3, name: "키보드", price: 89000, category: "전자기기", stock: 50, rating: 4.7 },
  { id: 4, name: "모니터", price: 450000, category: "전자기기", stock: 20, rating: 4.3 },
  { id: 5, name: "책상", price: 250000, category: "가구", stock: 8, rating: 4.1 },
  { id: 6, name: "의자", price: 180000, category: "가구", stock: 12, rating: 4.6 },
  { id: 7, name: "노트", price: 3000, category: "문구", stock: 200, rating: 4.0 },
  { id: 8, name: "펜", price: 1500, category: "문구", stock: 500, rating: 3.9 },
  { id: 9, name: "책장", price: 320000, category: "가구", stock: 5, rating: 4.4 },
  { id: 10, name: "헤드폰", price: 280000, category: "전자기기", stock: 30, rating: 4.8 },
];

const orders: Order[] = [
  { id: 1, userId: 1, products: [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 2 }], totalPrice: 1270000, status: "delivered", orderDate: "2024-11-01" },
  { id: 2, userId: 2, products: [{ productId: 3, quantity: 1 }], totalPrice: 89000, status: "shipped", orderDate: "2024-11-15" },
  { id: 3, userId: 1, products: [{ productId: 7, quantity: 5 }, { productId: 8, quantity: 10 }], totalPrice: 30000, status: "pending", orderDate: "2024-12-01" },
  { id: 4, userId: 3, products: [{ productId: 5, quantity: 1 }, { productId: 6, quantity: 2 }], totalPrice: 610000, status: "delivered", orderDate: "2024-10-20" },
  { id: 5, userId: 4, products: [{ productId: 10, quantity: 1 }], totalPrice: 280000, status: "cancelled", orderDate: "2024-11-25" },
  { id: 6, userId: 2, products: [{ productId: 4, quantity: 2 }], totalPrice: 900000, status: "delivered", orderDate: "2024-09-15" },
];

const numbers: number[] = [5, 12, 8, 130, 44, 3, 17, 92, 23, 7, 56, 1, 89, 34, 21];

const strings: string[] = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

// ============================================
// 🟢 기초 문제 정답 (Basic)
// ============================================

// TODO 01: (기초) 모든 task의 title만 배열로 반환하시오.
const answer01 = tasks.map((task) => task.title);
// 결과: ['회의 준비', '보고서 작성', '코드 리뷰', '점심 약속', '버그 수정', '문서 정리', '테스트 작성', '배포 준비']

// TODO 02: (기초) 완료된(completed: true) task만 필터링하시오.
const answer02 = tasks.filter((task) => task.completed);
// 결과: completed가 true인 task 3개

// TODO 03: (기초) 모든 user의 name을 배열로 반환하시오.
const answer03 = users.map((user) => user.name);
// 결과: ['김철수', '이영희', '박민수', '최지은', '정대현', '한소희', '오준혁', '신미래']

// TODO 04: (기초) numbers 배열에서 10보다 큰 숫자만 필터링하시오.
const answer04 = numbers.filter((num) => num > 10);
// 결과: [12, 130, 44, 17, 92, 23, 56, 89, 34, 21]

// TODO 05: (기초) products 배열에서 가격이 100000원 이상인 상품만 필터링하시오.
const answer05 = products.filter((product) => product.price >= 100000);
// 결과: 노트북, 모니터, 책상, 의자, 책장, 헤드폰

// TODO 06: (기초) users 배열에서 활성 사용자(isActive: true)만 필터링하시오.
const answer06 = users.filter((user) => user.isActive);
// 결과: isActive가 true인 user 6명

// TODO 07: (기초) tasks 배열에서 priority가 'high'인 task만 필터링하시오.
const answer07 = tasks.filter((task) => task.priority === "high");
// 결과: priority가 'high'인 task 4개

// TODO 08: (기초) strings 배열의 모든 문자열을 대문자로 변환하시오.
const answer08 = strings.map((str) => str.toUpperCase());
// 결과: ['APPLE', 'BANANA', 'CHERRY', 'DATE', 'ELDERBERRY', 'FIG', 'GRAPE']

// TODO 09: (기초) numbers 배열의 모든 숫자에 2를 곱한 배열을 반환하시오.
const answer09 = numbers.map((num) => num * 2);
// 결과: [10, 24, 16, 260, 88, 6, 34, 184, 46, 14, 112, 2, 178, 68, 42]

// TODO 10: (기초) products 배열에서 첫 번째 '전자기기' 카테고리 상품을 찾으시오.
const answer10 = products.find((product) => product.category === "전자기기");
// 결과: { id: 1, name: '노트북', ... }

// TODO 11: (기초) users 배열에서 id가 5인 사용자를 찾으시오.
const answer11 = users.find((user) => user.id === 5);
// 결과: { id: 5, name: '정대현', ... }

// TODO 12: (기초) tasks 배열에서 '김철수'가 담당한 첫 번째 task를 찾으시오.
const answer12 = tasks.find((task) => task.assignee === "김철수");
// 결과: { id: 1, title: '회의 준비', ... }

// TODO 13: (기초) numbers 배열에서 짝수만 필터링하시오.
const answer13 = numbers.filter((num) => num % 2 === 0);
// 결과: [12, 8, 130, 44, 92, 56, 34]

// TODO 14: (기초) products 배열에서 재고(stock)가 20개 이하인 상품만 필터링하시오.
const answer14 = products.filter((product) => product.stock <= 20);
// 결과: 노트북(15), 모니터(20), 책상(8), 의자(12), 책장(5)

// TODO 15: (기초) users 배열에서 나이가 30세 이상인 사용자만 필터링하시오.
const answer15 = users.filter((user) => user.age >= 30);
// 결과: 이영희(32), 최지은(30), 정대현(35)

// TODO 16: (기초) tasks 배열에 완료된 task가 하나라도 있는지 확인하시오.
const answer16 = tasks.some((task) => task.completed);
// 결과: true

// TODO 17: (기초) products 배열의 모든 상품 가격이 1000원 이상인지 확인하시오.
const answer17 = products.every((product) => product.price >= 1000);
// 결과: true

// TODO 18: (기초) numbers 배열에 100보다 큰 숫자가 있는지 확인하시오.
const answer18 = numbers.some((num) => num > 100);
// 결과: true (130이 있음)

// TODO 19: (기초) strings 배열에서 'banana'가 포함되어 있는지 확인하시오.
const answer19 = strings.includes("banana");
// 결과: true

// TODO 20: (기초) products 배열에서 상품 이름(name)만 추출한 배열을 반환하시오.
const answer20 = products.map((product) => product.name);
// 결과: ['노트북', '마우스', '키보드', '모니터', '책상', '의자', '노트', '펜', '책장', '헤드폰']


// ============================================
// 🟡 중간 문제 정답 (Intermediate)
// ============================================

// TODO 21: (중간) numbers 배열의 모든 숫자 합계를 구하시오.
const answer21 = numbers.reduce((sum, num) => sum + num, 0);
// 결과: 542

// TODO 22: (중간) users 배열에서 모든 사용자의 급여 합계를 구하시오.
const answer22 = users.reduce((sum, user) => sum + user.salary, 0);
// 결과: 35500

// TODO 23: (중간) products 배열에서 모든 상품의 평균 가격을 구하시오.
const answer23 = products.reduce((sum, p) => sum + p.price, 0) / products.length;
// 결과: 280950

// TODO 24: (중간) tasks 배열에서 완료되지 않은 task의 개수를 구하시오.
const answer24 = tasks.filter((task) => !task.completed).length;
// 결과: 5

// TODO 25: (중간) users 배열에서 개발팀(department: '개발팀') 직원들의 평균 급여를 구하시오.
const answer25 = (() => {
  const devUsers = users.filter((user) => user.department === "개발팀");
  return devUsers.reduce((sum, user) => sum + user.salary, 0) / devUsers.length;
})();
// 결과: 5233.33...

// TODO 26: (중간) products 배열에서 가장 비싼 상품을 찾으시오.
const answer26 = products.reduce((max, product) => 
  product.price > max.price ? product : max
);
// 결과: { id: 1, name: '노트북', price: 1200000, ... }

// TODO 27: (중간) products 배열에서 가장 저렴한 상품을 찾으시오.
const answer27 = products.reduce((min, product) => 
  product.price < min.price ? product : min
);
// 결과: { id: 8, name: '펜', price: 1500, ... }

// TODO 28: (중간) users 배열에서 가장 나이가 많은 사용자를 찾으시오.
const answer28 = users.reduce((oldest, user) => 
  user.age > oldest.age ? user : oldest
);
// 결과: { id: 5, name: '정대현', age: 35, ... }

// TODO 29: (중간) numbers 배열에서 가장 큰 숫자를 찾으시오. (reduce 사용)
const answer29 = numbers.reduce((max, num) => Math.max(max, num), numbers[0]);
// 결과: 130

// TODO 30: (중간) tasks 배열을 priority 기준으로 정렬하시오. (high > medium > low)
const answer30 = [...tasks].sort((a, b) => {
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  return priorityOrder[a.priority] - priorityOrder[b.priority];
});

// TODO 31: (중간) products 배열을 가격 기준 오름차순으로 정렬하시오.
const answer31 = [...products].sort((a, b) => a.price - b.price);

// TODO 32: (중간) users 배열을 나이 기준 내림차순으로 정렬하시오.
const answer32 = [...users].sort((a, b) => b.age - a.age);

// TODO 33: (중간) tasks 배열에서 각 담당자(assignee)별 task 개수를 객체로 반환하시오.
const answer33 = tasks.reduce((acc, task) => {
  acc[task.assignee] = (acc[task.assignee] || 0) + 1;
  return acc;
}, {} as Record<string, number>);
// 결과: { '김철수': 3, '이영희': 3, '박민수': 2 }

// TODO 34: (중간) products 배열에서 카테고리별 상품 개수를 객체로 반환하시오.
const answer34 = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {} as Record<string, number>);
// 결과: { '전자기기': 5, '가구': 3, '문구': 2 }

// TODO 35: (중간) users 배열에서 부서별 직원 수를 객체로 반환하시오.
const answer35 = users.reduce((acc, user) => {
  acc[user.department] = (acc[user.department] || 0) + 1;
  return acc;
}, {} as Record<string, number>);
// 결과: { '개발팀': 3, '디자인팀': 2, '마케팅팀': 2, '인사팀': 1 }

// TODO 36: (중간) tasks 배열에서 '긴급' 태그가 포함된 task만 필터링하시오.
const answer36 = tasks.filter((task) => task.tags.includes("긴급"));
// 결과: 회의 준비, 코드 리뷰, 버그 수정, 배포 준비

// TODO 37: (중간) products 배열에서 rating이 4.5 이상인 상품의 이름만 배열로 반환하시오.
const answer37 = products
  .filter((product) => product.rating >= 4.5)
  .map((product) => product.name);
// 결과: ['노트북', '키보드', '의자', '헤드폰']

// TODO 38: (중간) numbers 배열에서 중복을 제거하고 정렬된 배열을 반환하시오.
const numbersWithDuplicates = [5, 12, 8, 5, 12, 3, 8, 17, 3, 5];
const answer38 = [...new Set(numbersWithDuplicates)].sort((a, b) => a - b);
// 결과: [3, 5, 8, 12, 17]

// TODO 39: (중간) tasks 배열에서 완료되지 않은 high priority task만 필터링하시오.
const answer39 = tasks.filter((task) => !task.completed && task.priority === "high");
// 결과: 회의 준비, 코드 리뷰, 버그 수정, 배포 준비

// TODO 40: (중간) users 배열에서 활성 사용자 중 급여가 4000 이상인 사용자만 필터링하시오.
const answer40 = users.filter((user) => user.isActive && user.salary >= 4000);
// 결과: 김철수, 이영희, 최지은, 정대현, 한소희


// ============================================
// 🔴 심화 문제 정답 (Advanced)
// ============================================

// TODO 41: (심화) tasks 배열을 담당자(assignee)별로 그룹화하시오.
const answer41 = tasks.reduce((acc, task) => {
  if (!acc[task.assignee]) {
    acc[task.assignee] = [];
  }
  acc[task.assignee].push(task);
  return acc;
}, {} as Record<string, Task[]>);

// TODO 42: (심화) products 배열을 카테고리별로 그룹화하시오.
const answer42 = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {} as Record<string, Product[]>);

// TODO 43: (심화) users 배열을 부서별로 그룹화하고, 각 부서의 평균 급여를 계산하시오.
const answer43 = (() => {
  const grouped = users.reduce((acc, user) => {
    if (!acc[user.department]) {
      acc[user.department] = [];
    }
    acc[user.department].push(user);
    return acc;
  }, {} as Record<string, User[]>);

  return Object.entries(grouped).reduce((acc, [dept, users]) => {
    acc[dept] = users.reduce((sum, u) => sum + u.salary, 0) / users.length;
    return acc;
  }, {} as Record<string, number>);
})();
// 결과: { '개발팀': 5233.33, '디자인팀': 3900, '마케팅팀': 4250, '인사팀': 3500 }

// TODO 44: (심화) orders 배열에서 각 사용자별 총 주문 금액을 계산하시오.
const answer44 = orders.reduce((acc, order) => {
  acc[order.userId] = (acc[order.userId] || 0) + order.totalPrice;
  return acc;
}, {} as Record<number, number>);
// 결과: { 1: 1300000, 2: 989000, 3: 610000, 4: 280000 }

// TODO 45: (심화) tasks 배열에서 사용된 모든 고유한 태그를 추출하시오.
const answer45 = [...new Set(tasks.flatMap((task) => task.tags))];
// 결과: ['업무', '긴급', '개발', '개인']

// TODO 46: (심화) products 배열에서 카테고리별 평균 가격을 계산하시오.
const answer46 = (() => {
  const grouped = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return Object.entries(grouped).reduce((acc, [category, products]) => {
    acc[category] = products.reduce((sum, p) => sum + p.price, 0) / products.length;
    return acc;
  }, {} as Record<string, number>);
})();
// 결과: { '전자기기': 410800, '가구': 250000, '문구': 2250 }

// TODO 47: (심화) orders 배열과 users 배열을 조인하여 주문 정보에 사용자 이름을 추가하시오.
const answer47 = orders.map((order) => ({
  ...order,
  userName: users.find((user) => user.id === order.userId)?.name || "Unknown",
}));

// TODO 48: (심화) tasks 배열을 dueDate 기준으로 정렬하고, 오늘 이후의 task만 필터링하시오.
const today = "2024-12-08";
const answer48 = tasks
  .filter((task) => task.dueDate > today)
  .sort((a, b) => a.dueDate.localeCompare(b.dueDate));

// TODO 49: (심화) products 배열에서 재고 가치(price * stock)가 가장 높은 상품 3개를 찾으시오.
const answer49 = [...products]
  .sort((a, b) => b.price * b.stock - a.price * a.stock)
  .slice(0, 3);

// TODO 50: (심화) users 배열에서 각 부서별로 가장 급여가 높은 직원을 찾으시오.
const answer50 = users.reduce((acc, user) => {
  if (!acc[user.department] || user.salary > acc[user.department].salary) {
    acc[user.department] = user;
  }
  return acc;
}, {} as Record<string, User>);

// TODO 51: (심화) numbers 배열을 3개씩 묶어서 2차원 배열로 만드시오.
const answer51 = numbers.reduce((acc, num, index) => {
  const chunkIndex = Math.floor(index / 3);
  if (!acc[chunkIndex]) {
    acc[chunkIndex] = [];
  }
  acc[chunkIndex].push(num);
  return acc;
}, [] as number[][]);
// 결과: [[5, 12, 8], [130, 44, 3], [17, 92, 23], [7, 56, 1], [89, 34, 21]]

// TODO 52: (심화) tasks 배열에서 priority별 완료율을 계산하시오.
const answer52 = (() => {
  const grouped = tasks.reduce((acc, task) => {
    if (!acc[task.priority]) {
      acc[task.priority] = { total: 0, completed: 0 };
    }
    acc[task.priority].total++;
    if (task.completed) acc[task.priority].completed++;
    return acc;
  }, {} as Record<string, { total: number; completed: number }>);

  return Object.entries(grouped).reduce((acc, [priority, stats]) => {
    acc[priority] = (stats.completed / stats.total) * 100;
    return acc;
  }, {} as Record<string, number>);
})();
// 결과: { high: 0, medium: 50, low: 50 }

// TODO 53: (심화) products 배열을 rating 기준 내림차순으로 정렬하고, 상위 5개 상품의 id와 name만 추출하시오.
const answer53 = [...products]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 5)
  .map(({ id, name }) => ({ id, name }));

// TODO 54: (심화) orders 배열에서 'delivered' 상태인 주문의 총 매출을 계산하시오.
const answer54 = orders
  .filter((order) => order.status === "delivered")
  .reduce((sum, order) => sum + order.totalPrice, 0);
// 결과: 2780000

// TODO 55: (심화) users 배열과 tasks 배열을 사용하여, 각 사용자가 담당한 task 개수를 포함한 새 배열을 만드시오.
const answer55 = users.map((user) => ({
  ...user,
  taskCount: tasks.filter((task) => task.assignee === user.name).length,
}));

// TODO 56: (심화) products 배열에서 카테고리별로 가장 평점이 높은 상품을 찾으시오.
const answer56 = products.reduce((acc, product) => {
  if (!acc[product.category] || product.rating > acc[product.category].rating) {
    acc[product.category] = product;
  }
  return acc;
}, {} as Record<string, Product>);

// TODO 57: (심화) tasks 배열을 완료 여부와 priority로 이중 그룹화하시오.
const answer57 = tasks.reduce(
  (acc, task) => {
    const status = task.completed ? "completed" : "incomplete";
    if (!acc[status][task.priority]) {
      acc[status][task.priority] = [];
    }
    acc[status][task.priority].push(task);
    return acc;
  },
  {
    completed: {} as Record<string, Task[]>,
    incomplete: {} as Record<string, Task[]>,
  }
);

// TODO 58: (심화) orders 배열에서 월별 주문 수를 계산하시오.
const answer58 = orders.reduce((acc, order) => {
  const month = order.orderDate.slice(0, 7); // '2024-11'
  acc[month] = (acc[month] || 0) + 1;
  return acc;
}, {} as Record<string, number>);
// 결과: { '2024-09': 1, '2024-10': 1, '2024-11': 3, '2024-12': 1 }

// TODO 59: (심화) products 배열의 상품들을 가격 구간별로 분류하시오.
const answer59 = products.reduce(
  (acc, product) => {
    if (product.price < 10000) {
      acc["저가"].push(product);
    } else if (product.price <= 100000) {
      acc["중가"].push(product);
    } else {
      acc["고가"].push(product);
    }
    return acc;
  },
  { 저가: [] as Product[], 중가: [] as Product[], 고가: [] as Product[] }
);

// TODO 60: (심화) 두 배열의 교집합을 구하시오.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [5, 6, 7, 8, 9, 10, 11, 12];
const answer60 = arr1.filter((item) => arr2.includes(item));
// 결과: [5, 6, 7, 8]


// ============================================
// 🔥 실전 응용 문제 정답 (Practical)
// ============================================

// TODO 61: (실전) 검색 기능 구현 - products에서 이름이나 카테고리에 검색어가 포함된 상품 찾기
const searchKeyword = "노트";
const answer61 = products.filter(
  (product) =>
    product.name.includes(searchKeyword) ||
    product.category.includes(searchKeyword)
);
// 결과: 노트북, 노트

// TODO 62: (실전) 페이지네이션 구현 - products를 페이지당 3개씩 나누어 2페이지 데이터 반환
const pageSize = 3;
const pageNumber = 2;
const answer62 = products.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
// 결과: [모니터, 책상, 의자] (인덱스 3, 4, 5)

// TODO 63: (실전) 다중 필터 구현 - products에서 category가 '전자기기'이고, price가 100000 이상이며, rating이 4.3 이상인 상품
const answer63 = products.filter(
  (product) =>
    product.category === "전자기기" &&
    product.price >= 100000 &&
    product.rating >= 4.3
);
// 결과: 노트북, 모니터, 헤드폰

// TODO 64: (실전) 정렬 + 필터 조합 - 활성 사용자만 급여 내림차순으로 정렬
const answer64 = users
  .filter((user) => user.isActive)
  .sort((a, b) => b.salary - a.salary);

// TODO 65: (실전) 데이터 변환 - tasks를 React select 컴포넌트용 옵션 형식으로 변환
const answer65 = tasks.map((task) => ({
  value: task.id,
  label: task.title,
}));
// 결과: [{ value: 1, label: '회의 준비' }, ...]

// TODO 66: (실전) 통계 대시보드 데이터 생성 - tasks의 상태별 개수와 백분율 계산
const answer66 = (() => {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const incomplete = total - completed;
  return {
    total,
    completed,
    incomplete,
    completionRate: (completed / total) * 100,
  };
})();
// 결과: { total: 8, completed: 3, incomplete: 5, completionRate: 37.5 }

// TODO 67: (실전) 트리 구조 평탄화 - 중첩된 카테고리를 1차원 배열로 변환
interface Category {
  id: number;
  name: string;
  children?: Category[];
}
const nestedCategories: Category[] = [
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

const answer67 = (() => {
  const flatten = (categories: Category[]): { id: number; name: string }[] => {
    return categories.reduce((acc, category) => {
      acc.push({ id: category.id, name: category.name });
      if (category.children) {
        acc.push(...flatten(category.children));
      }
      return acc;
    }, [] as { id: number; name: string }[]);
  };
  return flatten(nestedCategories);
})();
// 결과: [{ id: 1, name: '전자기기' }, { id: 2, name: '컴퓨터' }, ...]

// TODO 68: (실전) 배열 diff 구현 - 두 배열의 차집합 구하기 (arr1에만 있는 요소)
const oldItems = [1, 2, 3, 4, 5];
const newItems = [3, 4, 5, 6, 7];
const answer68 = oldItems.filter((item) => !newItems.includes(item));
// 결과: [1, 2]

// TODO 69: (실전) 연속된 숫자 그룹 찾기 - 연속된 숫자들을 범위로 표현
const consecutiveNumbers = [1, 2, 3, 5, 6, 8, 10, 11, 12, 13];
const answer69 = (() => {
  const result: string[] = [];
  let start = consecutiveNumbers[0];
  let end = consecutiveNumbers[0];

  for (let i = 1; i <= consecutiveNumbers.length; i++) {
    if (consecutiveNumbers[i] === end + 1) {
      end = consecutiveNumbers[i];
    } else {
      result.push(start === end ? `${start}` : `${start}-${end}`);
      start = consecutiveNumbers[i];
      end = consecutiveNumbers[i];
    }
  }
  return result;
})();
// 결과: ['1-3', '5-6', '8', '10-13']

// TODO 70: (실전) 가장 많이 주문된 상품 찾기 - orders 데이터에서 가장 많이 주문된 productId 찾기
const answer70 = (() => {
  const productCounts = orders.flatMap((order) => order.products).reduce(
    (acc, item) => {
      acc[item.productId] = (acc[item.productId] || 0) + item.quantity;
      return acc;
    },
    {} as Record<number, number>
  );

  return Object.entries(productCounts).reduce((max, [productId, count]) =>
    count > max.count ? { productId: Number(productId), count } : max
  , { productId: 0, count: 0 });
})();
// 결과: { productId: 8, count: 10 } (펜)


// ============================================
// 📝 보너스 문제 정답 (TypeScript 특화)
// ============================================

// TODO 71: (보너스) 제네릭 함수 구현 - 배열에서 특정 키의 값만 추출하는 함수
function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key]);
}
const answer71 = pluck(users, "name");
// 결과: ['김철수', '이영희', '박민수', ...]

// TODO 72: (보너스) 타입 가드와 필터 - null/undefined를 제외한 값만 필터링
const mixedArray: (string | null | undefined)[] = ["a", null, "b", undefined, "c", null];
const answer72 = mixedArray.filter((item): item is string => item != null);
// 결과: ['a', 'b', 'c'] (타입: string[])

// TODO 73: (보너스) 유니온 타입 배열 필터링 - 특정 타입만 추출
type Item = { type: "book"; title: string } | { type: "movie"; name: string };
const items: Item[] = [
  { type: "book", title: "해리포터" },
  { type: "movie", name: "인셉션" },
  { type: "book", title: "반지의 제왕" },
  { type: "movie", name: "매트릭스" },
];
const answer73 = items.filter(
  (item): item is { type: "book"; title: string } => item.type === "book"
);
// 결과: [{ type: 'book', title: '해리포터' }, { type: 'book', title: '반지의 제왕' }]

// TODO 74: (보너스) 객체 배열을 Map으로 변환 - id를 키로 하는 Map 생성
const answer74 = new Map(users.map((user) => [user.id, user]));
// 결과: Map { 1 => {...}, 2 => {...}, ... }

// TODO 75: (보너스) 배열을 객체로 변환 (Record 타입) - id를 키로 하는 객체 생성
const answer75: Record<number, User> = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {} as Record<number, User>);
// 결과: { 1: {...user}, 2: {...user}, ... }


// ============================================
// 🧪 테스트용 출력
// ============================================

console.log("=== 기초 문제 결과 ===");
console.log("01:", answer01);
console.log("02:", answer02.length, "개");
console.log("21:", answer21);
console.log("33:", answer33);
console.log("41:", Object.keys(answer41));
console.log("45:", answer45);
console.log("66:", answer66);

export {};

