# CONTRIBUTING.md

## 1. Форкнуть репозиторий

Нажми "Fork" в правом верхнем углу репозитория — у тебя появится копия на твоём аккаунте.

## 2. Склонировать свой форк

```bash
git clone https://github.com/ТВОЙ_НИК/НАЗВАНИЕ_РЕПО.git
cd НАЗВАНИЕ_РЕПО
```

## 3. Добавить оригинальный репозиторий как upstream

Это нужно, чтобы подтягивать свежие изменения из основного репозитория.

```bash
git remote add upstream https://github.com/ОРИГИНАЛЬНЫЙ_НИК/НАЗВАНИЕ_РЕПО.git
```

Проверить, что всё подключилось:

```bash
git remote -v
```

## 4. Установить зависимости и запустить проект

```bash
npm install
npm run dev
```

## 5. Перед новой задачей — обновить main

```bash
git checkout main
git pull upstream main
git push origin main
```

## 6. Создать ветку под задачу

Название ветки — `feature/короткое-описание`, например `feature/todo-add-item`.

```bash
git checkout -b feature/todo-add-item
```

## 7. Закоммитить изменения

Коммить небольшими логичными шагами, с понятным сообщением.

```bash
git add .
git commit -m "Add item creation form to todo list"
```

## 8. Запушить ветку в свой форк

```bash
git push origin feature/todo-add-item
```

## 9. Открыть Pull Request

На GitHub — кнопка "Compare & pull request". Base repository: оригинальный репозиторий, ветка `main`. Head repository: твой форк, твоя ветка.

В описании PR укажи:

- что сделано
- как это проверить (шаги)
- скриншот, если менялся интерфейс
- ссылку на issue, если есть: `Closes #3`

## 10. Дождаться ревью

Проверяющий может оставить комментарии — их нужно поправить в той же ветке и запушить ещё раз, PR обновится автоматически:

```bash
git add .
git commit -m "Address review comments"
git push origin feature/todo-add-item
```

## 11. После мержа

Ветку можно удалить, а main форка — обновить (см. пункт 5) перед следующей задачей.

## Быстрая шпаргалка

| Действие | Команда |
|---|---|
| Обновить main | `git checkout main && git pull upstream main` |
| Новая ветка | `git checkout -b feature/название` |
| Статус | `git status` |
| Закоммитить | `git add . && git commit -m "сообщение"` |
| Запушить | `git push origin feature/название` |
