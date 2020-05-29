# Technical Debt

Although this file should contains technical debt, it also can contain
improvements or feature requests.

- [x] [Eslint on precommit](#eslint-on-precommit)
- [ ] [Add unit tests](#add-unit-tests)
- [x] [Implement proxy-storage](#implement-proxy-storage)
- [ ] [Implement Error Handler](#implement-error-handler)

---

## ESLint on precommit

[ESLint](https://eslint.org/docs/user-guide/getting-started) is a tool for
identifying and reporting on patterns found in ECMAScript/JavaScript code,
with the goal of making code more consistent and avoiding bugs.

[Husky](https://github.com/typicode/husky#readme) brings with some git hooks
where ESLint can help to grant the code to commit does not contain syntax
errors.

## Add unit tests

It is necessary to add unit tests whit Jest to ensure code quality and predictability.

## Implement proxy-storage

It is necessary in order to manage the same `WebStorage` interface for accessing `cookies`,
`localStorage` and `sessionStorage` and also to provide support for private mode browsing.

## Implement Error Handler

It would be great to implement an Error Manager System for JavaScript to
track down the errors handled and not handled by the application.

- [Exceptionless](https://exceptionless.com/)
- [RaygunJS](https://raygun.com/platform/crash-reporting)
