# [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/)

- On-disk files in a container are ephemeral.
- Kubernetes supports several types of volumes:
    - `configMap`.
        - A `ConfigMap` provides a way to inject configuration data into pods.
        - When referencing a `ConfigMap`, you provide the name of the `ConfigMap` in the volume.
    - `emptyDir`:
        - The volume is created when the `Pod` is assigned to a node.
        - All containers in the `Pod` can read and write the same files in the emptyDir volume.
        - When a `Pod` is removed from a node for any reason, the data in the `emptyDir` is deleted permanently.
    - `secret`:
        - A secret volume is used to pass sensitive information, such as passwords, to `Pods`.
        - A `Secret` is always mounted as `readOnly`.

```yaml
apiVersion: v1
kind: Pod
metadata:
spec:
  containers:
  - image:
    volumeMounts:
    - mountPath:
      name:
  volumes:
  - name:
    emptyDir:
    configMap:
    secret:
```
