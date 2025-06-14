# [Cron Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)

- A `CronJob` creates `Jobs` on a repeating schedule.
- `CronJob` is meant for performing regular scheduled actions such as backups, report generation, and so on.

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
spec:
  schedule:
  jobTemplate:
```
