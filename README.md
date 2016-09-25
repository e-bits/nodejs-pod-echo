# nodejs-pod-echo
Little nodejs-pod which returns the process name to show how the scaling on openshift is working

## The project

After logging in with `oc login`, if you don't have a project setup all ready, go ahead and take care of that

        $ oc new-project nodejs-pod-echo --display-name="nodejs-pod-echo" --description="Sample Node.js app"

That's it, project has been created, set it to your active project

        $ oc project nodejs-pod-echo

## The app

Now let's pull in the app source code from [GitHub repo](https://github.com/e-bits/nodejs-pod-echo) (fork if you like).

## create

        $ oc new-app https://github.com/e-bits/nodejs-pod-echo -l name=pod-echo -l version=v1
