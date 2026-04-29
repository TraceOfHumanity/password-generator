# Password Generator

An interactive password generator built with React + TypeScript, featuring flexible character set configuration and a modern visual interface.

## Features

- Password length configuration from `8` to `64`
- Character set selection via checkboxes:
  - Lowercase (`a-z`)
  - Uppercase (`A-Z`)
  - Numbers (`0-9`)
  - Symbols (`!@#$%^&*()_+=`)
  - Custom symbols (user input)
- Automatic whitespace removal in the `Custom symbols` field
- Generation is disabled when no character set is selected
- One-click copy of the generated password to clipboard
- Animated 3D background powered by `react-three-fiber` + GLSL shaders

## Generation Logic

- Duplicate characters are removed while building `characterList`
- Characters can repeat in the final password
- The number of combinations is calculated as `N^L`, where:
  - `N` is the number of unique characters in `characterList`
  - `L` is the password length

## Estimated Number of Combinations

- Minimum practical configuration (numbers only, length `8`): `10^8 = 100,000,000`
- Maximum base configuration without custom symbols (all built-in sets, length `64`): `75^64 ≈ 9.10 × 10^119`
- With `Custom symbols`, the upper bound depends on the number of unique input characters

## Scripts

- `npm run dev` - start development mode
- `npm run build` - production build
- `npm run preview` - preview production build
- `npm run lint` - run ESLint checks
- `npm run format` - format with Prettier
