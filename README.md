# Hướng dẫn sử dụng dự án React + TypeScript + Vite

## Yêu cầu môi trường

- Node.js >= 18.x
- npm >= 9.x hoặc yarn/pnpm

## Cài đặt

Clone repo về máy:

```bash
git clone <repo-url>
cd <tên-thư-mục-dự-án>
```

Cài đặt dependencies:

```bash
npm install
# hoặc:
yarn install
# hoặc:
pnpm install
```

## Chạy dự án ở môi trường phát triển

```bash
npm run dev
# hoặc:
yarn dev
# hoặc:
pnpm dev
```

Sau khi chạy, truy cập vào `http://localhost:5173` (hoặc port mà Vite thông báo trên terminal).

## Build dự án cho production

```bash
npm run build
# hoặc:
yarn build
# hoặc:
pnpm build
```

Kết quả build nằm ở thư mục `dist/`.

## Chạy thử production build

```bash
npm run preview
# hoặc:
yarn preview
# hoặc:
pnpm preview
```

## Các lệnh lint & format

- Kiểm tra code với eslint:
  ```bash
  npm run lint
  ```

- Format code với prettier:
  ```bash
  npm run format
  ```

## Ghi chú thêm

- Dự án này sử dụng React, TypeScript, Vite.
- Có cấu hình sẵn ESLint cho project.
- Có hỗ trợ hot module replacement (HMR).
- Nếu bạn muốn cấu hình sâu hơn về ESLint, hãy mở file `eslint.config.js` để điều chỉnh.

Mọi thắc mắc thêm xin vui lòng liên hệ maintainer hoặc xem tài liệu chi tiết tại từng file cấu hình/tệp source.
