# Репозиторий для исходного кода сайта Labebe

## Основные файлы и структура

> ### <br> DIST
>
> <strong>dist</strong> - это продакшен папка, в ней находятся преобразованные сборщиком файлы. Она создается автоматически, в ней ничего трогать не нужно. Выгружать ее в этот репозиторий тоже не следует, для отправки страниц на ревью есть другой.
> <br>

<br>

> ### <br> SRC
>
> Тут находятся исходники, вся работа ведется здесь. На верхнем уровне лежат html файлы - страницы сайта.
> <strong>js</strong> - файлы javascript, чтобы все работало, нужно импортировать их в <strong>index.js</strong>
> с scss и fonts все и так понятно
> <br>

<br>

> ### <br> webpack.config.js
>
> Конфигурация сборщика, позволяет все это запускать.
> <br>

## Использование дев-сервера

> <br> Для запуска скрипа в консоли нужно прописать <strong>npm run</strong> и название скрипа
> <br>

```json
"scripts": {
	"start": "cross-env NODE_ENV=development webpack-dev-server --open",
	"build": "cross-env NODE_ENV=production webpack --mode production"
},
```

> <br> <strong>npm run start</strong> - запуск сервера для разработки
> <strong>npm run build</strong> - сборка проекта
> <br>

## Как добавить свою страницу в сборку

> <br>В массиве <strong>plugins</strong> в <strong>webpack.config.js</strong> есть экземпляры объектов <strong>HTMLWebpackPlugin</strong> - туда и нужно добавлять новые страницы
> <br>

```js
new HTMLWebpackPlugin({
	filename: 'index.html',
	template: 'index.html',
	minify: {
		removeComments: isProd,
		collapseWhitespace: isProd,
	},
}),
new HTMLWebpackPlugin({
	filename: '404.html',
	template: '404.html',
	minify: {
		removeComments: isProd,
		collapseWhitespace: isProd,
	},
}),
```

## Как добавить в сборку свои стили

> <br> Для того, чтобы в сборке оказались стили, их необходимо импортировать в <strong>styles.js</strong>
> <br>

```js
import '../scss/index.scss';
```

## Как добавить в сборку свои скрипты

> <br> Для того, чтобы добавить в сборку скрипты, их необходимо импортировать в <strong>index.js</strong>
> <br>
