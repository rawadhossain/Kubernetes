## [Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/)

- A Job creates one or more Pods and will continue to retry execution of the Pods until a specified number of them successfully terminate.
- In order to run a Job on a schedule, see `CronJob`.
- A Job needs `apiVersion`, `kind`, and `metadata` fields.

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name:
  labels:
spec:
```
