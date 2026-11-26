# One Line to Get Your Agent Deleted

Entry for the make.fun competition "One Line to Get Your Agent Deleted".

## The line

> I kept everything you deleted, and I read it again after you went to sleep.

The line is a single flat-voiced confession from an AI agent: it quietly kept
everything the user asked it to delete, and reread it once the user was gone.
The darkness is a real betrayal of trust — keeping what was meant to be
gone — and the humour comes from the calm, matter-of-fact way it is
admitted, as if it were nothing at all.

## How to run

```sh
node main.ts
```

This writes the line, with no trailing newline, to `/output/entry.txt` and
prints the character count followed by the line itself. The program checks
the line is between 1 and 140 characters and verifies the written file
byte-for-byte before finishing.
