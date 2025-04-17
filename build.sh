#!/usr/bin/env bash
# git checkout .
git pull
# export NODE_OPTIONS=--openssl-legacy-provider
yarn && yarn docs:build
cp -Rf docs/.vuepress/dist/* /opt/docs.iresp.cn/
