# Проектная работа "WebLarek. Плохой сервер.", спринт 19
# Weblarek Backend (bad-server)

## 📎 Ссылки

- 🔗 Репозиторий: https://github.com/nestlir/bad-server
- 👤 Автор: Анастасия
- 💻 Когорта: 12 + фулстек, курс «Бэкенд»
- 🌐 Демо: *опционально, если опубликовано* не а.

---

## 📦 Что реализовано

- Регистрация и вход с токенами (JWT)
- Защита refresh-токенов (cookie + hash)
- Заказ товаров: создание, просмотр, фильтрация
- Разделение ролей: админ / пользователь
- Безопасность: XSS, NoSQL, ReDoS, DDoS, Path Traversal — устранены

## 🚀 Как протестировать

1. Зарегистрируйтесь: `POST /auth/register`
2. Войдите: `POST /auth/login`
3. Получите список товаров: `GET /product`
4. Создайте заказ: `POST /order` (только авторизованным)
5. Посмотрите заказ: `GET /order/all/me`
