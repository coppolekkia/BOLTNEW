[![Bolt.new: AI-Powered Full-Stack Web Development in the Browser](./public/social_preview_index.jpg)](https://bolt.new)

# Bolt.new: AI-Powered Full-Stack Web Development in the Browser

Bolt.new is an AI-powered web development agent that allows you to prompt, run, edit, and deploy full-stack applications directly from your browser—no local setup required. If you're here to build your own AI-powered web dev agent using the Bolt open source codebase, [click here to get started!](./CONTRIBUTING.md)

## What Makes Bolt.new Different

Claude, v0, etc are incredible- but you can't install packages, run backends or edit code. That’s where Bolt.new stands out:

- **Full-Stack in the Browser**: Bolt.new integrates cutting-edge AI models with an in-browser development environment powered by **StackBlitz’s WebContainers**. This allows you to:
  - Install and run npm tools and libraries (like Vite, Next.js, and more)
  - Run Node.js servers
  - Interact with third-party APIs
  - Deploy to production from chat
  - Share your work via a URL

- **AI with Environment Control**: Unlike traditional dev environments where the AI can only assist in code generation, Bolt.new gives AI models **complete control** over the entire  environment including the filesystem, node server, package manager, terminal, and browser console. This empowers AI agents to handle the entire app lifecycle—from creation to deployment.

Whether you’re an experienced developer, a PM or designer, Bolt.new allows you to build production-grade full-stack applications with ease.

For developers interested in building their own AI-powered development tools with WebContainers, check out the open-source Bolt codebase in this repo!

## Tips and Tricks

Here are some tips to get the most out of Bolt.new:

- **Be specific about your stack**: If you want to use specific frameworks or libraries (like Astro, Tailwind, ShadCN, or any other popular JavaScript framework), mention them in your initial prompt to ensure Bolt scaffolds the project accordingly.

- **Use the enhance prompt icon**: Before sending your prompt, try clicking the 'enhance' icon to have the AI model help you refine your prompt, then edit the results before submitting.

- **Scaffold the basics first, then add features**: Make sure the basic structure of your application is in place before diving into more advanced functionality. This helps Bolt understand the foundation of your project and ensure everything is wired up right before building out more advanced functionality.

- **Batch simple instructions**: Save time by combining simple instructions into one message. For example, you can ask Bolt to change the color scheme, add mobile responsiveness, and restart the dev server, all in one go saving you time and reducing API credit consumption significantly.

## FAQs

**Where do I sign up for a paid plan?**  
Bolt.new is free to get started. If you need more AI tokens or want private projects, you can purchase a paid subscription in your [Bolt.new](https://bolt.new) settings, in the lower-left hand corner of the application. 

**What happens if I hit the free usage limit?**  
Once your free daily token limit is reached, AI interactions are paused until the next day or until you upgrade your plan.

**Is Bolt in beta?**  
Yes, Bolt.new is in beta, and we are actively improving it based on feedback.

**How can I report Bolt.new issues?**  
Check out the [Issues section](https://github.com/stackblitz/bolt.new/issues) to report an issue or request a new feature. Please use the search feature to check if someone else has already submitted the same issue/request.

**What frameworks/libraries currently work on Bolt?**  
Bolt.new supports most popular JavaScript frameworks and libraries. If it runs on StackBlitz, it will run on Bolt.new as well.

**How can I add make sure my framework/project works well in bolt?**  
We are excited to work with the JavaScript ecosystem to improve functionality in Bolt. Reach out to us via [hello@stackblitz.com](mailto:hello@stackblitz.com) to discuss how we can partner!
# [![Bolt Open Source Codebase](./public/social_preview_index.jpg)](https://bolt.new)

Добро пожаловать в открытый исходный код **Bolt**! Этот репозиторий содержит простой пример приложения, использующего основные компоненты из bolt.new, который поможет вам начать создавать **инструменты разработки программного обеспечения на основе ИИ** с использованием **WebContainer API** от StackBlitz.

### Почему стоит использовать Bolt + WebContainer API для разработки приложений?

Используя Bolt + WebContainer API, вы можете создавать браузерные приложения, позволяющие пользователям **запускать, редактировать и развертывать** полнофункциональные веб-приложения непосредственно в браузере, без необходимости использования виртуальных машин. С помощью WebContainer API вы можете создавать приложения, предоставляющие ИИ прямой доступ и полный контроль над **сервером Node.js**, **файловой системой**, **менеджером пакетов** и **терминалом разработчика** прямо во вкладке браузера пользователя. Эта мощная комбинация позволяет создать новый класс инструментов разработки, поддерживающих все основные библиотеки JavaScript и пакеты Node сразу после установки, без удаленных сред или локальной установки.

### В чём разница между Bolt (этот репозиторий) и [Bolt.new](https://bolt.new)?

- **Bolt.new**: Это **коммерческий продукт** от StackBlitz — размещенный в браузере инструмент для разработки ИИ, позволяющий пользователям запускать, редактировать и развертывать полнофункциональные веб-приложения непосредственно в браузере. Он создан на основе [репозитория с открытым исходным кодом Bolt](https://github.com/stackblitz/bolt.new) и работает на базе **API WebContainer** от StackBlitz.

- **Bolt (Этот репозиторий)**: Этот репозиторий с открытым исходным кодом предоставляет основные компоненты, используемые для создания **Bolt.new**. В репозитории содержится пользовательский интерфейс Bolt, а также серверные компоненты, созданные с помощью [Remix Run](https://remix.run/). Используя этот репозиторий и **WebContainer API** от StackBlitz, вы можете создавать собственные инструменты разработки на основе ИИ и полнофункциональные приложения, работающие полностью в браузере.

# Начните создавать с помощью Bolt

Bolt объединяет возможности ИИ с изолированными средами разработки, создавая среду для совместной работы, где ассистент и программист могут разрабатывать код вместе. Bolt использует [WebContainer API](https://webcontainers.io/api) с [Claude Sonnet 3.5](https://www.anthropic.com/news/claude-3-5-sonnet) с помощью [Remix](https://remix.run/) и [AI SDK](https://sdk.vercel.ai/).

### API веб-контейнера

Bolt использует [WebContainers](https://webcontainers.io/) для запуска сгенерированного кода в браузере. WebContainers предоставляют Bolt полнофункциональную изолированную среду с помощью [WebContainer API](https://webcontainers.io/api). WebContainers запускают полнофункциональные приложения непосредственно в браузере без затрат и проблем с безопасностью, связанных с облачными агентами ИИ. WebContainers интерактивны и редактируемы, что позволяет ИИ Bolt запускать код и понимать любые изменения, внесенные пользователем.

API WebContainer (https://webcontainers.io) бесплатен для личного использования и использования в проектах с открытым исходным кодом. Если вы разрабатываете приложение для коммерческого использования, вы можете узнать больше о ценах на коммерческое использование API WebContainer здесь (https://stackblitz.com/pricing#webcontainer-api).

### Приложение Remix

Bolt создан с помощью [Remix](https://remix.run/) и
Развернуто с использованием [CloudFlare Pages](https://pages.cloudflare.com/) и
[Работники CloudFlare](https://workers.cloudflare.com/).

### Интеграция SDK для ИИ

Bolt использует [AI SDK](https://github.com/vercel/ai) для интеграции с ИИ.
модели. В настоящее время Bolt поддерживает использование Claude Sonnet 3.5 от Anthropic.
Для использования с Bolt вы можете получить ключ API в [консоли Anthropic API](https://console.anthropic.com/).
Посмотрите, как [Bolt использует AI SDK](https://github.com/stackblitz/bolt.new/tree/main/app/lib/.server/llm)

## Предварительные условия

Прежде чем начать, убедитесь, что у вас установлено следующее:

- Node.js (v20.15.1)
- pnpm (v9.4.0)

## Настраивать

1. Клонируйте репозиторий (если вы еще этого не сделали):

```bash
git clone https://github.com/stackblitz/bolt.new.git
```

2. Установите зависимости:

```bash
pnpm install
```

3. Создайте файл `.env.local` в корневом каталоге и добавьте в него свой ключ API Anthropic:

```
ANTHROPIC_API_KEY=XXX
```

При желании можно установить уровень отладки:

```
VITE_LOG_LEVEL=debug
```

**Важно**: Никогда не добавляйте файл `.env.local` в систему контроля версий. Он уже включен в файл `.gitignore`.

## Доступные скрипты

- `pnpm run dev`: Запускает сервер разработки.
- `pnpm run build`: Выполняет сборку проекта.
- `pnpm run start`: Запускает собранное приложение локально с помощью Wrangler Pages. Этот скрипт использует `bindings.sh` для настройки необходимых привязок, чтобы вам не приходилось дублировать переменные окружения.
- `pnpm run preview`: Собирает проект, а затем запускает его локально, что полезно для тестирования производственной сборки. Обратите внимание, что потоковая передача HTTP в настоящее время работает некорректно с `wrangler pages dev`.
- `pnpm test`: Запускает набор тестов с помощью Vitest.
- `pnpm run typecheck`: Выполняет проверку типов TypeScript.
- `pnpm run typegen`: Генерирует типы TypeScript с помощью Wrangler.
- `pnpm run deploy`: Собирает проект и развертывает его на Cloudflare Pages.

## Разработка

Для запуска сервера разработки:

```bash
pnpm run dev
```

Это запустит сервер разработки Remix Vite.

## Тестирование

Запустите набор тестов с помощью:

```bash
тест pnpm
```

## Развертывание

Для развертывания приложения на Cloudflare Pages:

```bash
pnpm run deploy
```

Убедитесь, что у вас есть необходимые разрешения и Wrangler правильно настроен для вашей учетной записи Cloudflare.
