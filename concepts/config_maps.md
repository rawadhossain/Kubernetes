## [Config Maps](https://kubernetes.io/docs/concepts/configuration/configmap/)

- A ConfigMap is an API object used to store non-confidential data in key-value pairs.
- Pods can consume ConfigMaps as environment variables, command-line arguments, or as configuration files in a volume.
- A ConfigMap allows you to decouple environment-specific configuration from your container images.
- Use a ConfigMap for setting configuration data separately from application code.
- A ConfigMap has `data` and `binaryData` fields.
    - The `data` field is designed to contain UTF-8 strings.
    - The `binaryData` field is designed to contain binary data as base64-encoded strings.
- There are **four different ways** that you can use a ConfigMap to configure a container inside a Pod:
    - Inside a container command and args.
    - Environment variables for a container.
    - Add a file in read-only volume, for the application to read.
    - Write code to run inside the Pod that uses the Kubernetes API to read a ConfigMap.
- ConfigMaps can be mounted as data volumes.
    - When a ConfigMap currently consumed in a volume is updated, projected keys are eventually updated as well.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name:
  labels:
data:
```
