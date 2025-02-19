# For siw-coordinator ONLY !!!
# Copy this script to scripts/setup.sh and replace `AUTHJS_BETA_VERSION` with correct beta version to test downstream in bacon
# DO NOT MERGE CHANGES IN scripts/setup.sh !!!

#!/bin/bash

# Install required node version
export REGISTRY_REPO="npm-topic"
export REGISTRY="${ARTIFACTORY_URL}/api/npm/${REGISTRY_REPO}"
setup_service node v12.13.0
# Use the cacert bundled with centos as okta root CA is self-signed and cause issues downloading from yarn
setup_service yarn 1.21.1 /etc/pki/tls/certs/ca-bundle.crt

cd ${OKTA_HOME}/${REPO}

# INSTALL BETA VERSION - script outside this block should be identical with setup.sh
echo "Installing BETA VERSION"

npm config set strict-ssl false

yarn add -DW --no-lockfile https://artifacts.aue1d.saasure.com/artifactory/npm-topic/@okta/okta-auth-js/-/@okta/{AUTHJS_BETA_VERSION}.tgz

echo "BETA VERSION installed"
# END INSTALL BETA VERSION

if ! yarn install ; then
  echo "yarn install failed! Exiting..."
  exit ${FAILED_SETUP}
fi
