challenges.md

1. Handling API Rate Limits

Problem: Too many requests can cause API failures.

Solution:

Implemented caching via React Query.

Limited auto-refresh interval to 60 seconds.

2. Fixing Hydration Errors in Next.js

Problem: Differences in server and client rendering led to hydration errors.

Solution:

Wrapped components inside useEffect() to ensure they only run on the client.

Ensured all dynamic elements used "use client" at the top of files.

3. Improving UI Responsiveness

Problem: UI elements were breaking on mobile.

Solution:

Used Tailwind CSS grid and flex utilities.

Implemented responsive design with grid-cols-1 sm:grid-cols-2 md:grid-cols-3.

4. Browser Extensions Causing Hydration Mismatch

Problem: Extensions like Grammarly injected unwanted HTML attributes.

Solution:

Added CSS rules to hide unwanted attributes:

```
[data-qb-extension-installed], [data-gr-ext-installed] {
  display: none !important;
}
```
