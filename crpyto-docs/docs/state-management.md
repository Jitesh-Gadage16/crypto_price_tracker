state-management.md

Using React Query for Data Management

React Query is used to fetch, cache, and update API data efficiently.

Benefits:

Caching to prevent unnecessary API calls.

Automatic background refetching.

Optimistic updates for a smooth UI experience.

Implementation:

```
const { data, isLoading, isError, refetch } = useQuery("cryptoPrices", fetchCryptoPrices, {
  refetchInterval: 60000, // Auto-refresh every 60 seconds
  staleTime: 30000,
  cacheTime: 300000,
  retry: 2,
});
```
