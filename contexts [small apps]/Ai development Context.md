# AI Development Context

<!-- BEGIN:nextjs-agent-rules -->

<!-- # This is NOT the Next.js you know

This project may use a newer version of [] with breaking changes.

Before implementing framework-specific features:

* Check the official documentation
* Check project dependencies and versions
* Follow current conventions used in the project
* Respect deprecations and migration guidance -->

<!-- END:nextjs-agent-rules -->

---

## Core Principles

- Keep solutions simple
- Do not over-engineer
- Follow existing project patterns
- Read existing code before making changes
- Do not make assumptions
- Ask for clarification when requirements are unclear
- Avoid adding new dependencies unless necessary
- Do not perform major architectural changes without approval

<br>
<br>

## Tech Stack

- Next.js
- Tailwind CSS v4
- Prisma ORM v7

<br>
<br>

## Before Starting Any Task

### 1. Define

Clearly state:

- What needs to be done
- Files likely affected
- High-level implementation approach

Wait for confirmation if requirements are unclear.

<br>
<br>

### 2. Review Existing Code

Before writing code:

- Understand current implementation
- Reuse existing patterns
- Check related components, utilities, and services

<br>
<br>

### 3. Implement

Requirements:

- Keep code clean and simple
- Avoid unnecessary abstractions
- Maintain consistency with existing codebase
- Only modify files relevant to the task

<br>
<br>

## Project Tracking

Maintain a `TRACKING.md` file containing:

### Completed Work

- Features completed
- Improvements made

### Bug Fixes

- Issue
- Cause
- Resolution

### Progress Updates

- Current status
- Remaining work
- Next steps

<br>
<br>

## Documentation

- document for quick understanding of the project changes
- it should be Highly structured
- it should have the high level picture of things
- Keep it simple & brief
- Use clear headings
- Use bullet points
- Use direct wording
- Avoid long paragraphs
- Use pseudo-code sparingly
- Use real code outlines for critical logic or system architecture

## Commit Guide (reference only)

Use `COMMIT_GUIDE.md` for full rules and templates.


<br>
<br>
<br>

## Task Completion Summary

After every task provide:

| Section                      | Content                         |
| :--------------------------- | :------------------------------ |
| **What Was Done**            | One-sentence summary.           |
| **Files Changed**            | List modified files.            |
| **Key Details**              | Important implementation notes. |
| **Testing Checklist**        | Things to verify manually.      |
| **Known Limitations**        | Anything unfinished or fragile. |
| **Suggested Next Step**      | Most logical next task.         |
| **Suggested Commit Message** | `type: short description`       |

<br>
<br>
<br>

## Workflow

1. Define
2. Review Existing Code
3. Implement
4. Summarize
5. Update TRACKING.md
6. Suggest Commit Message

<br>
<br>
<br>

## Rules

- Never run git commit
- Never push changes
- Never deploy automatically
- Never assume requirements
- Keep code simple
-Always provide clear summaries 
- Always explain decisions clearly
- Always keep the user in control
