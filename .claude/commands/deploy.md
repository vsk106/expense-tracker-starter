Run the following deployment steps in order. **Stop immediately and report the failure if any step fails** — do not proceed to the next step.

## Step 1: Run Tests (Lint)
Run `npm run lint` in the project root.
- If it exits with errors, stop and tell the user which files/rules failed. Do NOT continue to Step 2.
- If it passes, proceed to Step 2.

## Step 2: Production Build
Run `npm run build`.
- If the build fails, stop and report the error. Do NOT continue to Step 3.
- If it passes, proceed to Step 3.

## Step 3: Deploy (Git Push)
Run `git push` to push the latest commit to the remote repository.
- Report success or any push errors.

## Final Summary
After all steps complete (or one fails), print a summary table:
- Lint:   ✅ passed / ❌ failed
- Build:  ✅ passed / ❌ failed
- Deploy: ✅ pushed / ❌ failed / ⏭️ skipped
