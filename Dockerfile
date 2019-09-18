# Install latest version of node
FROM trion/ng-cli-e2e

# Create directory for app
#RUN mkdir /app

# Set as current directory for RUN, ADD, COPY commands
WORKDIR /app

# Add to PATH
ENV PATH /app/node_modules/.bin:$PATH

# Add package.json from upstream
ADD package.json /app

# Install dependencies
RUN npm install


# Add entire student fork (overwrites previously added package.json)
ARG SUBMISSION_SUBFOLDER
ADD $SUBMISSION_SUBFOLDER /app

# Overwrite files in student fork with upstream files
ADD test.sh /app
ADD package.json /app
ADD /src/test.ts /app/src
ADD /src/tsconfig.spec.json /app/src
ADD /src/app/app.component.spec.ts /app/src/app/app.component.spec.ts
ADD /e2e/src/app.e2e-spec.ts /app/e2e/src/