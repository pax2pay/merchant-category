# merchant-category

TypeScript library with information about merchant categories (MCCs) and the card programs they belong to.

## Install

```sh
npm install merchant-category
```

## Usage

```typescript
import { merchant } from "merchant-category"

// Look up a single category by its 4-digit MCC.
const category = merchant.Category.load("3000")
// { code: "3000", name: "United Airlines", category: "Airlines", ... }

// All known categories.
merchant.Category.all

// Categories whose MCCs intersect an inclusive code range.
merchant.Category.intersect("3000", "3999")

// Load a program together with the categories that belong to it.
const program = merchant.Program.load("A001")
// { name: "A001", categories: [...] }
```

## API

- `merchant.Category` — a merchant category. `load(code)`, `all`, `intersect(from, to)`, `belongs(category, program)`, plus `is`/`flaw`/`type` validation helpers.
- `merchant.Program` — a card program and its categories. `load(name)`, plus `is`/`flaw`/`type` helpers.

## Develop

```sh
npm run build   # compile to dist/
npm test        # run tests
npm run lint    # lint
```

