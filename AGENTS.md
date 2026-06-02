# Coding Agent Guide

Read `PROJECT_CONTEXT.md` before making changes. It is the source of truth for
the site's structure, domains, forms, analytics, SEO rules, and level tests.

## Working Rules

- This is a static HTML/CSS/JavaScript website. Follow the existing patterns.
- Keep edits narrowly scoped to the requested task.
- Preserve unrelated local changes. The worktree may already be dirty.
- Do not commit, push, or deploy unless the user explicitly asks.
- Use `apply_patch` for manual edits.
- Keep public contact details and Formspree endpoints unchanged unless the user
  explicitly requests a change.
- Keep `PROJECT_CONTEXT.md` accurate when behavior or architecture changes.

## Verification

For frontend changes, run the relevant checks before reporting completion:

- parse all HTML files;
- parse inline JavaScript and JSON-LD blocks;
- run `git diff --check`;
- test the affected user flow;
- check responsive widths `320`, `375`, `390`, `414`, and `768` when layout or
  visible copy changes.

Use `PROJECT_CONTEXT.md` for feature-specific verification requirements.
