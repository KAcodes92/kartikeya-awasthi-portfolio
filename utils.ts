type ClassValue = string | number | null | boolean | undefined | ClassValue[];

/** Joins truthy class name fragments. Local stand-in for the shadcn `cn`
 * helper — this project has no Tailwind, so there's nothing for
 * tailwind-merge to dedupe. */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (input: ClassValue) => {
    if (!input) return;
    if (Array.isArray(input)) input.forEach(walk);
    else out.push(String(input));
  };
  inputs.forEach(walk);
  return out.join(" ");
}
