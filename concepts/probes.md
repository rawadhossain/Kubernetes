# [Probes](https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/)

- The `kubelet` uses liveness probes to know when to restart a container.
- The `kubelet` uses readiness probes to know when a container is ready to start accepting traffic.
- The `kubelet` uses startup probes to know when a container application has started.

## Liveness

- It determines when to restart a container.
- If a container fails its liveness probe repeatedly, the kubelet restarts the container.
- It does not wait for readiness probes to succeed.
    - To wait before executing a `liveness` probe define `initialDelaySeconds`.

## Readiness

- It determines when a container is ready to start accepting traffic.
    - Useful when waiting for an application to perform time-consuming initial tasks.
- If the `readiness` probe returns a failed state, Kubernetes removes the pod.
- Readiness probes runs on the container during its whole lifecycle.

## Startup

- It verifies whether the application within a container is started.
    - Used to adopt `liveness` checks on slow starting containers.
    - Avoiding them getting killed by the kubelet before they are up and running.
- If such a probe is configured, it disables liveness and readiness checks until it succeeds.
- It is only executed at startup.

##  Configuring Probes

```yaml
apiVersion: v1
kind: Pod
metadata:
spec:
  containers:
  - name:
    image:

    livenessProbe:
      exec:
        command:
      initialDelaySeconds:
      periodSeconds:

    readinessProbe:
      httpGet:
        path:
        port: # name or number
        httpHeaders:
        - name:
          value:
      initialDelaySeconds:
      periodSeconds:

    startupProbe:
      tcpSocket:
        port:
      initialDelaySeconds:
      periodSeconds:
```

- The `periodSeconds` field specifies that the `kubelet` should perform a `liveness` probe every 5 seconds.
- The `initialDelaySeconds` field tells the `kubelet` that it should wait 5 seconds before performing the first probe.
- Any code greater than or equal to `200` and less than `400` indicates success.
- The `successThreshold` is the minimum consecutive successes for the probe to be considered successful after having failed.
- The `failureThreshold` is the minimum consecutive successes for the probe to be considered successful after having failed.

## Termination of Pods

- During the graceful termination of the pod, `kubelet` makes requests to the container runtime to attempt to stop the containers 
in the pod by first sending a TERM (aka. `SIGTERM`) signal.
- Many container runtimes respect the `STOPSIGNAL` value defined in the container image.
- Once the grace period has expired, the KILL signal is sent to any remaining processes.
- The Pod termination flow is:
    1. The `kubelet` starts the termination process.
    3. The Pod in the API server is updated with the time beyond which the Pod is considered "dead".
        - If one of the Pod's containers has defined a `preStop` hook and the `terminationGracePeriodSeconds` in the Pod \
        spec is not set to 0, the kubelet runs that hook inside of the container.
        - The default `terminationGracePeriodSeconds` setting is 30 seconds.
    4. The kubelet triggers the container runtime to send a `TERM` signal to processes inside each container.
    5. At the same time as the `kubelet` is starting graceful shutdown of the Pod.
    6. The kubelet ensures the Pod is shut down and terminated.
