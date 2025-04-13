# Express APP with Typescript and module based

## Task CRUD Operation

### SetUp Guide

**Step 1: Git Setup**

Install Git on your PC

```bash
git init
git commit -m "Initial commit"
git branch -M main
```

Link to a remote repository:

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

**Step 2: Install Express**

```bash
npm init -y
npm install express
```

**Step 3: Setup TypeScript**

```bash
npm install typescript ts-node-dev @types/node @types/express -D
```

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

**Step 4: Using Prettier for Code Formatting**

```bash
npm install --save-dev prettier
```

Create a `.prettierrc` file:

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": false
}
```

Create a `.prettierignore` file and add:

```
node_modules
dist
```

**Step 5: Applying ESLint**

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
npx eslint --init
```

Configure your ESLint settings using `eslint.config.mjs`.

**Step 6: Add Husky for Pre-commit Hooks**

```bash
npx husky install
npx husky add .husky/pre-commit "npx prettier --write . && npx eslint ."
```

Make sure `"prepare": "husky install"` is added in your `package.json` scripts.

**Step 7: Create Folder Structure**

- `src/config` - for environment and database config
- `src/models` - for Mongoose schemas
- `src/controllers` - for controller logic
- `src/services` - for business logic
- `src/routes` - for route definitions
- `src/middleware` - for middleware like validation
- `src/utils` - for helper functions
- `src/app.ts` - main app configuration
- `src/server.ts` - starting the server

**Step 8: Database Setup**

```bash
npm install mongoose
```

Configure and connect the MongoDB instance in `src/config/db.ts`.

**Step 9: Add Controllers**

Create CRUD logic in `src/controllers` and `src/services`.

**Step 10: Test API Manually via Postman**

Use Postman to test all CRUD endpoints.

**Step 11: Push to GitHub**

---

## Usage

1. Clone the repository
2. Run `npm install`
3. Add `.env` file by copying from `.env.example`
4. Add scripts in `package.json`
5. Run `npm run dev`

